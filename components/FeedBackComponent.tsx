import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface FeedBackComponentProps {
  code: string;
  title: string;
  avatar: string;
  onPress: () => void;
}

const FeedBackComponent: React.FC<FeedBackComponentProps> = ({
  code,
  title,
  avatar,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: avatar }} // Dùng URI cho ảnh động
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.code}>{code}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View>
        <MaterialCommunityIcons name="arrow-right" size={25} color="#303030" />
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
    borderRadius: 20,
    padding: 10,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 84,
    marginBottom: 10,
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
