import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from '../../components/challenges/Calculator/calculator';

export default function CalculatorScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});