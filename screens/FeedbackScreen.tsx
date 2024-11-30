import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

// Create components for each tab
const AllFeedbackScreen = () => (
  <View style={styles.tabContent}>
    <Text>Đã gửi</Text>
  </View>
);

const PendingFeedbackScreen = () => (
  <View style={styles.tabContent}>
    <Text>Đang xử lý</Text>
  </View>
);

const CompletedFeedbackScreen = () => (
  <View style={styles.tabContent}>
    <Text>Đã hoàn thành</Text>
  </View>
);

const FeedbackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: styles.indicator,
        tabBarActiveTintColor: "#308BFF",
        tabBarInactiveTintColor: "#657786",
        tabBarLabelStyle: styles.tabLabel,
      }}
      initialRouteName="AllFeedback"
    >
      <Tab.Screen
        name="AllFeedback"
        component={AllFeedbackScreen}
        options={{ tabBarLabel: "Đã gửi" }}
      />
      <Tab.Screen
        name="PendingFeedback"
        component={PendingFeedbackScreen}
        options={{ tabBarLabel: "Đang xử lý" }}
      />
      <Tab.Screen
        name="CompletedFeedback"
        component={CompletedFeedbackScreen}
        options={{ tabBarLabel: "Đã hoàn thành" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  indicator: {
    backgroundColor: "#308BFF",
    height: 3,
  },
  tabLabel: {
    textTransform: "none", // Prevents automatic capitalization
    fontWeight: "600",
    fontSize: 14,
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
  },
});

export default FeedbackScreen;
