import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const Sort = ({ onSortChange }: { onSortChange: (option: string) => void }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (option: string) => {
    onSortChange(option);
    setShowDropdown(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <MaterialCommunityIcons name="sort" color="#8F9098" />
        <Text style={styles.text}>Sắp xếp</Text>
        <MaterialCommunityIcons name="chevron-down" color="#8F9098" />
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => handleSelect("newest")}>
            <Text style={styles.option}>Mới nhất</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelect("oldest")}>
            <Text style={styles.option}>Cũ nhất</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
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
  text: {
    fontSize: 12,
    color: "#1F2024",
  },
  dropdown: {
    backgroundColor: "#fff",
    position: "absolute",
    top: height < 1000 ? 50 : 55,
    left: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#C5C6CC",
    padding: 8,
    zIndex: 10,
  },
  option: {
    padding: 5,
    fontSize: 15,
    color: "#1F2024",
  },
});

export default Sort;
