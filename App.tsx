import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import screens
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
import PTDScreen from "./screens/PTDScreen";
import InfoDevicePTDScreen from "./screens/InfoDevicePTDScreen";
import InfoDeviceScreen from "./screens/InfoDeviceScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import ExecutionHistory from "./screens/ExecutionHistory";
import PostFeedBack from "./screens/PostFeedBackScreen";
import QRCodeScannerScreen from "./screens/QRCodeScannerScreen";
import PTD_search_screen from "./screens/PTD_search_screen";
import CompanyCompetencyCards from "./screens/CompanyCompetencyCards";

type RootStackParamList = {
  PostFeedBack: undefined;
  AddDeviceScreen: undefined;
  QRCodeScannerScreen: undefined;
  PTD_search_screen: undefined;
};

const Stack = createStackNavigator();
const MenuBar = createBottomTabNavigator();

function TabNavigator() {
  const [scaleAnim] = useState(new Animated.Value(1));

  const handleCenterButtonPress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    // Hành động khi nhấn vào nút giữa
    alert("Đã nhấn vào nút giữ!");
  };
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <MenuBar.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#308BFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
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
          headerShown: false,
        }}
      />

      <MenuBar.Screen
        name="PTDScreen"
        component={PTDScreen}
        options={{
          title: "Phương tiện đo",
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerStyle: {
            height: 120,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gauge" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("AddDeviceScreen")}
            >
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={25}
                color="#656565"
                // style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <MenuBar.Screen
        name="CenterButton"
        component={View} // Không cần component, chỉ cần hiển thị nút
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("QRCodeScannerScreen")}
              style={{
                position: "absolute",
                top: -20,
                left: "50%",
                transform: [{ translateX: -25 }],
                backgroundColor: "#308BFF",
                borderRadius: 50,
                padding: 15,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  color="white"
                  size={30}
                />
              </Animated.View>
            </TouchableOpacity>
          ),
        }}
      />

      <MenuBar.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          title: "Phản hồi",
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomColor: "transparent",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="comment-text"
              color={color}
              size={size}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostFeedBack")}
            >
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={25}
                color="#656565"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <MenuBar.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Hồ sơ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
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
              paddingRight: 20,
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
              paddingRight: 20,
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
              paddingRight: 20,
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
              paddingRight: 20,
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
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="InfoDeviceScreen"
          component={InfoDeviceScreen}
          options={{
            title: "Chi tiết thiết bị",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert("Đã bấm vào icon!")}>
                <MaterialCommunityIcons
                  name="qrcode"
                  size={25}
                  color="#656565"
                />
              </TouchableOpacity>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="InfoDevicePTDScreen"
          component={InfoDevicePTDScreen}
          options={{
            title: "Chi tiết thiết bị",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", rowGap: 30 }}>
                <TouchableOpacity
                  onPress={() => alert("Đã bấm vào icon!")}
                  style={{ marginRight: 10 }}
                >
                  <MaterialCommunityIcons
                    name="qrcode"
                    size={25}
                    color="#656565"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("Đã bấm vào icon 2!")}>
                  <MaterialCommunityIcons
                    name="cloud-download"
                    size={25}
                    color="#656565"
                  />
                </TouchableOpacity>
              </View>
            ),
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
              paddingRight: 20,
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
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="ExecutionHistory"
          component={ExecutionHistory}
          options={{
            title: "Lịch sử thực hiện",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="PostFeedBack"
          component={PostFeedBack}
          options={{
            title: "Gửi phản hồi",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="PTD_search_screen"
          component={PTD_search_screen}
          options={{
            title: "Tìm kiếm",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="CompanyCompetencyCards"
          component={CompanyCompetencyCards}
          options={{
            title: "Tìm kiếm",
            headerBackTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRightContainerStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              height: 120,
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="QRCodeScannerScreen"
          component={QRCodeScannerScreen}
          options={{
            headerShown: false,
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
