import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Status from "./Status";

interface InfoItem {
  title: string;
  value?: string; // value có thể có hoặc không
  status?:
    | "hết hiệu lực"
    | "huỷ bỏ"
    | "chờ cấp mới"
    | "hiệu lực"
    | "sắp hết hiệu lực"; // status là tùy chọn, giới hạn giá trị
}

interface InfoRowProps {
  data: InfoItem[]; // Mảng các đối tượng kiểu InfoItem
}
const InfoRow: React.FC<InfoRowProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            {item.status ? (
              <Status status={item.status} />
            ) : (
              <Text style={styles.value}>{item.value}</Text>
            )}
          </View>
          {/* Hiển thị đường phân cách nếu không phải là phần tử cuối cùng */}
          {index < data.length - 1 && <View style={styles.line} />}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a6acad",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    gap: 10,
    paddingVertical: 15,
    //shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#a6acad",
    marginVertical: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 25,
  },
  title: {
    fontSize: 15,
  },
  value: {
    color: "#B1B2B2",
    fontStyle: "italic",
    fontSize: 15,
  },
});

export default InfoRow;
