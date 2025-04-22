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

export default function EsportesScreen() {
  const router = useRouter();

  const handleParticipar = () => {
    alert("🎉 Você se inscreveu para participar!");
  };

  const handleNavigate = (route: string) => {
    switch (route) {
      case "inicio":
        router.push("/inicio");
        break;
      case "projetos":
        router.push("/projetos");
        break;
      case "sobre":
        router.push("/sobre");
        break;
      case "inicio":
        router.push("/inicio");
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
      <View style={styles.card}>
        <Text style={styles.title}>Futebol</Text>

        <Image
          source={require("../assets/logo.png")}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.subtitle}>Saúde, bem-estar e diversão</Text>

        <Text style={styles.description}>
          Participe das nossas atividades esportivas semanais e melhore seu
          condicionamento físico enquanto se diverte!
        </Text>

        <View style={styles.topic}>
          <FontAwesome5
            name="running"
            size={22}
            color="#16232C"
            style={styles.icon}
          />
          <Text style={styles.topicText}>Corridas e caminhadas em grupo</Text>
        </View>

        <View style={styles.topic}>
          <FontAwesome5
            name="futbol"
            size={22}
            color="#16232C"
            style={styles.icon}
          />
          <Text style={styles.topicText}>
            Futebol e vôlei aos finais de semana
          </Text>
        </View>

        <View style={styles.topic}>
          <FontAwesome5
            name="bicycle"
            size={22}
            color="#16232C"
            style={styles.icon}
          />
          <Text style={styles.topicText}>Passeios ciclísticos pela cidade</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleParticipar}>
          <Text style={styles.buttonText}>Participar</Text>
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
    backgroundColor: "#EDEFF1",
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
  image: {
    width: "100%",
    height: 200,
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
