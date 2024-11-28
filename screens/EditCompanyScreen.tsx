import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Alert,
} from "react-native";
import ChoseAvatar from "../components/ChoseAvatar"; // Đường dẫn cần chính xác
import Nut from "../components/Nut";
import TitleHeder from "../components/TitleHeder";
import Tieude from "../components/Tieude";
import DienTT from "../components/DienTT";
import DropdownComponent from "../components/DropdownComponent";

const EditPersonalScreen = () => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    null
  );
  const [selectedValue2, setSelectedValue2] = useState<string | number | null>(
    null
  );

  const dataSex = [
    { label: "Nam", value: "Nam" },
    { label: "Nữ", value: "Nữ" },
  ];

  const dataPosition = [
    { label: "Giám đốc", value: "Giám đốc" },
    { label: "Nhân viên", value: "Nhân viên" },
    { label: "Thực tập", value: "Thực tập" },
  ];

  const handleValueChange = (value: string | number) => {
    setSelectedValue(value);
  };
  const handleValueChange2 = (value: string | number) => {
    setSelectedValue2(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ paddingHorizontal: 25, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <ChoseAvatar />
        </View>
        <Tieude text="Thông tin" />
        <ScrollView>
          <KeyboardAwareScrollView>
            <View>
              <Text style={styles.titleInput}>Họ và tên</Text>
              <DienTT
                text="Họ và tên"
                leftIconName="account-edit-outline"
                keyboardType="default"
              />

              <Text style={[styles.titleInput, { marginTop: 10 }]}>Email</Text>
              <DienTT
                text="Emai"
                leftIconName="email-outline"
                keyboardType="email-address"
              />

              <Text style={[styles.titleInput, { marginTop: 10 }]}>
                Số điện thoại
              </Text>
              <DienTT
                text="Số điện thoại"
                leftIconName="format-list-numbered"
                keyboardType="phone-pad"
              />

              <Text style={[styles.titleInput, { marginTop: 10 }]}>
                Giới tính
              </Text>
              <DropdownComponent
                data={dataSex}
                placeholder="Chọn giới tính"
                onValueChange={handleValueChange}
                searchEnabled={false}
                iconName="account-search-outline"
              />

              <Text style={[styles.titleInput, { marginTop: 10 }]}>
                Chức vụ
              </Text>
              <DropdownComponent
                data={dataPosition}
                placeholder="Chức vụ"
                onValueChange={handleValueChange2}
                searchEnabled={true}
                iconName="account-search-outline"
              />
            </View>
            <Nut
              text="Cập nhật"
              onPress={() =>
                Alert.alert("Thông báo", "Cập nhật thông tin thành công")
              }
            />
          </KeyboardAwareScrollView>
        </ScrollView>

        <View style={{ margin: 100 }}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
  },
  titleInput: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
});

export default EditPersonalScreen;
