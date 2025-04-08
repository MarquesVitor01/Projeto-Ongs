import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* <Text style={styles.textLogo}>
        JOGADA{'\n'}CERTA
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  textLogo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#333",
  },
});
