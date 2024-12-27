import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ChoseAvatar from "../components/ChoseAvatar"; // Đường dẫn cần chính xác
import Nut from "../components/Nut";
import Tieude from "../components/Tieude";
import DienTT from "../components/DienTT";
import DropdownComponent from "../components/DropdownComponent";

const EditCompanyScreen = () => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    null
  );
  const [selectedValue2, setSelectedValue2] = useState<string | number | null>(
    null
  );
  const [selectedValue3, setSelectedValue3] = useState<string | number | null>(
    null
  );

  const dataCity = [
    { label: "Thành phố Hà Nội", value: "Hà Nội" },
    { label: "Thành phố Hồ Chí Minh", value: "Hồ Chí Minh" },
    { label: "Thành phố Đà Nẵng", value: "Đà Nẵng" },
    { label: "Thành phố Hải Phòng", value: "Hải Phòng" },
  ];

  const dataDistrict = [
    { label: "Quận Ba Đình", value: "Ba Đình" },
    { label: "Quận Cầu Giấy", value: "Cầu Giấy" },
    { label: "Quận Đống Đa", value: "Đống Đa" },
    { label: "Quận Hà Đông", value: "Hà Đông" },
  ];

  const dataWard = [
    { label: "Phường Mỹ Đình", value: "Mỹ Đình" },
    { label: "Phường Cầu Diễn", value: "Cầu Diễn" },
    { label: "Phường Thanh Xuân Trung", value: "Thanh Xuân Trung" },
  ];

  const handleValueChange = (value: string | number) => {
    setSelectedValue(value);
  };
  const handleValueChange2 = (value: string | number) => {
    setSelectedValue2(value);
  };
  const handleValueChange3 = (value: string | number) => {
    setSelectedValue3(value);
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
          data={dataCity}
          placeholder="Tỉnh / Thành phố"
          onValueChange={handleValueChange}
          searchEnabled={true}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>Quận / Huyện</Text>
        <DropdownComponent
          data={dataDistrict}
          placeholder="Quận / Huyện"
          onValueChange={handleValueChange2}
          searchEnabled={true}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>Phường / Xã</Text>
        <DropdownComponent
          data={dataWard}
          placeholder="Phường / Xã"
          onValueChange={handleValueChange3}
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

export default EditCompanyScreen;
