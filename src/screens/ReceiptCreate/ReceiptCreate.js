import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View
} from "react-native";

import TextInput from "../../components/TextInput";
import BarCodeScanner from "../../components/BarcodeScanner";
import LabelValue from "../../components/LabelValue";
import ReceiptStockList from "./ReceiptStockList";
import SearchByNumber from "../../components/SearchByNumber";
import { getBarcode } from "../../helpers/requests";

function ReceiptCreate() {
  const [barcode, setBarcode] = useState();
  const [stockList, setStockList] = useState([]);

  const handleBarcodeChange = number => {
    setBarcode(number);
  };
  const handleSubmitBarcode = async ({ data }) => {
    const isExist = stockList.find(({ id }) => id === (data || barcode));
    //TODO: Buraya hata mesaji yazdirilacak
    if (isExist) return;
    const response = await getBarcode(data || barcode);
    if (response.id) {
      setStockList([{ ...response, count: 1 }, ...stockList]);
      setBarcode("");
    }
  };
  const handleChangeCount = text => {
    console.log(text);
    const changedStockList = stockList.map(stock => {
      if (stock.id === barcode) {
        stock.count = parseInt(text);
      }
      return stock;
    });
    setStockList(changedStockList);
  };
  const increaseCount = barcode => {
    const countedStockList = stockList.map(stock => {
      if (stock.id === barcode) {
        stock.count += 1;
      }
      return stock;
    });
    setStockList(countedStockList);
  };
  const decreaseCount = barcode => {
    const countedStockList = stockList.filter(stock => {
      if (stock.id === barcode) {
        stock.count -= 1;
      }
      if (stock.count !== 0) return stock;
    });
    setStockList(countedStockList);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner onBarCodeScanned={handleSubmitBarcode} />
      <LabelValue
        label="Fiş Numarası"
        value={props => <TextInput {...props} />}
        style={styles.labelValue}
      />
      <LabelValue
        label="Açıklama"
        value={props => <TextInput {...props} />}
        style={styles.labelValue}
      />
      <SearchByNumber
        value={barcode}
        label="Barkod Numarası"
        onChange={handleBarcodeChange}
        onPress={handleSubmitBarcode}
        placeholder="Barkod Numarası"
        buttonLabel="Ekle"
      />
      <ReceiptStockList
        stockList={stockList}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        onChangeCount={handleChangeCount}
      />
      <Button title="Fişi Oluştur" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  labelValue: {
    marginTop: 8
  },
  button: {
    flex: 1
  }
});

ReceiptCreate.navigationOptions = {
  title: "Fiş Oluşturma"
};

export default ReceiptCreate;
