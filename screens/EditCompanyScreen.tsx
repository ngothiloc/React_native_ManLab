import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ChoseAvatar from "../components/ChoseAvatar"; // Đường dẫn cần chính xác
import Nut from "../components/Nut";
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
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#fcfcfc" }}
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

        {/* Thông tin */}
        <Tieude text="Thông tin" />
        <Text style={styles.titleInput}>Họ và tên</Text>
        <DienTT
          text="Tên tổ chức"
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

        {/* Địa chỉ */}
        <Tieude text="Địa chỉ" />
        <Text style={styles.titleInput}>Tỉnh / Thành phố</Text>
        <DropdownComponent
          data={dataSex}
          placeholder="Tỉnh / Thành phố"
          onValueChange={handleValueChange}
          searchEnabled={false}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>Quận / Huyện</Text>
        <DropdownComponent
          data={dataPosition}
          placeholder="Quận / Huyện"
          onValueChange={handleValueChange2}
          searchEnabled={true}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>Phường / Xã</Text>
        <DropdownComponent
          data={dataPosition}
          placeholder="Phường / Xã"
          onValueChange={handleValueChange2}
          searchEnabled={true}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>
          Địa chỉ cụ thể
        </Text>
        <DienTT
          text="Địa chỉ cụ thể: số nhà/thôn/xóm/..."
          leftIconName="account-edit-outline"
          keyboardType="default"
        />

        {/* Nút Cập nhật */}
        <Nut
          text="Cập nhật"
          onPress={() =>
            Alert.alert("Thông báo", "Cập nhật thông tin thành công")
          }
        />
      </View>
      <View style={{ marginBottom: 50 }} />
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
