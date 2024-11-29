import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SettingNext from "../components/SettingNext";
import SettingSwitch from "../components/SettingSwitch";

type RootStackParamList = {
  RessetPassScreen: undefined;
  AccountSecurityScreen: undefined;
};

const AccountSecurity: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SettingNext
          text="Đổi mật khẩu"
          leftIconName="lock-reset"
          onPress={() => navigation.navigate("RessetPassScreen")}
        />
        <SettingSwitch
          text="Xác thực 2 yếu tố"
          leftIconName="shield-check-outline"
        />
        <View style={{ marginBottom: 1000 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
});

export default AccountSecurity;
