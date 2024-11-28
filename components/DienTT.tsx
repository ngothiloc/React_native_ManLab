import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface DienTTProps {
  text: string;
  leftIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  leftIconColor?: string;
  rightIconColor?: string;
  onChangeText?: (text: string) => void; // Thêm prop cho việc nhận giá trị từ TextInput
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "visible-password";
  isError?: boolean;
}

const DienTT: React.FC<DienTTProps> = ({
  text,
  leftIconName,
  rightIconName,
  leftIconColor = "#B1B2B2",
  rightIconColor = "#B1B2B2",
  onChangeText, // Nhận hàm từ prop
  keyboardType = "default",
  isError = false,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeText = (text: string) => {
    setInputValue(text); // Cập nhật giá trị trong state
    if (onChangeText) {
      onChangeText(text); // Gọi hàm onChangeText từ prop nếu có
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isError ? "#EE6363" : "#a6acad", // Đổi màu viền
          shadowColor: isError ? "red" : "#000", // Đổi màu shadow
        },
      ]}
    >
      <MaterialCommunityIcons
        name={leftIconName}
        size={20}
        color={isError ? "#EE6363" : leftIconColor}
      />
      <TextInput
        placeholder={text}
        placeholderTextColor={isError ? "#EE6363" : "#B1B2B2"}
        style={styles.input}
        // secureTextEntry={true}
        value={inputValue} // Gán giá trị state vào TextInput
        onChangeText={handleChangeText} // Gọi handleChangeText khi giá trị thay đổi
        keyboardType={keyboardType}
      />
      <View>
        <MaterialCommunityIcons
          name={rightIconName}
          size={16}
          color={rightIconColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a6acad",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    gap: 10,
    height: 50,
    justifyContent: "space-between",
    //shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
});

export default DienTT;