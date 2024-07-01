// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = ({ backgroundColor, text }) => {
  return (
    <View style={[styles.square, { backgroundColor }]}>
      <Text style={styles.squareText}>{text}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Square backgroundColor="red" text="Red" />
      <Square backgroundColor="green" text="Green" />
      <Square backgroundColor="blue" text="Blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
