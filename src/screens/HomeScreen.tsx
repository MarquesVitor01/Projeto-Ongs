import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome name="bars"  color="#5B2A6C" />
      </TouchableOpacity>

      <Image
        source={require("../assets/logo.png")}
        style={styles.banner}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo ao App</Text>
      <Text style={styles.subtitle}>Tudo o que você precisa em um só lugar</Text>

      <Text style={styles.text}>
        Este aplicativo foi criado para oferecer a melhor experiência possível.
        Explore nossos recursos abaixo ou navegue pelo menu lateral.
      </Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("(tabs)/projetos")}>
          <FontAwesome name="folder-open" size={28} color="#fff" />
          <Text style={styles.cardText}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("(tabs)/sobre")}>
          <FontAwesome name="info-circle" size={28} color="#fff" />
          <Text style={styles.cardText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("(tabs)/perfil")}>
          <FontAwesome name="user" size={28} color="#fff" />
          <Text style={styles.cardText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.logoutCard]}
          onPress={() => navigation.navigate("(tabs)/login")}
        >
          <FontAwesome name="sign-out" size={28} color="#fff" />
          <Text style={styles.cardText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  menuIcon: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  banner: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#16232C",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "justify",
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    rowGap: 20,
    columnGap: 20,
  },
  card: {
    backgroundColor: "#16232C",
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 16,
    alignItems: "center",
    width: "46%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  logoutCard: {
    backgroundColor: "#D32F2F", 
  },
  cardText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});
