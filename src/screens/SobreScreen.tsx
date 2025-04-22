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
          case 'inicio':
            router.push('/inicio'); 
            break;
          case 'projetos':
            router.push('/projetos');
            break;
          case 'sobre':
            router.push('/sobre');
            break;
          case 'inicio':
            router.push('/inicio');
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
          <TopicItem icon="futbol-o" label="ESPORTE" />
          <TopicItem icon="heartbeat" label="SAÚDE" />
          <TopicItem icon="paint-brush" label="CULTURA" />
          <TopicItem icon="balance-scale" label="CIDADANIA" />
          <TopicItem icon="star" label="PROTAGONISMO" />
          <TopicItem icon="users" label="COMUNIDADE" />
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
    backgroundColor: "#fafafa",
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  line: {
    height: 2,
    backgroundColor: "#ccc",
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#555",
  },
  topicList: {
    marginTop: 10,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
    marginTop: 10,
  },
});
