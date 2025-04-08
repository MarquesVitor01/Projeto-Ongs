// components/BottomBar.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface BottomBarProps {
  onPress?: (route: string) => void;
}

export default function BottomBar({ onPress }: BottomBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress?.('inicio')} style={styles.iconButton}>
        <FontAwesome name="home" size={24} color="#fff" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress?.('sobre')} style={styles.iconButton}>
        <FontAwesome name="bell" size={24} color="#fff" />
        <Text style={styles.label}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress?.('projetos')} style={styles.iconButton}>
        <FontAwesome name="folder" size={24} color="#fff" />
        <Text style={styles.label}>Projetos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress?.('inicio')} style={styles.iconButton}>
        <FontAwesome name="user" size={24} color="#fff" />
        <Text style={styles.label}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#16232C',
    paddingVertical: 10,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  iconButton: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
});
