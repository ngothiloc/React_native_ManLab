import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.75;
const CARD_HEIGHT = 300;
const SPACING = 20;

const staffData = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    position: "Giám đốc kỹ thuật",
    description: "10 năm kinh nghiệm trong lĩnh vực nuôi trồng thủy sản.",
    image: require("../assets/person.png"),
  },
  {
    id: "2",
    name: "Trần Thị B",
    position: "Chuyên gia môi trường",
    description: "Giám sát chất lượng nước và sinh thái tôm.",
    image: require("../assets/person.png"),
  },
  {
    id: "3",
    name: "Lê Văn C",
    position: "Kỹ sư công nghệ",
    description: "Tích hợp IoT và AI trong quản lý trang trại.",
    image: require("../assets/person.png"),
  },
];

const StackedCardSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={staffData}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + SPACING}
      decelerationRate="fast"
      bounces={false}
      contentContainerStyle={{ paddingHorizontal: (width - CARD_WIDTH) / 2 }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      renderItem={({ item, index }) => {
        const inputRange = [
          (index - 1) * (CARD_WIDTH + SPACING),
          index * (CARD_WIDTH + SPACING),
          (index + 1) * (CARD_WIDTH + SPACING),
        ];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.9, 1, 0.9],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.card, { transform: [{ scale }], opacity }]}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>{item.position}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Animated.View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: SPACING / 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  position: {
    fontSize: 16,
    color: "#888",
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
});

export default StackedCardSlider;
