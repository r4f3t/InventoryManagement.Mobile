import React from "react";
import { View, Button, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import MenuButton from "../../components/MenuButton/MenuButton";

function HomePage({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <MenuButton
        label="Barcode Detayı"
        onPress={() => navigate("BarcodeDetail")}
      />
      <MenuButton
        label="Fiş Detayı"
      />
      <MenuButton
        label="Fiş Oluşturma"
        onPress={() => navigate("ReceiptCreate")}
      />
      <MenuButton
        label="Bla Bla"
      />
      <MenuButton
        label="Bla Bla"
      />
      <MenuButton
        label="Bla Bla"
      />
      <MenuButton
        label="Bla Bla"
      />
      <MenuButton
        label="Bla Bla"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16
  },
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

HomePage.navigationOptions = {
  headerShown: false
};

export default HomePage;
