import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
const PTDScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sort}>
        <Sort />
        <Filter />
      </View>
      <Text>this is a PTD page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    flex: 1,
    paddingTop: 15,
  },
  sort: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
export default PTDScreen;
