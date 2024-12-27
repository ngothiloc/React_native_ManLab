import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FeedBackComponent from "../components/FeedBackComponent";

const FeedbackScreen: React.FC = () => (
  <View style={styles.tabContent}>
    <FeedBackComponent />
    <FeedBackComponent />
    <FeedBackComponent />
  </View>
);

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    paddingHorizontal: 18,
    paddingTop: 20,
    gap: 20,
  },
});

export default FeedbackScreen;
