import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import BoxInfo from "../components/homeScreensComponent/BoxInfo";
import NewsCard from "../components/homeScreensComponent/NewsCard";
import Header from "../components/Header";
const { height, width } = Dimensions.get("window");

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: any; // Hoặc cụ thể hơn nếu bạn biết kiểu của image
  news: NewsItem;
}

type RootStackParamList = {
  BookingScreen: undefined;
};

const ProfileScreen = () => {
  const newsData = [
    {
      id: 1,
      title: "Tiêu đề 1",
      date: "2025-01-01",
      image: require("../assets/person.png"),
    },
    {
      id: 2,
      title: "Tiêu đề 2",
      date: "2025-01-02",
      image: require("../assets/person.png"),
    },
    {
      id: 3,
      title: "Tiêu đề 2",
      date: "2025-01-02",
      image: require("../assets/person.png"),
    },
    {
      id: 4,
      title: "Tiêu đề 2",
      date: "2025-01-02",
      image: require("../assets/person.png"),
    },
    {
      id: 5,
      title: "Tiêu đề 2",
      date: "2025-01-02",
      image: require("../assets/person.png"),
    },
  ];

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          backgroundColor: "#FCFCFC",
          flex: 1,
        }}
      >
        <StatusBar style="light" />
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.boxInfo}>
              <BoxInfo />
            </View>
            <View style={styles.content}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#303030",
                  marginVertical: 20,
                }}
              >
                Năng lực ETV
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#303030",
                  marginVertical: 20,
                }}
              >
                Tin tức kiểm định
              </Text>
              <View style={styles.newsCard}>
                <NewsCard news={newsData as NewsItem[]} />
              </View>
              <TouchableOpacity
                style={{ alignItems: "center", marginBottom: 40 }}
              >
                <Text>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.content}> */}
        {/* Thoát ứng dụng */}
        {/* <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="exit-to-app"
              size={20}
              color="#5D5D5D"
            />
            <Text style={styles.text}>Thoát ứng dụng</Text>
          </TouchableOpacity> */}
        {/* </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
  },
  boxInfo: {
    //shadow
    shadowColor: "#409CF0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    //resize
    marginTop: 50,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
    color: "#5D5D5D",
  },
  newsCard: {
    shadowColor: "#409CF0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1.5,
  },
});

export default ProfileScreen;
