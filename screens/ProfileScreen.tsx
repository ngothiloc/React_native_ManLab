import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  ProfileScreen: undefined;
  AccountSecurityScreen: undefined;
};
const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text> Đây là trang Profile Screen </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("AccountSecurityScreen")}
      >
        <Text> Cài đặt </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
