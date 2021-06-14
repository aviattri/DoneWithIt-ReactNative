import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

//this class by default uses functional components
// they are lightweight and easy to use
export default function App() {
  return (
    // <SafeAreaView style={[styles.container]}>
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="click me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
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
