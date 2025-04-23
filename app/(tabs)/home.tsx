import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import HomeScreen from '@/src/screens/HomeScreen';
import SideBar from '@/src/components/SideBar';

export default function Profile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <SideBar visible={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {!isSidebarOpen && (
        <TouchableOpacity
          onPress={() => setIsSidebarOpen(true)}
          style={styles.menuButton}
        >
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      )}

      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  menuText: {
    fontSize: 22,
    color: "#5B2A6C"
  },
});
