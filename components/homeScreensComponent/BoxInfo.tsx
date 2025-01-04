import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  BookingScreen: undefined;
};

const BoxInfo = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <LinearGradient
      colors={[
        "rgba(64, 156, 240, 1)",
        "rgba(84, 156, 240, 1)",
        "rgba(164, 207, 240, 1)",
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.h1}>
        Cập nhật liên tục tiến trình dịch vụ của bạn
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <View style={styles.text}>
            <Text style={styles.h2}>
              Lịch hẹn của tôi đã được xác nhận chưa
            </Text>
            <Text style={styles.h2}>
              Ai là người đang đến lấy mẫu cho tôi?{"\n"}Dự kiến tới thời gian
              nào tới?
            </Text>
            <Text style={styles.h2}>
              Xét nghiệm của tôi đã có kết quả chưa?
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buton}
            onPress={() => navigation.navigate("BookingScreen")}
          >
            <Text style={{ fontSize: 12 }}>Đặt lịch ngay!</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../../assets/man_catton.png")}
            style={{ width: 160, height: 190 }} // Tăng kích thước ảnh
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "",
              zIndex: 1,
              position: "absolute",
              top: -70,
              left: -340,
              width: 400,
              height: 200,
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#409CF0",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 20,
    height: 245,
    width: 350,
    padding: 15,
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    width: 200,
  },
  h2: {
    fontSize: 12,
    color: "white",
    marginBottom: 8,
  },
  buton: {
    backgroundColor: "#FFCA0A",
    padding: 8,
    width: 150,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
});

export default BoxInfo;
