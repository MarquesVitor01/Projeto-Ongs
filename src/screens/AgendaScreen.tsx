import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useUser } from "../context/UserContext";
import BottomBar from "../components/BottomBar";
import { useRouter } from "expo-router";

type AgendaItem = {
  id: string;
  nome: string;
  email: string;
  nascimento: string;
  selectedOption: string;
  esporte: string;
  horario: string;
  local: string;
};

export default function AgendaScreen() {
  const router = useRouter();
  const { user } = useUser();
  const [agenda, setAgenda] = useState<AgendaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchAgenda = async () => {
      try {
        const q = query(
          collection(db, "agenda"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const data: AgendaItem[] = [];

        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as AgendaItem);
        });

        setAgenda(data);
      } catch (error) {
        console.error("Erro ao buscar agenda:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgenda();
  }, [user]);

  const handleNavigate = (route: string) => {
    switch (route) {
      case "home":
        router.push("/home");
        break;
      case "projetos":
        router.push("/projetos");
        break;
      case "sobre":
        router.push("/sobre");
        break;
      case "agenda":
        router.push("/agenda");
        break;
      default:
        console.warn("Rota inválida:", route);
    }
  };

  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setIsModalVisible(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;

    try {
      await deleteDoc(doc(db, "agenda", itemToDelete));
      setAgenda((prev) => prev.filter((item) => item.id !== itemToDelete));
      setIsModalVisible(false);
      setItemToDelete(null);
    } catch (error) {
      console.error("Erro ao excluir atividade:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Minha Agenda de Esportes</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#5B2A6C" />
      ) : agenda.length === 0 ? (
        <Text style={styles.emptyText}>Nenhuma atividade agendada.</Text>
      ) : (
        agenda.map((item) => (
          <View key={item.id} style={styles.card}>
            <FontAwesome5
              name="trash"
              size={18}
              color="#D32F2F"
              style={styles.trashIcon}
              onPress={() => confirmDelete(item.id)}
            />

            <Text style={styles.cardTitle}>{item.esporte}</Text>
            <Text style={styles.cardSubtitle}>{item.local}</Text>
            <Text style={styles.cardSubtitle}>{item.horario}</Text>

            <View style={styles.topic}>
              <FontAwesome5
                name="user"
                size={16}
                color="#5B2A6C"
                style={styles.icon}
              />
              <Text style={styles.topicText}>Nome: {item.nome}</Text>
            </View>

            <View style={styles.topic}>
              <FontAwesome5
                name="envelope"
                size={16}
                color="#5B2A6C"
                style={styles.icon}
              />
              <Text style={styles.topicText}>Email: {item.email}</Text>
            </View>

            <View style={styles.topic}>
              <FontAwesome5
                name="birthday-cake"
                size={16}
                color="#5B2A6C"
                style={styles.icon}
              />
              <Text style={styles.topicText}>
                Nascimento: {item.nascimento}
              </Text>
            </View>

            <View style={styles.topic}>
              <FontAwesome5
                name="chart-line"
                size={16}
                color="#5B2A6C"
                style={styles.icon}
              />
              <Text style={styles.topicText}>Nível: {item.selectedOption}</Text>
            </View>
          </View>
        ))
      )}

      <BottomBar onPress={handleNavigate} />

      {/* Modal de Confirmação */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tem certeza?</Text>
            <Text style={styles.modalMessage}>
              Você tem certeza que deseja excluir esta atividade? Esta ação não
              pode ser desfeita.
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#F5F6FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#16232C",
    textAlign: "center",
    marginBlock: 20,
  },

  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 40,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5B2A6C",
    marginBottom: 12,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#5B2A6C",
    marginBottom: 12,
  },
  topic: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  topicText: {
    fontSize: 14,
    color: "#333",
  },
  trashIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5B2A6C",
    marginBottom: 12,
  },
  modalMessage: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
