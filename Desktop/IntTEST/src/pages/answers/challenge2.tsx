import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navbar from '../../../src/components/challenges/NavBar';

export default function NavbarScreen() {
  return (
    <SafeAreaView  style={styles.root}>
      <Navbar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

});
