import { SafeAreaView, View } from "react-native";
import TitleHeder from "../components/TitleHeder";
import SettingNext from "../components/SettingNext";
import SettingSwitch from "../components/SettingSwitch";

const AccountSecurity = () => {
  return (
    <View style={{ paddingHorizontal: 18, backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <TitleHeder text="Bảo mật tài khoản" />
        <SettingNext text="Đổi mật khẩu" leftIconName="lock-reset" />
        <SettingSwitch
          text="Xác thực 2 yếu tố"
          leftIconName="shield-check-outline"
        />
        <View style={{ marginBottom: 1000 }}></View>
      </SafeAreaView>
    </View>
  );
};

export default AccountSecurity;
