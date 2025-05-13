import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/src/config/firebaseConfig";
import { useUser } from "@/src/context/UserContext";

type UserData = {
  id: any;
  uid: string;
  nome: string;
  email: string;
  numero: string;
  dataNascimento: string;
};

export default function CadastroScreen() {
  const router = useRouter();
  const { setUser } = useUser();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastrar = async () => {
    if (!nome || !email || !numero || !dataNascimento || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      const userData: UserData = {
        id: uid,
        uid,
        nome,
        email,
        numero,
        dataNascimento,
      };

      await setDoc(doc(db, "usuarios", uid), userData);
      setUser(userData);
      router.push("/home");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      Alert.alert("Erro", "Não foi possível criar a conta. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Criar Conta</Text>

      <Input placeholder="Nome completo" value={nome} onChangeText={setNome} icon="user" />
      <Input placeholder="Email" value={email} onChangeText={setEmail} icon="at" />
      <Input placeholder="Número de telefone" value={numero} onChangeText={setNumero} icon="phone" />
      <Input placeholder="Data de nascimento (DD/MM/AAAA)" value={dataNascimento} onChangeText={setDataNascimento} icon="calendar" />
      <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry icon="lock" />

      <Button title="Cadastrar" onPress={handleCadastrar} />
    </View>
  );
}

export const options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 64,
    backgroundColor: "#f2f2f2",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
});
