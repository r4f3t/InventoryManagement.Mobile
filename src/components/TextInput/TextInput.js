import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

function TextInput({ style, ...rest }) {
  return <RNTextInput style={[styles.textInput, style]} {...rest} />;
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 2,
    borderWidth: 1,
    paddingHorizontal: 8
  }
});

export default TextInput;
