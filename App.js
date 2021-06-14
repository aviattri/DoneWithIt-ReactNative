import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert, Image, Button } from "react-native";

//this class by default uses functional components
// they are lightweight and easy to use
export default function App() {
  return (
    <View style={styles.container}>
      <Button
        color="orange"
        title="clicl me"
        onPress={() =>
          Alert.alert("My title", "My Message", [
            {
              text: "Yes",
              onPress: () => console.log("Yes"),
            },
            {
              text: "No",
              onPress: () => console.log("No"),
            },
          ])
        }
      />
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
