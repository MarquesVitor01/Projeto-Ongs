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
      <TouchableOpacity onPress={() => onPress?.('home')} style={styles.iconButton}>
        <FontAwesome name="home" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress?.('sobre')} style={styles.iconButton}>
        <FontAwesome name="info-circle" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress?.('projetos')} style={styles.iconButton}>
        <FontAwesome name="folder" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress?.('agenda')} style={styles.iconButton}>
        <FontAwesome name="calendar-check-o" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#16232C',
    paddingVertical: 30,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
