import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../Text";

function LabelValue({ label, value: Value, bold, style, size }) {
  return (
    <View style={[styles.container, style]}>
      <Text
        value={label}
        style={{ flex: 1 }}
        {...(bold && { weight: "bold" })}
        {...(size && { size })}
      />
      {Value && <Value style={{ flex: 1 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8
  }
});

export default LabelValue;
