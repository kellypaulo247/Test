import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../shared/input";
import CustomButton from "../../button";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num1Error, setNum1Error] = useState("");
  const [num2Error, setNum2Error] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  // Constants
  const INPUT_REGEX = /^[0-9]*\.?[0-9]*$/;
  const EMPTY_ERROR_MESSAGE = "Please enter a number";
  const INVALID_ERROR_MESSAGE = "Please enter a valid number";

  const validateNumberInput = (value: string): string => {
    if (!value.trim()) return EMPTY_ERROR_MESSAGE;
    if (!INPUT_REGEX.test(value)) return INVALID_ERROR_MESSAGE;
    return "";
  };

  const handleNum1Change = (text: string) => {
    setNum1(text);
    const error = validateNumberInput(text);
    setNum1Error(error);
  };

  const handleNum2Change = (text: string) => {
    setNum2(text);
    const error = validateNumberInput(text);
    setNum2Error(error);
  };

  const handleSum = () => {
    const error1 = validateNumberInput(num1);
    const error2 = validateNumberInput(num2);

    setNum1Error(error1);
    setNum2Error(error2);

    const hasErrors = Boolean(error1 || error2);

    if (hasErrors) {
      setTotal(null);
      return;
    }

    const sum = parseFloat(num1) + parseFloat(num2);
    setTotal(sum);
  };

  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="First number"
        value={num1}
        onChangeText={handleNum1Change}
      />
      {num1Error ? <Text style={styles.error}>{num1Error}</Text> : null}

      <CustomInput
        placeholder="Second number"
        value={num2}
        onChangeText={handleNum2Change}
      />
      {num2Error ? <Text style={styles.error}>{num2Error}</Text> : null}

      <CustomButton title="Sum" onPress={handleSum} />
      <Text style={styles.result}>Total: {total !== null ? total : "-"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  error: {
    color: "red",
    marginLeft: 5,
    marginTop: -5,
    fontSize: 12
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold"
  }
});
