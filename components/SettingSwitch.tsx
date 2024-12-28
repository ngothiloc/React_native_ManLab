import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch as PaperSwitch } from "react-native";

interface SettingSwitchProps {
  text: string;
  leftIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  leftIconColor?: string;
}
const SettingSwitch: React.FC<SettingSwitchProps> = ({
  text,
  leftIconName, // Icon mặc định
  leftIconColor = "#5D5D5D", // Màu mặc định
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <MaterialCommunityIcons
          name={leftIconName}
          size={25}
          color={leftIconColor}
        />
        <Text style={styles.input}>{text}</Text>
      </View>
      <View style={styles.switchContainer}>
        {/* <Text>{isEnabled ? "Bật" : "Tắt"}</Text> */}
        <PaperSwitch value={isEnabled} onValueChange={toggleSwitch} />
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
    color: "#5D5D5D",
    fontWeight: "400",
  },
  switchContainer: {},
});

export default SettingSwitch;
