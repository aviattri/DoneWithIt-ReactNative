import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

//this hook returns the updated dimensions of the device
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

//this class by default uses functional components
// they are lightweight and easy to use
export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    // <SafeAreaView style={[styles.container]}>
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
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
