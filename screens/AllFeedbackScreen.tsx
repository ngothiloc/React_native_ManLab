import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FeedBackComponent from "../components/FeedBackComponent";

const FeedbackScreen: React.FC = () => (
  <View style={styles.tabContent}>
    <FeedBackComponent />
  </View>
);

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
  },
});

export default FeedbackScreen;
