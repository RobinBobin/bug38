import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Bug38_PagerView from "../screens/Bug38_PagerView";
import Bug38_TabView from "../screens/Bug38_TabView";

const Stack = createStackNavigator();

export default function AppStack() {
  return <Stack.Navigator>
    <Stack.Screen
      component={Bug38_PagerView}
      name={"Bug38_PagerView"}
    />
    <Stack.Screen
      component={Bug38_TabView}
      name={"Bug38_TabView"}
    />
  </Stack.Navigator>
};
