import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const FeedBackComponent = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../assets/person.png")}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.code}>Mã phản hồi</Text>
          <Text style={styles.title}>Tiêu đề phản hồi</Text>
        </View>
      </View>
      <View>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={25}
          color="#303030"
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#B4DBFF",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    overflow: "hidden",
    position: "relative",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  code: {
    fontSize: 14,
    color: "#303030",
    fontWeight: "700",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: "#303030",
  },
});

export default FeedBackComponent;
