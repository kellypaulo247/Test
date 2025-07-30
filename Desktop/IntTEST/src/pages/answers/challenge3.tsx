import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TwoSum2Component } from '../../components/challenges/TwoSumSorted/TwoSumSorted';

export const TwoSumScreen = () => {
  return (
    <SafeAreaView style={styles.root}> >
      <TwoSum2Component />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
