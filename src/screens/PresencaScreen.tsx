import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

export default function PresencaScreen() {
  const router = useRouter();
  const [selectedDates, setSelectedDates] = useState<Record<string, { selected: boolean; selectedColor: string }>>({});

  const handleDayPress = (day: any) => {
    const date = day.dateString;
    setSelectedDates((prev) => ({
      ...prev,
      [date]: {
        selected: !prev[date]?.selected,
        selectedColor: "#5B2A6C",
      },
    }));
  };

  const handleVoltar = () => {
    router.back();
  };

  const handleFinalizar = () => {
    alert("🎉 Participação finalizada com sucesso!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleVoltar}>
        <FontAwesome5 name="arrow-left" size={20} color="#16232C" />
      </TouchableOpacity>

      <Text style={styles.title}>Escolha seus dias preferidos</Text>

      <View style={styles.calendarWrapper}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={selectedDates}
          theme={{
            selectedDayBackgroundColor: "#5B2A6C",
            todayTextColor: "#16232C",
            arrowColor: "#5B2A6C",
            textMonthFontWeight: "bold",
            textDayFontSize: 14,
            textMonthFontSize: 16,
          }}
        />
      </View>

      <Text style={styles.subtitle}>Informações importantes</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Os dias selecionados são preferências e estão sujeitos à disponibilidade. Entraremos em contato para confirmar sua participação.
        </Text>
        <Text style={styles.infoItem}>⏰ Horário das aulas: 19h às 21h</Text>
        <Text style={styles.infoItem}>👥 Acompanhantes permitidos: até 2 pessoas</Text>
        <Text style={styles.infoItem}>💡 Dica motivacional: "A constância supera o talento quando o talento não se esforça."</Text>
      </View>

      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#f0f2f5",
    flexGrow: 1,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    zIndex: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#16232C",
    textAlign: "center",
    marginBottom: 20,
  },
  calendarWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#5B2A6C",
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: "#F9F9F9",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 24,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 12,
  },
  infoItem: {
    fontSize: 13,
    color: "#444",
    marginBottom: 6,
  },
  logo: {
    width: "100%",
    height: 50,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#16232C",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
