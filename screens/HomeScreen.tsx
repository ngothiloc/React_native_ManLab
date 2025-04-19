import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ActivityIndicator,
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
import { fetchNewsFromWordPress } from "../api/apiNewsWP";
import { NewsItem } from "../types/news";
import ChatBotButton from "../components/ChatBotButton";

const { height, width } = Dimensions.get("window");

type RootStackParamList = {
  BookingScreen: undefined;
};

const ProfileScreen = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayedNews, setDisplayedNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await fetchNewsFromWordPress();
        setNewsData(news);
        // Initialize with first 5 items
        setDisplayedNews(news.slice(0, itemsPerPage));
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * itemsPerPage;

    if (endIndex <= newsData.length) {
      setDisplayedNews(newsData.slice(startIndex, endIndex));
      setCurrentPage(nextPage);
    }
  };

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
                {loading ? (
                  <ActivityIndicator size="large" color="#409CF0" />
                ) : (
                  <NewsCard news={displayedNews} />
                )}
              </View>
              {displayedNews.length < newsData.length && (
                <TouchableOpacity
                  style={styles.loadMoreButton}
                  onPress={handleLoadMore}
                >
                  <Text style={styles.loadMoreText}>Xem thêm</Text>
                </TouchableOpacity>
              )}
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
        <ChatBotButton />
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
  loadMoreButton: {
    alignItems: "center",
    marginBottom: 40,
    padding: 10,
  },
  loadMoreText: {
    color: "#409CF0",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
