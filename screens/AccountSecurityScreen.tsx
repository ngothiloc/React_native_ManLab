import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import SettingNext from "../components/SettingNext";
import SettingSwitch from "../components/SettingSwitch";

const AccountSecurity: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Các thiết lập */}
        <SettingNext text="Đổi mật khẩu" leftIconName="lock-reset" />
        <SettingSwitch
          text="Xác thực 2 yếu tố"
          leftIconName="shield-check-outline"
        />

        {/* Khoảng cách phía dưới */}
        <View style={styles.bottomSpacing} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Container bao quanh toàn bộ màn hình, với padding cho các viền
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // Nội dung bên trong, ví dụ các phần tử chính của màn hình
  content: {
    paddingHorizontal: 18,
    paddingTop: 20, // Có thể tùy chỉnh theo yêu cầu
  },

  // Khoảng cách phía dưới
  bottomSpacing: {
    marginBottom: 1000,
  },
});

export default AccountSecurity;
