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
      <Stack.Navigator initialRouteName="Sửa thông tin cá nhân">
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
        ></Stack.Screen>
        <Stack.Screen
          name="Sửa thông tin cá nhân"
          component={EditPersonalScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
