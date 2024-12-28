import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollViewComponent,
  ScrollView,
} from "react-native";
import React from "react";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import CardExecutionHistory from "../components/CardExecutionHistory";

const ExecutionHistory = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sort}>
        <Sort />
        <Filter />
      </View>
      <View style={styles.card}>
        <CardExecutionHistory />
        <CardExecutionHistory />
        <CardExecutionHistory />
        <CardExecutionHistory />
        <CardExecutionHistory />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfcfc",
    paddingTop: 15,
    // paddingHorizontal: 30,
  },
  sort: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingHorizontal: 13,
    marginVertical: 15,
  },
});

export default ExecutionHistory;
