import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from "react-native";

interface DeviceItem {
  deviceName: string;
  status: string;
  companyName: string;
  model: string;
  serial: string;
  staffImages: any[]; // có thể thay 'any' bằng kiểu chính xác nếu bạn biết
  date: string;
}

const { width } = Dimensions.get("window");

const initialData = [
  {
    deviceName: "Tên thiết bị",
    status: "hiệu lực",
    companyName: "Công ty TNHH ABádád ádas",
    model: "ABC123123123",
    serial: "A23aS23",
    staffImages: [
      require("../assets/person.png"),
      require("../assets/person.png"),
      require("../assets/person.png"),
    ],
    date: "01/01/2025",
  },
  {
    deviceName: "Máy đo",
    status: "hết hiệu lực",
    companyName: "Công ty TNHH Máy đo",
    model: "amysdo12",
    serial: "A23aS23",
    staffImages: [
      require("../assets/person.png"),
      require("../assets/person.png"),
      require("../assets/person.png"),
    ],
    date: "01/01/2023",
  },
  {
    deviceName: "Máy đo",
    status: "hiệu lực",
    companyName: "Công ty TNHH Máy đo",
    model: "amysdo12",
    serial: "A23aS23",
    staffImages: [
      require("../assets/person.png"),
      require("../assets/person.png"),
      require("../assets/person.png"),
    ],
    date: "01/01/2024",
  },
];
const PTD_search_screen = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<DeviceItem[]>(initialData);

  const filteredData = data.filter((item) =>
    `${item.deviceName} ${item.companyName} ${item.model}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }: { item: DeviceItem }) => (
    <View style={styles.card}>
      <Text style={styles.deviceName}>{item.deviceName}</Text>
      <Text style={styles.text}>Công ty: {item.companyName}</Text>
      <Text style={styles.text}>Model: {item.model}</Text>
      <Text style={styles.text}>Serial: {item.serial}</Text>
      <Text style={styles.text}>Trạng thái: {item.status}</Text>
      <Text style={styles.text}>Ngày: {item.date}</Text>
      <View style={styles.imageRow}>
        {item.staffImages.map((img, index) => (
          <Image key={index} source={img} style={styles.staffImage} />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm theo tên, công ty, model..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>Không tìm thấy kết quả</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },
  deviceName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  imageRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  staffImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 6,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
    color: "#888",
  },
});

export default PTD_search_screen;
