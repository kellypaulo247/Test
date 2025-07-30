import React from 'react';

import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

const CustomInput: React.FC<InputProps> = ({
  keyboardType = 'numeric',
  ...props
}) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1.6,
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter',
    width: '100%',
    height: 60,
    borderColor: '#606077ff',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },

});

export default CustomInput;
