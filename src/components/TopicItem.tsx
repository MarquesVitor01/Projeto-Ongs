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
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 18,
    color: '#fff',
  },
});
