import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProjectCard from "../components/ProjectCard";
import BottomBar from "../components/BottomBar";
import { useRouter } from "expo-router";

export default function ProjetoScreen() {
  const router = useRouter();

  const handlePress = (titulo: string) => {
    router.push({
      pathname: "/esportes",
      params: { titulo },
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

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Projetos Disponíveis</Text>
        <Text style={styles.description}>
          Explore abaixo algumas soluções criadas com dedicação e propósito.
          Cada projeto é um passo rumo à inovação e ao impacto positivo.
        </Text>

        <ProjectCard
          title="Futebol"
          subtitle="São Paulo, SP"
          image={require("../assets/soccer.avif")}
          onPress={() => handlePress("Futebol")}
        />
        <ProjectCard
          title="Esporte sem Barreiras"
          subtitle="Campinas, SP"
          image={require("../assets/pcd.avif")}
          onPress={() => handlePress("Esporte sem Barreiras")}
        />
        <ProjectCard
          title="Capoeira"
          subtitle="Embu, SP"
          image={require("../assets/capoeira.avif")}
          onPress={() => handlePress("Capoeira")}
        />
        {/* <ProjectCard
          title="Ginástica Olímpica"
          subtitle="Taboão, SP"
          image={require("../assets/olimpica.avif")}
          onPress={() => handlePress("Ginástica Olímpica")}
        /> */}
      </ScrollView>

      <BottomBar onPress={handleNavigate} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  container: {
    padding: 27,
    paddingTop: 45,
    paddingBottom: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#16232C",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    lineHeight: 24,
    marginBottom: 30,
  },
});
