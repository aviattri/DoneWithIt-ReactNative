import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//this class by default uses functional components
// they are lightweight and easy to use
export default function App() {
  const handlePress = () => console.log("Handle Press");

  return (
    // if we iOS the View component will be mapped to UIView
    // if we Android the View component will be mapped to AndroidView
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native{" "}
      </Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

//   we created the styles object use StylesSheet object
//   and then called create method
//   later we are passing an object in the method with proerty called container
//   container contains all the styles for our container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
