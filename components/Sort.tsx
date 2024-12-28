import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const Sort = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons name="sort" color="#8F9098" />
      <Text style={{ fontSize: 12, color: "#1F2024" }}>Sắp xếp</Text>
      <MaterialCommunityIcons name="chevron-down" color="#8F9098" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 110,
    height: height < 1000 ? 45 : 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#C5C6CC",
  },
});

export default Sort;
