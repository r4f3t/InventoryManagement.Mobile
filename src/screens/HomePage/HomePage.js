import React from "react";
import { View, Button, StyleSheet } from "react-native";

import Text from "../../components/Text/Text";

function HomePage() {
  return (
    <View style={styles.container}>
      <Text size="small" value="small" />
      <Text value="medium" />
      <Text size="large" value="large" />
      <Text size="large" weight="bold" value="bold" />
      <Button title="Press me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
});

export default HomePage;
