import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import MaterialCommunityIcons

interface DropdownItem {
  label: string;
  value: string | number;
}

interface DropdownComponentProps {
  data: DropdownItem[];
  placeholder: string;
  onValueChange: (value: string | number) => void;
  searchEnabled?: boolean;
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap; // Prop để thay đổi icon
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  data,
  placeholder,
  onValueChange,
  searchEnabled = true,
  iconName = "menu", // Default icon nếu không có iconName
}) => {
  const [value, setValue] = useState<DropdownItem | null>(null);

  const renderItem = (item: DropdownItem) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value?.value && (
          <MaterialCommunityIcons
            style={styles.icon}
            color="#B1B2B2"
            name="check"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={searchEnabled}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item);
        onValueChange(item.value);
      }}
      renderLeftIcon={() => (
        <MaterialCommunityIcons
          style={styles.icon}
          color="#B1B2B2"
          name={iconName} // Sử dụng iconName truyền vào
          size={20}
        />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a6acad",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    gap: 10,
    height: 50,
    justifyContent: "space-between",
    //shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 15,
  },
  placeholderStyle: {
    fontSize: 15,
    color: "#B1B2B2",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 15,
  },
});
