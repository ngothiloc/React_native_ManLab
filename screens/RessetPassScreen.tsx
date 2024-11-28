import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import TitleHeder from "../components/TitleHeder";
import DienMK from "../components/DienMK";
import Nut from "../components/Nut";

const RessetPassScreen = () => {
  const [passWord, setPassWord] = useState("");
  const [passVerify, setPassVerify] = useState("");
  const [checkPass, setCheckPass] = useState(false); // Lỗi Pass
  const [checkPassVerify, setCheckPassVerify] = useState(false); // Lỗi Pass Verify
  const [isSubmitted, setIsSubmitted] = useState(false); // Kiểm tra khi nhấn nút

  const handlePress = () => {
    setIsSubmitted(true); // Đánh dấu đã nhấn nút

    // Kiểm tra mật khẩu
    let regexPass =
      /^(?=.*[A-Z])(?=.{7,40}$)(?=.*[ -\/:-@\[-\`{-~])(?=.*[0-9])/;
    const isValidPass = regexPass.test(passWord);
    setCheckPass(!isValidPass); // Nếu mật khẩu không hợp lệ, gán `checkPass` là true.

    //Xác nhận mật khẩu
    const isValidPassVerify =
      passVerify === passWord &&
      passVerify.trim() !== "" &&
      passWord.trim() !== "";
    setCheckPassVerify(!isValidPassVerify);

    // Kiểm tra tổng thể
    if (!isValidPass) {
      console.log("Thông tin đăng nhập không hợp lệ:");
      // if (!isValidEmail) console.log("- Email không hợp lệ");
      if (!isValidPass) console.log("- Mật khẩu không hợp lệ");
      return;
    }

    Alert.alert("Thông báo", "Đổi mật khẩu thành công");
  };
  return (
    <View style={{ paddingHorizontal: 18 }}>
      <SafeAreaView>
        <TitleHeder text="Đổi mật khẩu" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={{ marginBottom: 18 }}>
              <Text style={styles.describe}>
                Mật khẩu yêu cầu có 6 ký tự trở lên, có ít nhất một chữ và một
                số. Không nhập tiếng việt có dấu
              </Text>
            </View>
            <DienMK
              text="Mật khẩu hiện tại"
              leftIconName="shield-key-outline"
            />
            <DienMK
              text="Tạo mật khẩu mới"
              leftIconName="key-chain-variant"
              keyboardType="visible-password"
              onChangeText={(value) => setPassWord(value)}
              isError={isSubmitted && checkPass}
            />
            <DienMK
              text="Nhập lại mật khẩu"
              leftIconName="key-chain-variant"
              keyboardType="visible-password"
              onChangeText={(value) => setPassVerify(value)}
              isError={isSubmitted && checkPassVerify}
            />
            <Nut text="Đóng" onPress={handlePress} />
            <View style={{ margin: 100 }}></View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {},
  describe: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default RessetPassScreen;
