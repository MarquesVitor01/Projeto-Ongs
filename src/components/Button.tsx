import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: "primary" | "secondary";
};

export default function Button({ title, onPress, variant = "primary" }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, variant === "secondary" && styles.secondaryButton]}
    >
      <Text style={[styles.buttonText, variant === "secondary" && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#16232C",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#16232C",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#16232C",
  },
});
