import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_HEIGHT = 300;

const employees = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    position: "Giám đốc kỹ thuật",
    info: "10 năm kinh nghiệm trong lĩnh vực kỹ thuật",
    avatar: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: "2",
    name: "Trần Thị B",
    position: "Chuyên viên dự án",
    info: "Tốt nghiệp loại giỏi Đại học Bách Khoa",
    avatar: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: "3",
    name: "Lê Văn C",
    position: "Nhân viên lập trình",
    info: "Thành thạo React Native, Node.js",
    avatar: "https://i.pravatar.cc/300?img=3",
  },
];

const EmployeeCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 10,

      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          // Chỉ cho phép vuốt trái
          pan.setValue({ x: gestureState.dx, y: 0 });
        }
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -120) {
          // Vuốt sang trái đủ mạnh -> chuyển thẻ
          Animated.timing(pan, {
            toValue: { x: -width * 1.5, y: 0 },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
            setCurrentIndex((prev) => prev + 1);
          });
        } else {
          // Vuốt chưa đủ hoặc sang phải -> trả về vị trí cũ
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {employees
        .slice(currentIndex, currentIndex + 2)
        .reverse()
        .map((item, index) => {
          const isTopCard = index === 0;
          const translateY = isTopCard
            ? 0
            : pan.x.interpolate({
                inputRange: [-width, 0],
                outputRange: [10, 10],
                extrapolate: "clamp",
              });

          const scale = isTopCard
            ? 1
            : pan.x.interpolate({
                inputRange: [-width, 0],
                outputRange: [1, 0.95],
                extrapolate: "clamp",
              });

          const animatedStyle = {
            transform: [
              { translateX: isTopCard ? pan.x : 0 },
              { translateY },
              { scale },
            ],
          };

          return (
            <Animated.View
              key={item.id}
              style={[
                styles.card,
                animatedStyle,
                { zIndex: employees.length - index },
              ]}
              {...(isTopCard ? panResponder.panHandlers : {})}
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.position}>{item.position}</Text>
              <Text style={styles.info}>{item.info}</Text>
            </Animated.View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.9,
    height: CARD_HEIGHT,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  position: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
  info: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    color: "#777",
  },
});

export default EmployeeCards;
