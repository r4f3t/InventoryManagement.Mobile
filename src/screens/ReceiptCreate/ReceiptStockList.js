import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Text from "../../components/Text";
import LabelValue from "../../components/LabelValue";
import { DirectionTriangular } from "../../components/Svgs";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import TextInput from "../../components/TextInput";

function ReceiptStockList({
  stockList,
  increaseCount,
  decreaseCount,
  onChangeCount
}) {
  return (
    <ScrollView style={styles.container}>
      {stockList &&
        stockList.map(({ id, stockName, stockCode, count }) => (
          <View style={styles.item} key={id}>
            <View style={styles.productInfo}>
              <LabelValue
                label="Ürün Adı"
                bold
                value={() => <Text weight="bold" value={stockName} />}
              />
              <LabelValue
                label="Ürün Kodu"
                size="small"
                bold
                value={() => (
                  <Text weight="bold" size="small" value={stockCode} />
                )}
              />
            </View>
            <View style={styles.productCount}>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => decreaseCount(id)}
              >
                <DirectionTriangular rotation={180} />
              </TouchableOpacity>
              <TextInput
                value={String(count)}
                keyboardType="numeric"
                onChangeText={text => onChangeCount(text, id)}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => increaseCount(id)}
              >
                <DirectionTriangular />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    padding: 4,
    marginHorizontal: 4,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    height: 80,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.itemBorderColor,
    backgroundColor: Colors.itemBackground
  },
  productInfo: {
    flex: 2,
    justifyContent: "center"
  },
  productCount: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    padding: 8
  }
});

export default ReceiptStockList;
