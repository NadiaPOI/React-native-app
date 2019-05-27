/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Aucun Article</Text>
        </View>
        <Button
          onPress={() => Alert.alert("Touché")}
          title="Ajouter un article"
        />
      </View>
    );
  }
}
