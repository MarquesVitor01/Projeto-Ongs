import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function InfoBlock() {
  return (
    <View style={styles.container}>
      <FontAwesome name="info" size={32} color="#555" style={styles.icon} />
      <Text style={styles.text}>
        Nos núcleos, trabalhamos com o esporte educacional a partir de 6
        objetivos essenciais:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#444",
  },
});
