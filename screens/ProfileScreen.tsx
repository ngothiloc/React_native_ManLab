import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SearchBar from "../components/SearchBar";

type RootStackParamList = {
  ProfileScreen: undefined;
  AccountSecurityScreen: undefined;
  EditCompanyScreen: undefined;
  EditPersonalScreen: undefined;
  SettingScreen: undefined;
};
const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text> Đây là trang Profile Screen </Text>
      <SearchBar />
      <TouchableOpacity
        onPress={() => navigation.navigate("EditCompanyScreen")}
      >
        <Text> Thông tin tổ chức </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("EditPersonalScreen")}
      >
        <Text> Thông tin cá nhân </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AccountSecurityScreen")}
      >
        <Text> Bảo mật tài khoản </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AccountSecurityScreen")}
      >
        <Text> Lịch sử thực hiện </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SettingScreen")}>
        <Text> Cài đặt </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
