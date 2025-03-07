import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";

import ChoseAvatar from "../components/ChoseAvatar"; // Đường dẫn cần chính xác
import Nut from "../components/Nut";
import Tieude from "../components/Tieude";
import DienTT from "../components/DienTT";
import DropdownComponent from "../components/DropdownComponent";
import apiLocationData from "../src/apiLocationData";

const EditCompanyScreen = () => {
  const {
    cities,
    districts,
    wards,
    selectedCity,
    selectedDistrict,
    handleCityChange,
    handleDistrictChange,
  } = apiLocationData();

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#fcfcfc" }}
      contentContainerStyle={{ flexGrow: 1, paddingTop: 15 }}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar style="dark" />
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
          data={cities.map((city) => ({ label: city.name, value: city.code }))} // Chuyển đổi dữ liệu
          placeholder="Chọn Tỉnh / Thành phố"
          onValueChange={handleCityChange}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>Quận / Huyện</Text>
        <DropdownComponent
          data={districts.map((district) => ({
            label: district.name,
            value: district.code,
          }))} // Chuyển đổi dữ liệu
          placeholder="Chọn Quận / Huyện"
          onValueChange={handleDistrictChange}
          iconName="account-search-outline"
          disabled={!selectedCity}
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>Phường / Xã</Text>
        <DropdownComponent
          data={wards.map((ward) => ({ label: ward.name, value: ward.code }))} // Chuyển đổi dữ liệu
          placeholder="Chọn Phường / Xã"
          onValueChange={(ward) => console.log("Selected Ward:", ward)}
          iconName="account-search-outline"
          disabled={!selectedDistrict}
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
