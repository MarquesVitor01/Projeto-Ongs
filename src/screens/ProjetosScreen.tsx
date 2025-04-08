import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import BottomBar from '../components/BottomBar';
import { useRouter } from 'expo-router';

export default function ProjetoScreen() {
  const router = useRouter();

  const handlePress = (titulo: string) => {
    Alert.alert('Detalhes', `Você clicou no botão do ${titulo}`);
  };
  

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
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Meus Projetos</Text>
        <Text style={styles.subtitle}>Veja abaixo alguns dos meus trabalhos recentes:</Text>

        <ProjectCard
          title="Projeto 1"
          subtitle="Aplicativo de Lista de Tarefas"
          image={require('../assets/logo.png')}
          onPress={() => handlePress("Projeto 1")}
        />
        <ProjectCard
          title="Projeto 2"
          subtitle="Sistema de Vendas"
          image={require('../assets/logo.png')}
          onPress={() => handlePress("Projeto 2")}
        />
        <ProjectCard
          title="Projeto 3"
          subtitle="Website Portfólio"
          image={require('../assets/logo.png')}
          onPress={() => handlePress("Projeto 3")}
        />
      </ScrollView>

      <BottomBar onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});
