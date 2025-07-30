import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { twoSum } from '../../../utils/calculate2SumSortedArray';

import CustomInput from '../../shared/input';
import CustomButton from '../../button';

export const TwoSum2Component = () => {
  const [numbers, setNumbers] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState<number[]>([]);
  const [explanation, setExplanation] = useState('');
  const [errors, setErrors] = useState<{ numbers?: string; target?: string }>({});

  const INPUT_REGEX = /^[0-9,\s]+$/;

 const validateInputs = (): boolean => {
  const newErrors: typeof errors = {};

  if (!numbers.trim()) {
    newErrors.numbers = 'Please enter at least two numbers';
  } else if (!INPUT_REGEX.test(numbers)) {
    newErrors.numbers = 'Please enter only numbers separated by commas';
  } else {
    const numParts = numbers.split(',').map(n => n.trim());
    const hasEmptyValues = numParts.some(part => part === '');

    if (hasEmptyValues) {
      newErrors.numbers = 'Each number must be valid and separated properly (e.g., 1, 2, 3)';
    } else if (numParts.length < 2) {
      newErrors.numbers = 'Please enter at least two numbers';
    }
  }

  if (!target.trim()) {
    newErrors.target = 'Please enter a target number';
  } else if (isNaN(Number(target))) {
    newErrors.target = 'Target must be a valid number';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleCalculate = () => {
    if (!validateInputs()) {
      setResult([]);
      setExplanation('');
      return;
    }

    const numArray = numbers.trim().split(',').map(n => Number(n.trim()));
    const targetNum = Number(target);
    const res = twoSum(numArray, targetNum);

    setResult(res);

    if (res.length === 2) {
      const [i1, i2] = res;
      const val1 = numArray[i1 - 1];
      const val2 = numArray[i2 - 1];

      setExplanation(
        `The sum of ${val1} and ${val2} is ${targetNum}. Therefore index₁ = ${i1}, index₂ = ${i2}. We return [${i1}, ${i2}].`
      );
    } else {
      setExplanation('No two numbers in the array add up to the target.');
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput
        value={numbers}
        onChangeText={setNumbers}
        placeholder="Enter numbers separated by commas"
      />
      {errors.numbers && <Text style={styles.error}>{errors.numbers}</Text>}

      <CustomInput
        value={target}
        onChangeText={setTarget}
        placeholder="Enter target number"
      />
      {errors.target && <Text style={styles.error}>{errors.target}</Text>}

      <CustomButton title="Calculate" onPress={handleCalculate} />

      <Text style={styles.result}>
        Result: {result.length > 0 ? `[${result.join(', ')}]` : '[ ]'}
      </Text>

      {explanation ? (
        <Text style={styles.explanation}>{explanation}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  error: {
    color: 'red',
    marginLeft: 5,
    marginTop: -5,
    fontSize: 12,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  explanation: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
  },
});
