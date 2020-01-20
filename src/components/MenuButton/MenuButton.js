import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Text from "../Text";
import Colors from "../../constants/Colors";

function MenuButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text value={label} weight="bold" color={Colors.buttonTextColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttonColor,
    height: 80,
    width: 160,
    borderRadius: 8,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MenuButton;
