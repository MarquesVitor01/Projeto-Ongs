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

        <Image source={require('../assets/user.png')} style={styles.avatar} />
        <Text style={styles.userName}>Ian</Text>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuButton} onPress={() => handleNavigate('home')}>
            <FontAwesome name="home" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.menuText}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton} onPress={() => handleNavigate('(tabs)/perfil')}>
            <FontAwesome name="user" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton} onPress={() => handleNavigate('(tabs)/sobre')}>
            <FontAwesome name="info-circle" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.menuText}>Sobre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton} onPress={() => handleNavigate('(tabs)/projetos')}>
            <FontAwesome name="folder" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.menuText}>Projetos</Text>
          </TouchableOpacity>
        </View>

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
    width: 280,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: -50,
    backgroundColor: '#D32F2F',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: '#16232C',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  menuContainer: {
    flexGrow: 1,
    gap: 14,
    paddingTop: 50
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#16232C',
    borderRadius: 12,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 25,
  },
  logoutButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 70,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
