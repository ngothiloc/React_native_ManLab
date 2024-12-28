import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Path } from "react-native-svg";
import Svg from "react-native-svg";
import Status from "./Status";

const { height, width } = Dimensions.get("screen");

type RootStackParamList = {
  InfoDeviceScreen: undefined;
};

type CardExecutionHistoryProps = {
  name: string;
  status:
    | "hiệu lực"
    | "hết hiệu lực"
    | "huỷ bỏ"
    | "chờ cấp mới"
    | "sắp hết hiệu lực";
  qrCodeLink: string; // Link hình ảnh mã QR
};

const CardExecutionHistory: React.FC<CardExecutionHistoryProps> = ({
  name,
  status,
  qrCodeLink,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false); // State để hiển thị modal

  return (
    <View style={styles.container}>
      <Image source={require("../assets/qr-code.png")} style={styles.qrcode} />
      <View style={styles.card}>
        <Svg width="150" height="150" viewBox="0 0 158 150" fill="none">
          <Path
            id="Subtract"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M128.149 4.95589C124.502 1.76117 119.819 0 114.971 0H20C8.9543 0 0 8.95431 0 20V126C0 137.046 8.9543 146 20 146H138C149.046 146 158 137.046 158 126V40.1736C158 34.4103 155.514 28.9271 151.179 25.1295L128.149 4.95589Z"
            fill="white"
          />
        </Svg>
      </View>
      <View style={styles.content}>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("InfoDeviceScreen")}>
        <View style={styles.content2}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/person.png")}
              style={{
                width: 80,
                height: 80,
              }}
            />
          </View>
          <View style={styles.status}>
            <Status status={status} />
            <MaterialCommunityIcons name="arrow-right" color="gray" size={25} />
          </View>
        </View>
      </TouchableOpacity>

      {/* Thay đổi TouchableOpacity để mở modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.touch}></View>
      </TouchableOpacity>

      {/* Modal hiển thị hình ảnh QR Code */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: qrCodeLink }}
            style={{ width: 200, height: 200 }}
          />
          <TouchableOpacity
            style={{
              marginTop: 20,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: "black" }}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    borderColor: "#B4DBFF",
    margin: width < 700 ? 3 : 10,
    shadowColor: "#B4DBFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  qrcode: {
    position: "absolute",
    top: 13,
    right: 9,
    width: 60,
    height: 60,
  },
  card: {
    borderTopRightRadius: 100,
  },
  content: {
    position: "absolute",
    top: 15,
    left: 15,
    gap: 10,
    width: 120,
  },
  content2: {
    position: "absolute",
    top: -120,
    left: 1,
    gap: 15,
    width: 145,
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touch: {
    padding: 20,
    position: "absolute",
    zIndex: 1000,
    right: -4,
    top: -150,
  },
});

export default CardExecutionHistory;
