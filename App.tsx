import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import screens
import LoginScreens from "./screens/LoginScreens";
import RessetPassScreen from "./screens/RessetPassScreen";
import SettingScreen from "./screens/SettingScreen";
import AccountSecurityScreen from "./screens/AccountSecurityScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditPersonalScreen from "./screens/EditPersonalScreen";
import EditCompanyScreen from "./screens/EditCompanyScreen";
import BookingScreen from "./screens/BookingScreen";
import AddDeviceScreen from "./screens/AddDeviceScreen";
import InforDeviceScreen from "./screens/InforDeviceScreen";
import PTDScreen from "./screens/PTDScreen";
import FeedbackScreen from "./screens/FeedbackScreen";

const Stack = createStackNavigator();
const MenuBar = createBottomTabNavigator();

function TabNavigator() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MenuBar.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <MenuBar.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <MenuBar.Screen
        name="PTDScreen"
        component={PTDScreen}
        options={{
          tabBarLabel: "PTD",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gauge" color={color} size={size} />
          ),
        }}
      ></MenuBar.Screen>

      <MenuBar.Screen
        name="CenterButton"
        component={View} // Không cần component, chỉ cần hiển thị nút
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                position: "absolute",
                top: -20, // Điều chỉnh vị trí của nút ở giữa
                left: "50%",
                transform: [{ translateX: -25 }],
                backgroundColor: "#e91e63",
                borderRadius: 50,
                padding: 15,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
              onPress={() => {
                // Hành động khi nhấn vào nút hình vuông
                alert("Đã nhấn vào nút giữa!");
              }}
            >
              <MaterialCommunityIcons
                name="qrcode-scan"
                color="white"
                size={30}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <MenuBar.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          tabBarLabel: "Phản hồi",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="comment-text"
              color={color}
              size={size}
            />
          ),
        }}
      ></MenuBar.Screen>
      <MenuBar.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </MenuBar.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="LoginScreens"
          component={LoginScreens}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>

        <Stack.Screen
          name="AccountSecurityScreen"
          component={AccountSecurityScreen}
          options={{
            title: "Bảo mật tài khoản",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        />
        <Stack.Screen
          name="EditPersonalScreen"
          component={EditPersonalScreen}
          options={{
            title: "Sửa thông tin cá nhân",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="EditCompanyScreen"
          component={EditCompanyScreen}
          options={{
            title: "Sửa thông tin tổ chức",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="BookingScreen"
          component={BookingScreen}
          options={{
            title: "Đặt lịch",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="AddDeviceScreen"
          component={AddDeviceScreen}
          options={{
            title: "Thêm thiết bị mới",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="InforDeviceScreen"
          component={InforDeviceScreen}
          options={{
            title: "Chi tiết thiết bị",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            title: "Cài đặt",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="RessetPassScreen"
          component={RessetPassScreen}
          options={{
            title: "Đổi mật khẩu",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 10,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="MainScreen"
          component={TabNavigator}
          options={{ headerShown: false }} // Ẩn header cho màn hình chính
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
