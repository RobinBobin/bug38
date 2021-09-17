/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  AppRegistry,
  StatusBar,
  StyleSheet
} from "react-native";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStack from "./src/navigation/AppStack";
import {
  theme
} from "./src/styles";

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <StatusBar
        backgroundColor={0x60B02EFF}
      />
      <SafeAreaProvider
        style={styles.containerStyle}
      >
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(require("./app.json").name, () => App);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});
