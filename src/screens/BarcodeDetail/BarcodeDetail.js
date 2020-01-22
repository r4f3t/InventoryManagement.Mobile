import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import Text from "../../components/Text";
import Layout from "../../constants/Layout";
import { BarcodeScannerIcon } from "../../components/Svgs";
import SearchByNumber from "../../components/SearchByNumber";
import LabelValue from "../../components/LabelValue";
import { getBarcode } from "../../helpers/requests";

function BarcodeDetail() {
  const [hasPermission, setHasPermission] = useState(null);
  const [barcode, setBarcode] = useState();
  const [orderDetail, setOrderDetail] = useState();

  const handleBarCodeScanned = async ({ data }) => {
    setBarcode(data);
    const response = await getBarcode(data);
    setOrderDetail(response);
  };
  const handleBarcodeChange = number => {
    setBarcode(number);
  };
  const handleSubmitSearch = async () => {
    const response = await getBarcode(barcode);
    setOrderDetail(response);
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
            onBarCodeScanned={handleBarCodeScanned}
            style={styles.barcodeScanner}
          >
            <Text value="Barkodu Okutunuz" style={styles.barcodeScannerLabel} />
            <BarcodeScannerIcon />
          </BarCodeScanner>
        )}
      </View>
      <SearchByNumber
        value={barcode}
        label="Barkod Numarası"
        onChange={handleBarcodeChange}
        onPress={handleSubmitSearch}
        placeholder="Barkod Numarası"
      />
      {orderDetail && [
        <LabelValue
          style={{ marginTop: 16 }}
          label="Ürün Adı"
          bold
          large
          value={() => (
            <Text weight="bold" size="large" value={orderDetail.stockName} />
          )}
        />,
        <LabelValue
          style={{ marginTop: 16 }}
          label="Ürün Kodu"
          bold
          large
          value={() => (
            <Text weight="bold" size="large" value={orderDetail.stockCode} />
          )}
        />,
        <LabelValue
          style={{ marginTop: 16 }}
          label="Özel Kod"
          bold
          value={() => <Text weight="bold" value={orderDetail.specode} />}
        />,
        <LabelValue
          style={{ marginTop: 16 }}
          label="Ambar"
          bold
          value={() => <Text weight="bold" value={orderDetail.wareHouse} />}
        />
      ]}
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
  barcodeScannerLabel: {
    fontSize: 16,
    marginTop: 8
  }
});
BarcodeDetail.navigationOptions = {
  title: "Barkod Gör"
};

export default BarcodeDetail;
