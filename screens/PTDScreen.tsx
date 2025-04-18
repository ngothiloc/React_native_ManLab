import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import { StatusBar } from "expo-status-bar";
import PTDBox from "../components/PTDBox";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  PTD_search_screen: undefined;
};

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

const PTDScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [deviceData, setDeviceData] = useState(initialData);

  const handleSortChange = (option: string) => {
    const sorted = [...deviceData].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split("/").map(Number);
      const [dayB, monthB, yearB] = b.date.split("/").map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return option === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    setDeviceData(sorted);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.sort}>
        <Sort onSortChange={handleSortChange} />
        <Filter onPress={() => navigation.navigate("PTD_search_screen")} />
      </View>
      <View style={styles.ptdBox}>
        <FlatList
          data={deviceData}
          renderItem={({ item }) => (
            <PTDBox
              deviceName={item.deviceName}
              status={item.status}
              companyName={item.companyName}
              model={item.model}
              serial={item.serial}
              staffImages={item.staffImages}
              date={item.date}
            />
          )}
          keyExtractor={(item, index) => index.toString()} // keyExtractor để xác định key cho mỗi phần tử
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 30,
  },
  sort: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 30,
  },
  ptdBox: {
    marginTop: 20,
    //shadow
    shadowColor: "#409CF0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1.5,
  },
});
export default PTDScreen;
