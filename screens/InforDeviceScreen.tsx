import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import InfoRow from "../components/InfoRow";
import ChoseAvatar from "../components/ChoseAvatar";
import Tieude from "../components/Tieude";
const InforDeviceScreen = () => {
  const dataInfo = [
    { title: "Tên thiết bị", value: "Tên thiết bị" },
    { title: "Cơ sở sản xuất", value: "Cơ sở sản xuất" },
    { title: "Model", value: "Model" },
    { title: "Serial", value: "Serial" },
    // { title: "Thông tin 5", status: "hết hiệu lực" }, // Phần tử này có status "huỷ bỏ"
  ];
  const dataCheck = [
    { title: "Yêu cầu thực hiện", value: "Kiểm định" },
    { title: "Tình trạng nhận PTĐ", value: "Bình thường" },
    { title: "Tình trạng trả PTĐ", value: "Bình thường" },
    { title: "Tình trạng BBĐL", value: "Chưa trả" },
    { title: "Số GCN", value: "abc123" },
    { title: "Số tem ", value: "abc123" },
    { title: "Ngày dự kiến ", value: "28/11/2024" },
    { title: "Trạng thái ", status: "hiệu lực" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.img}>
        <ChoseAvatar />
      </View>
      <Tieude text="Thông tin chi tiết" />
      <InfoRow data={dataInfo} />
      <Tieude text="Lịch sử kiểm định" />
      <InfoRow data={dataCheck} />
      <View style={{ marginBottom: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 15,
    backgroundColor: "#FCFCFC",
  },
  img: {
    alignItems: "center",
  },
});
export default InforDeviceScreen;
