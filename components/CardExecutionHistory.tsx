import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import React from "react";
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

const CardExecutionHistory = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
            fill="white" // Bạn có thể thay đổi màu sắc tại đây
          />
        </Svg>
      </View>
      <View style={styles.content}>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          Name Device
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
            <Status status="hiệu lực" />

            <MaterialCommunityIcons name="arrow-right" color="gray" size={25} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("Thông báo", "Mã QR hiện lên")}
      >
        <View style={styles.touch}>{/* <Text>alo</Text> */}</View>
      </TouchableOpacity>
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
    //shadow
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
    // marginTop: -10,
  },
  content: {
    position: "absolute",
    // backgroundColor: "yellow",
    top: 15,
    left: 15,
    gap: 10,
    width: 120,
  },
  content2: {
    position: "absolute",
    // backgroundColor: "yellow",
    top: -120,
    left: 1,
    gap: 15,
    width: 145,
    // alignItems: "center",
    // justifyContent: "center",
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touch: {
    // backgroundColor: "red",
    padding: 20,
    position: "absolute",
    zIndex: 1000,
    right: -4,
    top: -150,
  },
});
export default CardExecutionHistory;
