import * as React from "react";
import { View, Text, Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
         <Image
        style={{width:50, height:50}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>LETS GO HOG</Text>
    </View>
  );
}
