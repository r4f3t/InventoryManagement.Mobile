import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../Text";

function LabelValue({ label, value: Value, bold, style, large }) {
  return (
    <View style={[styles.container, style]}>
      <Text
        value={label}
        {...(bold && { weight: "bold" })}
        {...(large && { size: "large" })}
      />
      {Value && <Value />}
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
