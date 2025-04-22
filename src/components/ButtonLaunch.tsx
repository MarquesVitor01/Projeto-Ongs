import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: "primary" | "secondary";
};

export default function ButtonLaunch({ title, onPress, variant = "primary" }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, variant === "secondary" && styles.secondaryButton]}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "secondary" && styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 207,
    height: 45,
    backgroundColor: "#16232C",
    borderRadius: 40,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButton: {
    backgroundColor: "#B1B1B1",
  },
  buttonText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#0E3E3E",
  },
});
