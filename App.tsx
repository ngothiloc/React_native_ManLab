import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
    // <View>
    //   {/* <AccountSecurity /> */}
    //   {/* <SettingScreen /> */}
    //   {/* <RessetPassScreen /> */}
    //   {/* <LoginScreens /> */}
    //   <HomeScreen />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chi tiết thiết bị">
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
          name="Bảo mật tài khoản"
          component={AccountSecurityScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Sửa thông tin cá nhân"
          component={EditPersonalScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Sửa thông tin tổ chức"
          component={EditCompanyScreen}
        ></Stack.Screen>
        <Stack.Screen name="Đặt lịch" component={BookingScreen}></Stack.Screen>
        <Stack.Screen
          name="Thêm thiết bị mới"
          component={AddDeviceScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Chi tiết thiết bị"
          component={InforDeviceScreen}
        ></Stack.Screen>
        <Stack.Screen name="Cài đặt" component={SettingScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
