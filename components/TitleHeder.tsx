import React from "react";
import { View, Text, StyleSheet } from "react-native";
interface TitleHeaderProps {
  text: string;
}
const TitleHeder: React.FC<TitleHeaderProps> = ({ text }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "800",
  },
});

export default TitleHeder;
