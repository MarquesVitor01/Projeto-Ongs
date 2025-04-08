import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type InputProps = TextInputProps & {
  icon?: keyof typeof FontAwesome.glyphMap;
};

export default function Input({ icon = 'user', ...props }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name={icon} size={20} color="#555" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaa"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
