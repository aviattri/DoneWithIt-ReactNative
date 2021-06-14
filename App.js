import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert, Image, Button } from "react-native";

//this class by default uses functional components
// they are lightweight and easy to use
export default function App() {
  return (
    <View style={[styles.container, containerStlye]}>
      <Button
        color="orange"
        title="clicl me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
    </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
