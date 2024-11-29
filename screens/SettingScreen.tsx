import { View, SafeAreaView } from "react-native";
import React from "react";
import SwitchComponent from "../components/SwitchComponent";
import SettingSwitch from "../components/SettingSwitch";
import TitleHeder from "../components/TitleHeder";

const SettingScreen = () => {
  return (
    <View style={{ paddingHorizontal: 18, backgroundColor: "#ffffff" }}>
      <SafeAreaView style={{ marginTop: 25 }}>
        <SettingSwitch
          text="Cảnh báo chứng chỉ"
          leftIconName="bell-ring-outline"
        />
        <SettingSwitch
          text="Thông báo về lịch sử"
          leftIconName="bell-ring-outline"
        />
        <SettingSwitch
          text="Thông báo về ETV"
          leftIconName="bell-ring-outline"
        />
        <SettingSwitch
          text="Thông báo về khuyến mãi"
          leftIconName="bell-ring-outline"
        />
        <View style={{ marginBottom: 1000 }}></View>
      </SafeAreaView>
    </View>
  );
};

export default SettingScreen;
