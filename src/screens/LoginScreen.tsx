import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
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

export default function LoginScreen() {
  const router = useRouter();
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha e-mail e senha.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      const docRef = doc(db, "usuarios", uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        Alert.alert("Erro", "Usuário não encontrado no banco de dados.");
        return;
      }

      const dataFromFirestore = docSnap.data();

      const userData: UserData = {
        id: uid, 
        uid: uid,
        nome: dataFromFirestore.nome,
        email: dataFromFirestore.email,
        numero: dataFromFirestore.numero,
        dataNascimento: dataFromFirestore.dataNascimento,
      };

      setUser(userData);
      router.push("/home");
    } catch (error) {
      console.log("Erro ao logar:", error);
      Alert.alert("Erro", "Credenciais inválidas ou erro na autenticação.");
    }
  };

  const handleCadastrar = () => {
    router.push("/cadastro")
  }

  const handleForgotPassword = () => {
    Alert.alert("Esqueceu sua senha?", "Vamos te ajudar a recuperar.");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Entrar</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        icon="at"
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        icon="lock"
      />

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <Button title="Entrar" onPress={handleLogin} />

      <View style={styles.divider} />

      <Button
        title="Cadastrar"
        onPress={handleCadastrar}
        variant="secondary"
      />
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
  forgotPassword: {
    textAlign: "right",
    color: "#3a4a55",
    marginBottom: 24,
    fontWeight: "500",
  },
  divider: {
    height: 16,
  },
});
