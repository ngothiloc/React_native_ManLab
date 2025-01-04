import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Image,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import Nut from "../components/Nut";
import DienMK from "../components/DienMK";
import DienTT from "../components/DienTT";

type RootStackParamList = {
  LoginScreens: undefined;
  RegisterScreen: undefined;
};

const LoginScreens = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [mst, setMst] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [passVerify, setPassVerify] = useState("");
  const [checkEmail, setCheckEmail] = useState(false); // Lỗi email
  const [checkPass, setCheckPass] = useState(false); // Lỗi Pass
  const [checkFullName, setCheckFullName] = useState(false); // Lỗi Name
  const [checkPhone, setCheckPhone] = useState(false); // Lỗi Phone
  const [checkPassVerify, setCheckPassVerify] = useState(false); // Lỗi Pass Verify
  const [isSubmitted, setIsSubmitted] = useState(false); // Kiểm tra khi nhấn nút
  //use navigation
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const LoginPress = () => {
    setIsSubmitted(true); // Đánh dấu đã nhấn nút

    // Kiểm tra tên
    let regexFullName = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
    const isValidFullName = regexFullName.test(fullName);
    setCheckFullName(!isValidFullName); // Nếu fullname không hợp lệ, gán `checkFullName` là true.

    // Kiểm tra email
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = regexEmail.test(email);
    setCheckEmail(!isValidEmail); // Nếu email không hợp lệ, gán `checkEmail` là true.

    // Kiểm tra mật khẩu
    let regexPass =
      /^(?=.*[A-Z])(?=.{7,40}$)(?=.*[ -\/:-@\[-\`{-~])(?=.*[0-9])/;
    const isValidPass = regexPass.test(passWord);
    setCheckPass(!isValidPass); // Nếu mật khẩu không hợp lệ, gán `checkPass` là true.

    // kiểm tra số điện thoại
    let regexPhone = /^(\+84|0)(3|5|7|8|9)\d{8}$/;
    const isValidPhone = regexPhone.test(phone);
    setCheckPhone(!isValidPhone);

    //Xác nhận mật khẩu
    const isValidPassVerify =
      passVerify === passWord &&
      passVerify.trim() !== "" &&
      passWord.trim() !== "";
    setCheckPassVerify(!isValidPassVerify);

    // Kiểm tra tổng thể
    if (!isValidFullName || !isValidEmail || !isValidPass) {
      console.log("Thông tin đăng nhập không hợp lệ:");
      if (!isValidPhone) console.log("- Số điện thoại không hợp lệ");
      if (!isValidFullName) console.log("- Tên không hợp lệ");
      if (!isValidEmail) console.log("- Email không hợp lệ");
      if (!isValidPass) console.log("- Mật khẩu không hợp lệ");
      return;
    }

    navigation.navigate("LoginScreens");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
        <Image source={require("../assets/Blur.png")}></Image>
        <KeyboardAwareScrollView>
          <SafeAreaView>
            <View style={{ paddingHorizontal: 25 }}>
              <View style={styles.head}>
                {/* <View>
                <Image source={require("../assets/logo.png")}></Image>
              </View> */}
                <View>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 32,
                      color: "#1A1C1E",
                    }}
                  >
                    Đăng ký
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 12,
                      color: "#6C7278",
                    }}
                  >
                    Chào mừng bạn đến với ManLab-CheckPro
                  </Text>
                </View>
              </View>

              <View style={{ gap: 8 }}>
                <DienTT
                  text="Mã số thuế"
                  leftIconName="form-select"
                  onChangeText={(value) => setMst(value)}
                />
                <DienTT
                  text="Họ và tên"
                  leftIconName="account-edit-outline"
                  onChangeText={(value) => setFullName(value)}
                  isError={isSubmitted && checkFullName}
                ></DienTT>
                <DienTT
                  text="Emai"
                  leftIconName="email-outline"
                  keyboardType="email-address"
                  onChangeText={(value) => setEmail(value)}
                  isError={isSubmitted && checkEmail}
                />
                <DienTT
                  text="Số điện thoại"
                  leftIconName="format-list-numbered"
                  keyboardType="phone-pad"
                  onChangeText={(value) => setPhone(value)}
                  isError={isSubmitted && checkPhone}
                ></DienTT>
                <DienMK
                  text="Nhập mật khẩu"
                  leftIconName="key-variant"
                  keyboardType="visible-password"
                  onChangeText={(value) => setPassWord(value)}
                  isError={isSubmitted && checkPass}
                />
                <DienMK
                  text="Nhập lại mật khẩu"
                  leftIconName="key-variant"
                  keyboardType="visible-password"
                  onChangeText={(value) => setPassVerify(value)}
                  isError={isSubmitted && checkPassVerify}
                ></DienMK>
              </View>
              <Nut text="Đăng ký" onPress={LoginPress} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  // gap: 10,
                }}
              >
                <Text
                  style={{ color: "#6C7278", fontSize: 13, fontWeight: "600" }}
                >
                  Bạn đã có tài khoản ?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreens")}
                >
                  <Text
                    style={{
                      color: "#4D81E7",
                      fontSize: 13,
                      fontWeight: "600",
                      marginHorizontal: 10,
                      marginVertical: 20,
                    }}
                  >
                    Đăng nhập
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
        {/* <View style={{ margin: 1000 }}></View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  head: {
    alignItems: "center",
    gap: 12,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#EDF1F3",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
  },
  forgot: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
  text2: {
    fontSize: 12,
    fontWeight: "600",
  },
  OrtherLogin: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EFF0F6",
    paddingHorizontal: 24,
    justifyContent: "center",
    height: 50,
  },
  Items: {
    height: 18,
    width: 18,
  },
  leftContent: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  checkbox: {
    padding: 8,
    borderRadius: 4,
    // backgroundColor: "#308BFF",
  },
});

export default LoginScreens;
