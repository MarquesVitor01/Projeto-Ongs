import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomBar from "../components/BottomBar";

export default function FinalizadoScreen() {
  const router = useRouter();

  const handleParticipar = () => {
    router.push("/home")
  };

  const handleNavigate = (route: string) => {
    switch (route) {
      case "home":
        router.push("/home");
        break;
      case "projetos":
        router.push("/projetos");
        break;
      case "sobre":
        router.push("/sobre");
        break;
      case "home":
        router.push("/home");
        break;
      default:
        console.warn("Rota inválida:", route);
    }
  };

  const handleVoltar = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleVoltar}>
        <FontAwesome5 name="arrow-left" size={20} color="#16232C" />
      </TouchableOpacity>
      <Image
        source={require("../assets/logo.png")}
        style={styles.image_logo}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.subtitle}>
          Parabéns! Sua participação está confirmada 🎉
        </Text>

        <Text style={styles.description}>
          Estamos muito felizes em contar com você.
          Juntos, vamos transformar vidas através do esporte e da solidariedade.
        </Text>

        <Image
        source={require("../assets/kids 1.png")}
        style={styles.image}
        resizeMode="contain"
      />
        <Text style={styles.description}>
        Obrigado por fazer parte dessa corrente do bem!
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleParticipar}>
          <Text style={styles.buttonText}>Voltar ao Inicio</Text>
        </TouchableOpacity>
      </View>
      <BottomBar onPress={handleNavigate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    zIndex: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#f0f2f5",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#16232C",
    marginBottom: 20,
    textAlign: "center",
  },
  image_logo: {
    width: "100%",
    height: 100,
    borderRadius: 16,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 16,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#5B2A6C",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#4A4A4A",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  topic: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 12,
    width: "100%",
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  topicText: {
    fontSize: 16,
    color: "#16232C",
    flexShrink: 1,
  },
  button: {
    marginTop: 25,
    backgroundColor: "#16232C",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
