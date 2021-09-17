import {
  StyleSheet,
  TouchableOpacity
} from "react-native";

const hdrBckgrndClr = "#4CD503FF"

export const activeOpacity = 0.5;
export const backgroundColor = 0xE9E9E9FF;
export const buttonMinWidth = 200;

export const buttonStyle = {
  backgroundColor: hdrBckgrndClr,
  borderRadius: 10,
  minHeight: 50,
  minWidth: buttonMinWidth,
  padding: 0
};

export const disabledColor = "#BBBBBBFF";
export const headerBackgroundColor = hdrBckgrndClr;

export const hyperlink = {
  color: "blue"
};

export const marginPadding = 15;
export const textColor = "#55606EFF";

export const titleStyle = {
  color: "white",
  fontFamily: undefined,
  fontSize: 20
};

export const theme = {
  Button: {
    TouchableComponent: TouchableOpacity,
    activeOpacity,
    buttonStyle,
    titleStyle
  },
  Text: {
    style: {
      color: textColor,
      fontSize: 20
    }
  }
};

const scrn = {
  backgroundColor,
  flex: 1,
  padding: marginPadding
};

const centeringScrn = {
  ...scrn,
  alignItems: "center",
  justifyContent: "center"
};

const whiteScrn = {
  ...scrn,
  backgroundColor: "white"
}

export const {
  centeringScreen,
  screen,
  whiteCenteringScreen,
  whiteScreen
} = StyleSheet.create({
  centeringScreen: centeringScrn,
  screen: scrn,
  whiteCenteringScreen: {
    ...centeringScrn,
    ...whiteScrn
  },
  whiteScreen: whiteScrn
});
