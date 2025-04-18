import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Status from "./Status";
import { Line } from "react-native-svg";
import Svg from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  InfoDevicePTDScreen: {
    deviceData: {
      deviceName: string;
      status: string;
      companyName: string;
      model: string;
      serial: string;
      staffImages: any[];
      date: string;
      requirement: string;
      receiveStatus: string;
      returnStatus: string;
      bbdStatus: string;
      certificateNumber: string;
      sealNumber: string;
    };
  };
};

interface PTDBoxProps {
  deviceName: string;
  status: string;
  companyName: string;
  model: string;
  serial: string;
  staffImages: any[];
  date: string;
  requirement: string;
  receiveStatus: string;
  returnStatus: string;
  bbdStatus: string;
  certificateNumber: string;
  sealNumber: string;
}

const PTDBox: React.FC<PTDBoxProps> = ({
  deviceName,
  status,
  companyName,
  model,
  serial,
  staffImages,
  date,
  requirement,
  receiveStatus,
  returnStatus,
  bbdStatus,
  certificateNumber,
  sealNumber,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("InfoDevicePTDScreen", {
          deviceData: {
            deviceName,
            status,
            companyName,
            model,
            serial,
            staffImages,
            date,
            requirement,
            receiveStatus,
            returnStatus,
            bbdStatus,
            certificateNumber,
            sealNumber,
          },
        })
      }
    >
      <View style={styles.title}>
        <Image
          source={require("../assets/person.png")}
          style={{ width: 80, height: 80 }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Text>{deviceName}</Text>
          <Status
            status={
              status as
                | "hết hiệu lực"
                | "huỷ bỏ"
                | "chờ cấp mới"
                | "hiệu lực"
                | "sắp hết hiệu lực"
            }
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.infor}>
          <Text style={styles.text}> Cơ sở sản xuất: </Text>
          <Text style={styles.text}> {companyName} </Text>
        </View>
        <View style={styles.infor}>
          <Text style={styles.text}> Model: </Text>
          <Text style={styles.text}> {model} </Text>
        </View>
        <View style={styles.infor}>
          <Text style={styles.text}> Serial: </Text>
          <Text style={styles.text}> {serial} </Text>
        </View>
      </View>
      <Svg height="2" width="100%">
        <Line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="#409CF0"
          strokeWidth="1.5"
          strokeDasharray="3,7"
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.bottom}>
        <View style={styles.staff}>
          <Text style={styles.textBottom}>Nhân viên:</Text>
          <View style={{ justifyContent: "center" }}>
            {staffImages.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={[
                  styles.image,
                  { left: index * 15, zIndex: staffImages.length - index }, // 15px là khoảng cách tăng dần cho mỗi ảnh
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.date}>
          <MaterialCommunityIcons name="calendar" size={20} color="#656565" />
          <Text style={styles.textBottom}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: "white",
    padding: 20,
    borderWidth: 1,
    borderColor: "#409CF0",
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    flexDirection: "row",
  },
  content: {
    flexDirection: "column",
    gap: 10,
  },
  infor: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  text: {
    maxWidth: "60%", // Giới hạn chiều rộng để tránh bị tràn
    flexWrap: "wrap", // Đảm bảo text sẽ xuống dòng nếu dài quá
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  staff: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  date: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  textBottom: { color: "#656565" },
  image: {
    width: 20,
    height: 20,
    borderRadius: 30,
    position: "absolute", // Các ảnh sẽ chồng lên nhau
  },
});

export default PTDBox;
