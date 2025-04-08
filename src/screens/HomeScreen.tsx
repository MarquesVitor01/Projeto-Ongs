import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
        <Text style={{ fontSize: 26 }}>☰</Text>
      </TouchableOpacity>

      <Image source={require('../assets/logo.png')} style={styles.banner} />
      <Text style={styles.title}>Bem-vindo ao App</Text>
      <Text style={styles.subtitle}>Explore tudo que preparamos</Text>
      <Text style={styles.text}>
        Esse app foi criado pensando na sua experiência. Use o menu lateral para acessar outras seções e aproveite o conteúdo!
        Esse app foi criado pensando na sua experiência. Use o menu lateral para acessar outras seções e aproveite o conteúdo!
        Esse app foi criado pensando na sua experiência. Use o menu lateral para acessar outras seções e aproveite o conteúdo!
        Esse app foi criado pensando na sua experiência. Use o menu lateral para acessar outras seções e aproveite o conteúdo!
        Esse app foi criado pensando na sua experiência. Use o menu lateral para acessar outras seções e aproveite o conteúdo!
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingTop: 100,
  },
  menuIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  banner: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
    textAlign: 'center',
  },
});
