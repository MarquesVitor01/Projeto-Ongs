import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import BottomBar from "@/src/components/BottomBar";
import { useRouter } from "expo-router";

export default function PerfilScreen() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    switch (route) {
      case "":
        router.push("/");
        break;
      case "":
        router.push("/");
        break;
      case "":
        router.push("/");
        break;
      case "":
        router.push("/");
        break;
      default:
        console.warn("Rota inválida:", route);
    }
  };

  const handleVoltar = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleVoltar}>
        <FontAwesome5 name="arrow-left" size={20} color="#16232C" />
      </TouchableOpacity>

      <BottomBar onPress={handleNavigate} />
    </View>
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
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    paddingTop: 60,
  },
  
});
