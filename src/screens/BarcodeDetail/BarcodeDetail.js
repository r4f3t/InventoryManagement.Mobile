import React, { useState, useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Layout from "../../constants/Layout";

import { BarcodeScannerIcon } from "../../components/Svgs";

function BarcodeDetail() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodeScannerWrapper}>
        {hasPermission && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.barcodeScanner}>
            <Text style={styles.barcodeScannerLabel}>Barkodu Okutunuz</Text>
            <BarcodeScannerIcon />
          </BarCodeScanner>
        )}
      </View>

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Layout.window.width,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  barcodeScannerWrapper: {
    width: Layout.window.width,
    height: 240,
    overflow: "hidden",
    justifyContent: "center"
  },
  barcodeScanner: {
    height: Layout.window.height,
    justifyContent: "center",
    alignItems: "center"
  },
  barcodeScannerLabel:{
    fontSize: 16,
    marginTop: 8
  }
});

export default BarcodeDetail;
