import {
  createMaterialTopTabNavigator
} from "@react-navigation/material-top-tabs";
import React from "react";
import {
  View
} from "react-native";
import {
  Text
} from "react-native-elements";
import QRCodeScanner from "react-native-qrcode-scanner";

export default function Bug38_TabView() {
  return (
    <Tab.Navigator
      backBehavior={"initialRoute"}
      tabBarPosition={"bottom"}
    >
      <Tab.Screen
        component={Tab1}
        name={"Tab1"}
      />
      <Tab.Screen
        component={Tab2}
        name={"Tab2"}
      />
      <Tab.Screen
        component={Tab3}
        name={"Tab3"}
      />
    </Tab.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();

function Tab1() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Text>First page</Text>
    </View>
  );
}

function Tab2() {
  return (
    <QRCodeScanner
      cameraProps={{
        overflow: "hidden",
        ratio: "1:1"
      }}
      vibrate={false}
    />
  );
}

function Tab3() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Text>Third page</Text>
    </View>
  );
}