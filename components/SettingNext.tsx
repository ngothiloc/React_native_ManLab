import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface SettingNextProps {
  text: string;
  leftIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  leftIconColor?: string;
  rightIconColor?: string;
}

const SettingNext: React.FC<SettingNextProps> = ({
  text,
  leftIconName,
  rightIconName = "keyboard-backspace",
  leftIconColor = "#303030",
  rightIconColor = "#303030",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        {leftIconName && (
          <MaterialCommunityIcons
            name={leftIconName}
            size={25}
            color={leftIconColor}
          />
        )}
        <Text style={styles.input}>{text}</Text>
      </View>
      <View>
        <MaterialCommunityIcons
          name={rightIconName}
          size={25}
          color={rightIconColor}
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderColor: "#EDF1F3",
    marginBottom: 20,
    backgroundColor: "#ffffff",
    //shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  leftContent: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    color: "#303030",
    fontWeight: "400",
  },
});

export default SettingNext;
