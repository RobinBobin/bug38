import React, {
  useRef
} from "react";
import {
  View
} from "react-native";
import {
  Button,
  Text
} from "react-native-elements";
import PagerView from "react-native-pager-view";
import QRCodeScanner from "react-native-qrcode-scanner";

export default function Bug38_PagerView({navigation}) {
  const pagerView = useRef();
  
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <PagerView
        ref={pagerView}
        style={{
          flex: 1
        }}
      >
        <View key="2">
          <Text
            onPress={() => navigation.navigate("Bug38_TabView")}
          >First page</Text>
        </View>
        <View key="1">
          <QRCodeScanner
            cameraProps={{
              overflow: "hidden",
              ratio: "1:1"
            }}
            vibrate={false}
          />
        </View>
        <View key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        <Button
          buttonStyle={{
            minWidth: 100
          }}
          onPress={() => pagerView.current.setPage(0)}
          title={"1"}
        />
        <Button
          buttonStyle={{
            minWidth: 100
          }}
          onPress={() => pagerView.current.setPage(1)}
          title={"2"}
        />
        <Button
          buttonStyle={{
            minWidth: 100
          }}
          onPress={() => pagerView.current.setPage(2)}
          title={"3"}
        />
      </View>
    </View>
  );
};
