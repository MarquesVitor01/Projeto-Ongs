import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface SideBarProps {
  visible: boolean;
  onClose: () => void;
}

export default function SideBar({ visible, onClose }: SideBarProps) {
  const navigation = useNavigation();

  if (!visible) return null;

  const handleNavigate = (route: string) => {
    navigation.navigate(route as never); 
    onClose();
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.sidebar}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>

        <Image source={require('../assets/logo.png')} style={styles.avatar} />

        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('home')}>
          <FontAwesome name="home" size={20} color="#555" style={styles.icon} />
          <Text style={styles.menuText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('inicio')}>
          <FontAwesome name="user" size={20} color="#555" style={styles.icon} />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('(tabs)/sobre')}>
          <FontAwesome name="bell" size={20} color="#555" style={styles.icon} />
          <Text style={styles.menuText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('(tabs)/projetos')}>
          <FontAwesome name="folder" size={20} color="#555" style={styles.icon} />
          <Text style={styles.menuText}>Projetos</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.logoutButton} onPress={() => handleNavigate('(tabs)/login')}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 9,
  },
  sidebar: {
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: -50,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  logoutButton: {
    backgroundColor: '#e53935',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
