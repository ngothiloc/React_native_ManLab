import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import InfoRow from "../components/InfoRow";
import ChoseAvatar from "../components/ChoseAvatar";
import Tieude from "../components/Tieude";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../components/PTDBox";

type InfoDevicePTDScreenRouteProp = RouteProp<
  RootStackParamList,
  "InfoDevicePTDScreen"
>;

const InfoDevicePTDScreen = () => {
  const route = useRoute<InfoDevicePTDScreenRouteProp>();
  const { deviceData } = route.params;

  const dataInfo = [
    { title: "Tên thiết bị", value: deviceData.deviceName || "NULL" },
    { title: "Cơ sở sản xuất", value: deviceData.companyName || "NULL" },
    { title: "Model", value: deviceData.model || "NULL" },
    { title: "Serial", value: deviceData.serial || "NULL" },
  ];

  const dataCheck = [
    { title: "Yêu cầu thực hiện", value: deviceData.requirement || "NULL" },
    { title: "Tình trạng nhận PTĐ", value: deviceData.receiveStatus || "NULL" },
    { title: "Tình trạng trả PTĐ", value: deviceData.returnStatus || "NULL" },
    { title: "Tình trạng BBĐL", value: deviceData.bbdStatus || "NULL" },
    { title: "Số GCN", value: deviceData.certificateNumber || "NULL" },
    { title: "Số tem", value: deviceData.sealNumber || "NULL" },
    { title: "Ngày dự kiến", value: deviceData.date || "NULL" },
    {
      title: "Trạng thái",
      status: deviceData.status as "hết hiệu lực" | "hiệu lực",
    },
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
    backgroundColor: "#fcfcfc",
  },
  img: {
    alignItems: "center",
  },
});
export default InfoDevicePTDScreen;
