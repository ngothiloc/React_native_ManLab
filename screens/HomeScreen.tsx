import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import DropdownComponent from "../components/DropdownComponent";

const HomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    null
  );

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const handleValueChange = (value: string | number) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <DropdownComponent
        data={data}
        placeholder="Select an item"
        onValueChange={handleValueChange}
        searchEnabled={false}
        iconName="account"
      />
      <Text style={styles.selectedValue}>Selected Value: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  selectedValue: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default HomeScreen;
