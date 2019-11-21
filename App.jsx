import React, { useState } from "react";
import * as Font from "expo-font";
import {
  mapping,
  light as lightTheme,
  dark as darkTheme
} from "@eva-design/eva";
import { AppLoading } from "expo";
import { ApplicationProvider, Layout, Text } from "react-native-ui-kitten";

import HomeScreen from "./screens/HomeScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "panton-icon-cr-regular": require("./assets/Fonts/PantonIconsCRegular.ttf"),
    "panton-icon-a": require("./assets/Fonts/PantonIconsARegular.ttf"),
    "panton-icon-b": require("./assets/Fonts/PantonIconsBRegular.ttf"),
    "panton-bold": require("./assets/Fonts/PantonBold.ttf"),
    "panton-regular": require("./assets/Fonts/Panton.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <HomeScreen />
    </ApplicationProvider>
  );
}
