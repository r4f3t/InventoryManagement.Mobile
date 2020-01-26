import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Text from "../../components/Text";
import Layout from "../../constants/Layout";
import SearchByNumber from "../../components/SearchByNumber";
import LabelValue from "../../components/LabelValue";
import { getBarcode } from "../../helpers/requests";
import BarCodeScanner from "../../components/BarcodeScanner";

function BarcodeDetail() {
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

  return (
    <View style={styles.container}>
      <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} />
      <SearchByNumber
        value={barcode}
        label="Barkod Numarası"
        onChange={handleBarcodeChange}
        onPress={handleSubmitSearch}
        placeholder="Barkod Numarası"
      />
      {orderDetail && [
        <LabelValue
          key="0"
          style={{ marginTop: 16 }}
          label="Ürün Adı"
          bold
          size="large" 
          value={() => (
            <Text weight="bold" size="large" value={orderDetail.stockName} />
          )}
        />,
        <LabelValue
          key="1"
          style={{ marginTop: 16 }}
          label="Ürün Kodu"
          bold
          size="large" 
          value={() => (
            <Text weight="bold" size="large" value={orderDetail.stockCode} />
          )}
        />,
        <LabelValue
          key="2"
          style={{ marginTop: 16 }}
          label="Özel Kod"
          bold
          value={() => <Text weight="bold" value={orderDetail.specode} />}
        />,
        <LabelValue
          key="4"
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
  }
});
BarcodeDetail.navigationOptions = {
  title: "Barkod Gör"
};

export default BarcodeDetail;
