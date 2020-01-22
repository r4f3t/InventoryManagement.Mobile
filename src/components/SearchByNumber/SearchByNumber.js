import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

import Text from "../Text";

function SearchByNumber({ label, placeholder, value, onChange, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} value={label} weight="bold" />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
      <Button style={styles.button} title="ARA" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    marginTop: 8
  },
  text: {
    flex: 2
  },
  textInput: {
    flex: 2,
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 8,
    paddingHorizontal: 8
  },
  button: {
    flex: 1
  }
});

export default SearchByNumber;
