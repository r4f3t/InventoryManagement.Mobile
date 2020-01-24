import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomePage from "../screens/HomePage";
import BarcodeDetail from "../screens/BarcodeDetail";
import ReceiptCreate from "../screens/ReceiptCreate";

const AppNavigator = createStackNavigator({
    HomePage,
    BarcodeDetail,
    ReceiptCreate
});

export default createAppContainer(AppNavigator);
