import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch as PaperSwitch, IconButton } from "react-native-paper"; // Đổi tên Switch để tránh xung đột

const SwitchComponent: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false); // State để kiểm soát trạng thái của switch

  const toggleSwitch = () => setIsEnabled(!isEnabled); // Hàm để thay đổi trạng thái của switch

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Nút icon */}
        <IconButton
          icon="settings" // Bạn có thể thay đổi icon này
          size={30}
          onPress={() => console.log("Icon Pressed")} // Thêm chức năng khi nhấn vào icon
        />
        {/* Tiêu đề chữ */}
        <Text style={styles.title}>Cài đặt</Text>
      </View>

      {/* Switch (Nút tắt bật) */}
      <View style={styles.switchContainer}>
        <Text>{isEnabled ? "Bật" : "Tắt"}</Text>
        <PaperSwitch value={isEnabled} onValueChange={toggleSwitch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row", // Để các thành phần hiển thị ngang
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
  switchContainer: {
    flexDirection: "row", // Để hiển thị switch và chữ ngang nhau
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SwitchComponent;
