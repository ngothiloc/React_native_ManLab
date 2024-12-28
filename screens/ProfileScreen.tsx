import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SearchBar from "../components/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const { height, width } = Dimensions.get("window");

type RootStackParamList = {
  ProfileScreen: undefined;
  AccountSecurityScreen: undefined;
  ExecutionHistory: undefined;
  EditCompanyScreen: undefined;
  EditPersonalScreen: undefined;
  SettingScreen: undefined;
};
const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Image
            source={require("../assets/linear.png")}
            style={styles.linear}
          />
          <View style={styles.info}>
            <View style={styles.lefttext}>
              <Text style={{ fontSize: 14, color: "white" }}> Xin chào</Text>
              <Text style={{ fontSize: 24, color: "white" }}>Ngô Tiến Lộc</Text>
              <Text style={{ fontSize: 14, color: "white" }}>
                Công ty cổ phần ABC
              </Text>
            </View>
            <View style={styles.righttext}>
              <View style={styles.notification}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bell-outline"
                    size={25}
                    color="white"
                  />
                  <View style={styles.badge}></View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          <SearchBar style={styles.search} />
        </View>
        <View style={styles.content}>
          {/* Thông tin tổ chức */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditCompanyScreen")}
          >
            <MaterialCommunityIcons
              name="account-group"
              size={20}
              color="#5D5D5D"
            />
            <Text style={styles.text}>Thông tin tổ chức</Text>
          </TouchableOpacity>

          {/* Thông tin cá nhân */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditPersonalScreen")}
          >
            <MaterialCommunityIcons name="account" size={20} color="#5D5D5D" />
            <Text style={styles.text}>Thông tin cá nhân</Text>
          </TouchableOpacity>

          {/* Bảo mật tài khoản */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AccountSecurityScreen")}
          >
            <MaterialCommunityIcons
              name="shield-half-full"
              size={20}
              color="#5D5D5D"
            />
            <Text style={styles.text}>Bảo mật tài khoản</Text>
          </TouchableOpacity>

          {/* Lịch sử thực hiện */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ExecutionHistory")}
          >
            <MaterialCommunityIcons name="history" size={20} color="#5D5D5D" />
            <Text style={styles.text}>Lịch sử thực hiện</Text>
          </TouchableOpacity>

          {/* Cài đặt */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SettingScreen")}
          >
            <MaterialCommunityIcons name="cogs" size={20} color="#5D5D5D" />
            <Text style={styles.text}>Cài đặt</Text>
          </TouchableOpacity>

          {/* Ngôn ngữ */}
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="web" size={20} color="#5D5D5D" />
            <Text style={styles.text}>Ngôn ngữ</Text>
          </TouchableOpacity>

          {/* Thoát ứng dụng */}
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="exit-to-app"
              size={20}
              color="#5D5D5D"
            />
            <Text style={styles.text}>Thoát ứng dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#409CF0",
    height: height < 1000 ? height * 0.23 : height * 0.2,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "flex-start",
  },
  search: {
    position: "absolute",
    bottom: 0,
    left: width * 0.1, // 10% từ bên trái màn hình
    right: width * 0.1, // 10% từ bên phải màn hình
    top: height < 1000 ? height * 0.2 : height * 0.18,
    height: 50,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: height < 1000 ? height * 0.07 : height * 0.1,
  },
  lefttext: {
    rowGap: 10,
    justifyContent: "center",
  },
  righttext: {
    flexDirection: "row",
  },
  notification: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
  linear: {
    position: "absolute",
    left: width < 700 ? width * -0.2 : width * -0.1,
    top: height < 1000 ? height * -0.125 : height * -0.06,
  },
  content: {
    backgroundColor: "#FCFCFC",
    gap: 35,
    borderWidth: 1,
    borderColor: "#409CF0",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 25,
    //shadow
    shadowColor: "#409CF0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    //resize
    position: "absolute",
    left: width * 0.05,
    right: width * 0.05,
    top: height < 1000 ? height * 0.3 : height * 0.26,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
    color: "#5D5D5D",
  },
});

export default ProfileScreen;
