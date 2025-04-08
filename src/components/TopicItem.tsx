import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface TopicItemProps {
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
}

export default function TopicItem({ icon, label }: TopicItemProps) {
  return (
    <View style={styles.item}>
      <FontAwesome name={icon} size={20} color="#666" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
});
