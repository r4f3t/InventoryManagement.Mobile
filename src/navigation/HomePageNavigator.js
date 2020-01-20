import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomePage from "../screens/HomePage";
import BarcodeDetail from "../screens/BarcodeDetail";

const AppNavigator = createStackNavigator({
  HomePage,
  BarcodeDetail
});

export default createAppContainer(AppNavigator);
