import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Import screens
import AllFeedbackScreen from ".//AllFeedbackScreen";
import PendingFeedbackScreen from ".//PendingFeedbackScreen";
import CompletedFeedbackScreen from ".//CompletedFeedbackScreen";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialTopTabNavigator();

const FeedbackScreen = () => {
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
        <Tab.Screen name="Đã gửi" component={AllFeedbackScreen} />
        <Tab.Screen name="Đang xử lý" component={PendingFeedbackScreen} />
        <Tab.Screen name="Đã hoàn thành" component={CompletedFeedbackScreen} />
      </Tab.Navigator>
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
