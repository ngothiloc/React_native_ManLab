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
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    null
  );
  const [selectedValue2, setSelectedValue2] = useState<string | number | null>(
    null
  );

  const dataDevice = [
    { label: "Thiết bị A", value: "Thiết bị A" },
    { label: "Thiết bị B", value: "Thiết bị B" },
  ];

  const dataService = [
    { label: "Kiểm định", value: "Kiểm định" },
    { label: "GCN", value: "GCN" },
    { label: "Thử nghiệm", value: "Thử nghiệm" },
  ];

  const handleValueChange = (value: string | number) => {
    setSelectedValue(value);
  };
  const handleValueChange2 = (value: string | number) => {
    setSelectedValue2(value);
  };

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
        <DropdownComponent
          data={dataDevice}
          placeholder="Chọn thiết bị"
          onValueChange={handleValueChange2}
          searchEnabled={true}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>
          Loại dịch vụ <Text style={{ color: "red" }}>*</Text>
        </Text>
        <DropdownComponent
          data={dataService}
          placeholder="Chọn dịch vụ"
          onValueChange={handleValueChange2}
          searchEnabled={true}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>
          Ngày tháng <Text style={{ color: "red" }}>*</Text>
        </Text>
        <DropdownComponent
          data={dataService}
          placeholder="dd/mm/yyyy"
          onValueChange={handleValueChange}
          searchEnabled={false}
          iconName="account-search-outline"
        />

        <Text style={[styles.titleInput, { marginTop: 10 }]}>
          Serial <Text style={{ color: "red" }}>*</Text>
        </Text>
        <DienTT
          text="Nhập serial"
          leftIconName="format-list-numbered"
          keyboardType="phone-pad"
        />

        {/* Nút cập nhật */}
        <Nut
          text="Đặt lịch"
          onPress={() => Alert.alert("Thông báo", "Đặt lịch thành công")}
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
