import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useUser } from "../context/UserContext";

// Define os nomes possíveis dos esportes como tipo
type EsporteNome = "Futebol" | "Esporte sem Barreiras" | "Capoeira";

const esportesData: Record<EsporteNome, { horario: string; local: string }> = {
  Futebol: {
    horario: "Finais de semana",
    local: "Parque da Cidade",
  },
  "Esporte sem Barreiras": {
    horario: "Quartas e sextas",
    local: "Centro Esportivo Inclusivo",
  },
  Capoeira: {
    horario: "Terças e quintas à noite",
    local: "Centro Cultural do Bairro",
  },
};

export default function ConfirmacaoScreen() {
  const { user } = useUser();
  const router = useRouter();
  const { titulo } = useLocalSearchParams();
  const esporte = (titulo?.toString() || "") as EsporteNome;

  const [selectedOption, setSelectedOption] = useState("iniciante");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");

  const info = esportesData[esporte] ?? {
    horario: "Horário indefinido",
    local: "Local indefinido",
  };

  const handleSubmit = async () => {
    if (!esporte || !selectedOption || !nome || !email || !nascimento) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      if (!user || !user.uid) {
        Alert.alert("Erro", "Usuário não autenticado.");
        return;
      }

      await addDoc(collection(db, "agenda"), {
        userId: user.uid,
        nome,
        email,
        nascimento,
        selectedOption,
        esporte,
        horario: info.horario,
        local: info.local,
        createdAt: new Date().toLocaleDateString("pt-BR"),
      });

      Alert.alert("Sucesso", "Dados salvos com sucesso!");

      setSelectedOption("iniciante");
      setNome("");
      setEmail("");
      setNascimento("");

      router.push("/finalizado");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Feather name="arrow-left" size={20} color="#16232C" />
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>Confirmação de Participação</Text>
        <Text style={styles.subtitle}>Estamos quase lá!</Text>
        <Text style={styles.subtitleSmall}>
          Finalize sua inscrição preenchendo os dados abaixo:
        </Text>

        {/* Resumo da atividade */}
        <View style={styles.topic}>
          <FontAwesome5
            name="futbol"
            size={18}
            color="#5B2A6C"
            style={styles.icon}
          />
          <Text style={styles.topicText}>Atividade escolhida: {esporte}</Text>
        </View>
        <View style={styles.topic}>
          <FontAwesome5
            name="calendar-alt"
            size={18}
            color="#5B2A6C"
            style={styles.icon}
          />
          <Text style={styles.topicText}>Horário: {info.horario}</Text>
        </View>
        <View style={styles.topic}>
          <FontAwesome5
            name="map-marker-alt"
            size={18}
            color="#5B2A6C"
            style={styles.icon}
          />
          <Text style={styles.topicText}>Local: {info.local}</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />
          <Text style={styles.label}>Email de contato</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@email.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={nascimento}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => {
              // Remove tudo que não é número
              const cleaned = text.replace(/\D/g, "");

              // Aplica a formatação DD/MM/AAAA
              let formatted = cleaned;
              if (cleaned.length > 2) {
                formatted = cleaned.slice(0, 2) + "/" + cleaned.slice(2);
              }
              if (cleaned.length > 4) {
                formatted = formatted.slice(0, 5) + "/" + cleaned.slice(4, 8);
              }

              setNascimento(formatted);
            }}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Seu nível de habilidade</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
              style={styles.picker}
              itemStyle={{ fontSize: 16 }}
            >
              <Picker.Item label="Iniciante" value="iniciante" />
              <Picker.Item label="Intermediário" value="intermediario" />
              <Picker.Item label="Avançado" value="avancado" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Confirmar Participação</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#F5F6FA",
    paddingTop: 100,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    paddingTop: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#16232C",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5B2A6C",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#6B6B6B",
    textAlign: "center",
    marginBottom: 20,
  },
  topic: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2EDF5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 12,
  },
  topicText: {
    fontSize: 14,
    color: "#3A3A3A",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#16232C",
    marginBottom: 4,
    marginLeft: 2,
  },
  input: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  pickerWrapper: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    height: 48,
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    height: Platform.OS === "android" ? 48 : 48,
    color: "#333",
  },
  button: {
    backgroundColor: "#16232C",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
