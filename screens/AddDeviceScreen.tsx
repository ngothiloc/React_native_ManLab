import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import ChoseAvatar from "../components/ChoseAvatar";
import Nut from "../components/Nut";
import Tieude from "../components/Tieude";
import DienTT from "../components/DienTT";
import DropdownComponent from "../components/DropdownComponent";

const EditPersonalScreen = () => {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      contentContainerStyle={{ flexGrow: 1, paddingTop: 15 }}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ paddingHorizontal: 25 }}>
        {/* Avatar */}
        <View style={styles.container}>
          <ChoseAvatar />
        </View>

        {/* Tiêu đề */}
        <Tieude text="Thông tin" />

        {/* Form nhập liệu */}
        <Text style={styles.titleInput}>
          Tên thiết bị <Text style={{ color: "red" }}>*</Text>
        </Text>
        <DienTT
          text="Nhập tên thiết bị"
          leftIconName="account-edit-outline"
          keyboardType="default"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>
          Cơ sở sản xuất <Text style={{ color: "red" }}>*</Text>
        </Text>
        <DienTT
          text="Nhập cơ sở sản xuất"
          leftIconName="email-outline"
          keyboardType="default"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>
          Model <Text style={{ color: "red" }}>*</Text>
        </Text>
        <DienTT
          text="Nhập model"
          leftIconName="format-list-numbered"
          keyboardType="default"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>
          Serial <Text style={{ color: "red" }}>*</Text>
        </Text>
        <DienTT
          text="Nhập serial"
          leftIconName="format-list-numbered"
          keyboardType="default"
        />

        {/* Nút cập nhật */}
        <Nut
          text="Thêm thiết bị"
          onPress={() => Alert.alert("Thông báo", "Thêm thiết bị thành công")}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 15,
  },
  titleInput: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
});

export default EditPersonalScreen;
