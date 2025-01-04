import { View, Text, Dimensions, StyleSheet, FlatList } from "react-native";
import React from "react";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import CardExecutionHistory from "../components/CardExecutionHistory";

const ExecutionHistory = () => {
  const devices = [
    {
      id: "1",
      name: "Thiết bị 1",
      status: "hiệu lực",
      qrCodeLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
      avatarLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
    },
    {
      id: "2",
      name: "Thiết bị 2",
      status: "hết hiệu lực",
      qrCodeLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
      avatarLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
    },
    {
      id: "3",
      name: "Thiết bị 3",
      status: "sắp hết hiệu lực",
      qrCodeLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
      avatarLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
    },
    {
      id: "4",
      name: "Thiết bị 4",
      status: "huỷ bỏ",
      qrCodeLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
      avatarLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
    },
    {
      id: "5",
      name: "Thiết bị 5",
      status: "chờ cấp mới",
      qrCodeLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
      avatarLink:
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
    },
  ];

  // Xác định số cột dựa trên chiều rộng
  const screenWidth = Dimensions.get("screen").width;
  const numColumns = screenWidth < 700 ? 2 : 4;

  return (
    <View style={styles.container}>
      <View style={styles.sort}>
        <Sort />
        <Filter />
      </View>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardExecutionHistory
            name={item.name}
            status={
              item.status as
                | "huỷ bỏ"
                | "chờ cấp mới"
                | "hiệu lực"
                | "hết hiệu lực"
                | "sắp hết hiệu lực"
            }
            qrCodeLink={item.qrCodeLink}
            avatarLink={item.avatarLink}
          />
        )}
        contentContainerStyle={styles.card}
        numColumns={numColumns} // Số cột động
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfcfc",
    paddingTop: 15,
    flex: 1,
  },
  sort: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  card: {
    paddingHorizontal: 13,
    paddingBottom: 15,
    marginVertical: 15,
  },
});

export default ExecutionHistory;
