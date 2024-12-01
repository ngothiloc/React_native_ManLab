import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeedbackScreen: React.FC = () => (
  <View style={styles.tabContent}>
    <Text>mh2</Text>
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
