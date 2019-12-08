import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Input} from 'react-native-elements';

const PasswordInputComponent = ({
  handleChange,
  handleBlur,
  value,
  name,
  label,
  error,
  touched,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Input
        label={label}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
        labelStyle={styles.fontSize}
        inputContainerStyle={styles.inputStyle}
        secureTextEntry
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {height: 35},
  labelStyle: {fontSize: 14},
  inputContainer: {marginTop: 15},
  error: {textAlign: 'center', color: 'red'},
});

export default PasswordInputComponent;
