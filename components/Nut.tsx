import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface NutProps {
  text: string;
  onPress: () => void;
}

const Nut: React.FC<NutProps> = ({ text, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      style={[
        styles.container,
        isPressed && styles.pressedContainer, // Thay đổi khi nhấn
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)} // Kích hoạt hiệu ứng nhấn
      onPressOut={() => setIsPressed(false)} // Quay lại trạng thái ban đầu
    >
      <Text style={[styles.text, isPressed && styles.pressedText]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#308BFF",
    borderRadius: 10,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 3, // Hiệu ứng nổi (shadow Android)
    marginTop: 20,
  },
  pressedContainer: {
    backgroundColor: "#2874D0", // Màu tối hơn khi nhấn
    transform: [{ scale: 0.98 }], // Giảm kích thước nhẹ để tạo hiệu ứng
    elevation: 1, // Giảm độ nổi
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
  },
  pressedText: {
    color: "#E0E0E0", // Thay đổi màu chữ khi nhấn
  },
});

export default Nut;
