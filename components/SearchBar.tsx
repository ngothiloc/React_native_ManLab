import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

// Khai báo kiểu cho props
interface SearchBarProps {
  style?: ViewStyle; // Đảm bảo kiểu cho style là ViewStyle
}

const SearchBar: React.FC<SearchBarProps> = ({ style }) => {
  const [searchText, setSearchText] = useState("");

  const handleMicrophonePress = () => {
    // Thêm logic thu âm tại đây
    console.log("Microphone pressed");
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.leftSearch]}>
        <MaterialCommunityIcons name="magnify" size={20} color="#B0B1B3" />
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <TouchableOpacity onPress={handleMicrophonePress}>
        <MaterialCommunityIcons name="microphone" size={20} color="#B0B1B3" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 25,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    gap: 10,
    height: 50,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  leftSearch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
