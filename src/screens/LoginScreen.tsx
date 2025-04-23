import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@admin.com" && password === "123456") {
      router.push("/home");
    } else {
      Alert.alert("Erro", "Email ou senha incorretos");
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert("Login com Google", "Funcionalidade em desenvolvimento");
  };

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
        title="Entrar com Google"
        onPress={handleGoogleLogin}
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
