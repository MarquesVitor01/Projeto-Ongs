import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import InfoBlock from "../components/InfoBlock";
import TopicItem from "../components/TopicItem";
import BottomBar from "../components/BottomBar";
import { useRouter } from 'expo-router';

export default function SobreScreen() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    switch (route) {
      case 'home':
        router.push('/home');
        break;
      case 'projetos':
        router.push('/projetos');
        break;
      case 'sobre':
        router.push('/sobre');
        break;
      default:
        console.warn('Rota inválida:', route);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Sobre o App</Text>
        <View style={styles.line} />

        <Text style={styles.subtitle}>Nossa Missão</Text>

        <InfoBlock />

        <View style={styles.topicList}>
          <View style={styles.topicItem}><TopicItem icon="futbol-o" label="ESPORTE" /></View>
          <View style={styles.topicItem}><TopicItem icon="heartbeat" label="SAÚDE" /></View>
          <View style={styles.topicItem}><TopicItem icon="paint-brush" label="CULTURA" /></View>
          <View style={styles.topicItem}><TopicItem icon="balance-scale" label="CIDADANIA" /></View>
          <View style={styles.topicItem}><TopicItem icon="star" label="PROTAGONISMO" /></View>
          <View style={styles.topicItem}><TopicItem icon="users" label="COMUNIDADE" /></View>
        </View>

        <Text style={styles.description}>
          O Jogada Certa é um aplicativo criado para fortalecer o impacto social
          das ONGs que atuam com o esporte educacional. Nosso objetivo é
          facilitar a divulgação de projetos, eventos e serviços oferecidos por
          essas organizações, aproximando a comunidade, voluntários e apoiadores
          das iniciativas que transformam vidas por meio do esporte.
        </Text>
      </ScrollView>

      <BottomBar onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#16232C",
    textAlign: "center",
    marginBottom: 10,
  },
  line: {
    height: 3,
    backgroundColor: "#16232C",
    marginVertical: 15,
    width: "40%",
    alignSelf: "center",
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#C62828",
    marginBottom: 10,
    textAlign: "center",
  },
  topicList: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 12,
  },
  topicItem: {
    backgroundColor: "#16232C",
    padding: 25,
    borderRadius: 16,
    marginBottom: 12,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
    textAlign: "justify",
  },
});
