import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomBar from "../components/BottomBar";

// Mapeia dados por esporte
const esportesData: Record<
  string,
  {
    image: any;
    subtitle: string;
    description: string;
    topics: { icon: any; text: string }[];
  }
> = {
  Futebol: {
    image: require("../assets/soccer.avif"),
    subtitle: "Saúde, bem-estar e diversão",
    description:
      "Participe das nossas atividades esportivas semanais e melhore seu condicionamento físico enquanto se diverte!",
    topics: [
      { icon: "running", text: "Corridas e caminhadas em grupo" },
      { icon: "futbol", text: "Futebol e vôlei aos finais de semana" },
      { icon: "bicycle", text: "Passeios ciclísticos pela cidade" },
    ],
  },
  "Esporte sem Barreiras": {
    image: require("../assets/pcd.avif"),
    subtitle: "Inclusão e acessibilidade para todos",
    description:
      "Atividades adaptadas para pessoas com deficiência, promovendo saúde e integração social.",
    topics: [
      { icon: "wheelchair", text: "Modalidades para cadeirantes" },
      { icon: "hands-helping", text: "Apoio e acompanhamento constante" },
      { icon: "heart", text: "Promoção de autoestima e bem-estar" },
    ],
  },
  Capoeira: {
    image: require("../assets/capoeira.avif"),
    subtitle: "Cultura, ritmo e movimento",
    description:
      "Venha vivenciar a arte da capoeira e desenvolver equilíbrio, ritmo e força física.",
    topics: [
      { icon: "music", text: "Roda de capoeira com instrumentos" },
      { icon: "heartbeat", text: "Atividade física com consciência corporal" },
      { icon: "users", text: "Socialização e trabalho em grupo" },
    ],
  },
};

export default function EsportesScreen() {
  const router = useRouter();
  const { titulo } = useLocalSearchParams();
  const esporte = titulo?.toString() || "";
  const data = esportesData[esporte];

  const handleParticipar = () => {
    router.push({
      pathname: "/confirmacao",
      params: { titulo: esporte },
    });
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
      case "agenda":
        router.push("/agenda");
        break;
      default:
        console.warn("Rota inválida:", route);
    }
  };

  const handleVoltar = () => {
    router.back();
  };

  if (!data) {
    return (
      <View style={styles.scrollContainer}>
        <Text style={styles.title}>Esporte não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleVoltar}>
        <FontAwesome5 name="arrow-left" size={20} color="#16232C" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>{esporte}</Text>

        <Image source={data.image} style={styles.image} resizeMode="cover" />

        <Text style={styles.subtitle}>{data.subtitle}</Text>
        <Text style={styles.description}>{data.description}</Text>

        {data.topics.map((topic, index) => (
          <View key={index} style={styles.topic}>
            <FontAwesome5
              name={topic.icon}
              size={22}
              color="#16232C"
              style={styles.icon}
            />
            <Text style={styles.topicText}>{topic.text}</Text>
          </View>
        ))}

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
