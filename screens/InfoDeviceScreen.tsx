import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import InfoRow from "../components/InfoRow";
import ChoseAvatar from "../components/ChoseAvatar";
import Tieude from "../components/Tieude";
import Nut from "../components/Nut";
const InforDeviceScreen = () => {
  const dataInfo = [
    { title: "Tên thiết bị", value: "Tên thiết bị" },
    { title: "Cơ sở sản xuất", value: "Cơ sở sản xuất" },
    { title: "Model", value: "Model" },
    { title: "Serial", value: "Serial" },
    { title: "Trạng thái ", status: "hết hiệu lực" as const },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.img}>
        <ChoseAvatar />
      </View>
      <Tieude text="Thông tin chi tiết" />
      <InfoRow data={dataInfo} />
      <Nut
        text="Đóng"
        onPress={() => Alert.alert("Thông báo", "Chuyển trang")}
      />
      <View style={{ marginBottom: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 15,
    backgroundColor: "#fcfcfc",
  },
  img: {
    alignItems: "center",
  },
});
export default InforDeviceScreen;
