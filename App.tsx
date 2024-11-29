import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AccountSecurityScreen">
        <Stack.Screen
          name="LoginScreens"
          component={LoginScreens}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
