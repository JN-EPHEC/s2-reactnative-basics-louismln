import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TodoItem({ text }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F5F1E6',
    padding: 20,
    marginBottom: 20,
    borderColor: '#8B5E3C',
    borderWidth: 2,
    borderRadius : 8,
  },
  text: {
    fontSize: 18,
    color: '#4E3B2E',
  },
});