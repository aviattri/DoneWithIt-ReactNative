import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

//this class by default uses functional components
// they are lightweight and easy to use
export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    // <SafeAreaView style={[styles.container]}>
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
        }}
      ></View>
    </SafeAreaView>
  );
}

//   we created the styles object use StylesSheet object
//   and then called create method
//   later we are passing an object in the method with proerty called container
//   container contains all the styles for our container

const containerStlye = {
  backgroundColor: "orange",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
