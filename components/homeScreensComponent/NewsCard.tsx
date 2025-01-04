import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: any; // Hoặc cụ thể hơn nếu bạn biết kiểu của image
  news: NewsItem;
}

const NewsCard = ({ news }: { news: NewsItem[] }) => {
  return (
    <View>
      {news.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/person.png")}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <View style={styles.content}>
                <Text
                  style={{ fontSize: 15, color: "#5D5D5D", fontWeight: "600" }}
                >
                  {item.title}
                </Text>
              </View>
              <View style={styles.date}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#7F7F7F",
                    fontWeight: "400",
                    fontStyle: "italic",
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: "#409CF0",
    backgroundColor: "white",
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  content: {
    justifyContent: "flex-start",
  },
  date: {
    justifyContent: "flex-end",
  },
});

export default NewsCard;
