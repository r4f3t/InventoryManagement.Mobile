import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { BarCodeScanner as ExpoBarCodeScanner } from "expo-barcode-scanner";

import { BarcodeScannerIcon } from "../../components/Svgs";
import Layout from "../../constants/Layout";
import Text from "../../components/Text";
import { TouchableOpacity } from "react-native-gesture-handler";

function BarCodeScanner({ onBarCodeScanned }) {
  const [hasPermission, setHasPermission] = useState();

  useEffect(() => {
    const timer = setInterval(requestCameraPermission, 500);
    return () => {
      clearInterval(timer);
    };
  }, [hasPermission]);

  const requestCameraPermission = async () => {
    const { status } = await ExpoBarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  let contentElement;
  switch (hasPermission) {
    case undefined:
      contentElement = (
        <>
          <Text value="Barkodu Okutunuz" style={styles.barcodeScannerLabel} />
          <BarcodeScannerIcon />
        </>
      );
      break;
    case true:
      contentElement = (
        <ExpoBarCodeScanner
          onBarCodeScanned={onBarCodeScanned}
          style={styles.barcodeScanner}
        >
          <Text value="Barkodu Okutunuz" style={styles.barcodeScannerLabel} />
          <BarcodeScannerIcon />
        </ExpoBarCodeScanner>
      );
      break;
    default:
      contentElement = (
        <TouchableOpacity onPress={requestCameraPermission}>
          <Text
            value="Barkod okuyabilmek için uygulamada kamera iznini vermeniz gerekmektedir.İzin vermek için yazıya tıklayınız."
            size="large"
            weight="bold"
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      );
  }

  return <View style={styles.barcodeScannerWrapper}>{contentElement}</View>;
}

const styles = StyleSheet.create({
  barcodeScannerWrapper: {
    width: Layout.window.width,
    height: 240,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  barcodeScanner: {
    height: Layout.window.height,
    width: Layout.window.width,
    justifyContent: "center",
    alignItems: "center"
  },
  barcodeScannerLabel: {
    fontSize: 16,
    marginTop: 8
  }
});

export default BarCodeScanner;
