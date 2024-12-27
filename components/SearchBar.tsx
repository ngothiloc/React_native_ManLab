import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const SearchBar = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.leftSearch]}>
        <MaterialCommunityIcons name="magnify" size={20} />
        <Text>Tìm kiếm</Text>
      </View>
      <MaterialCommunityIcons name="microphone" size={20} />
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
    //shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  leftSearch: {
    flexDirection: "row",
    gap: 10,
  },
});
export default SearchBar;
