import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Import screens
import AllFeedbackScreen from ".//AllFeedbackScreen";
import PendingFeedbackScreen from ".//PendingFeedbackScreen";
import CompletedFeedbackScreen from ".//CompletedFeedbackScreen";
import { StatusBar } from "expo-status-bar";
import ChatBotButton from "../components/ChatBotButton";

const Tab = createMaterialTopTabNavigator();

const FeedbackScreen = () => {
  const [allCount, setAllCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  return (
    <>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarIndicatorStyle: styles.indicator,
          tabBarActiveTintColor: "#308BFF",
          tabBarInactiveTintColor: "#657786",
          tabBarLabelStyle: styles.tabLabel,
        }}
      >
        <Tab.Screen
          name={`Đã gửi (${allCount})`}
          children={() => (
            <AllFeedbackScreen onFeedbackCountChange={setAllCount} />
          )}
        />
        <Tab.Screen
          name={`Xử lý (${pendingCount})`}
          children={() => (
            <PendingFeedbackScreen onFeedbackCountChange={setPendingCount} />
          )}
        />
        <Tab.Screen
          name={`Hoàn thành (${completedCount})`}
          children={() => (
            <CompletedFeedbackScreen
              onFeedbackCountChange={setCompletedCount}
            />
          )}
        />
      </Tab.Navigator>
      <ChatBotButton />
    </>
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
    textTransform: "none",
    fontWeight: "600",
    fontSize: 14,
  },
});
export default FeedbackScreen;
