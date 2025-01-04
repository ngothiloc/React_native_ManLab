import { View, Text, StyleSheet, Alert } from "react-native";
import DienTT from "../components/DienTT";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Nut from "../components/Nut";
const PostFeedBackScreen = () => {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#fcfcfc" }}
      contentContainerStyle={{ flexGrow: 1, paddingTop: 15 }}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Đánh giá</Text>
          <Text style={styles.title}>Thông tin đánh giá</Text>
          <DienTT text="Họ và tên" keyboardType="default" />
          <DienTT
            text="Khiếu nại về chứng chỉ đo lường"
            keyboardType="default"
            multiline={true}
            containerStyle={{
              height: 120,
              alignItems: "baseline",
              paddingVertical: 5,
            }}
          />
          <DienTT
            text="Thắc mắc khác"
            keyboardType="default"
            multiline={true}
            containerStyle={{
              height: 120,
              alignItems: "baseline",
              paddingVertical: 5,
            }}
          />
        </View>
        <Nut
          text="Gửi"
          onPress={() =>
            Alert.alert("Thông báo", "Cập nhật thông tin thành công")
          }
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  title: {
    fontSize: 14,
    color: "#5D5D5D",
  },
});
export default PostFeedBackScreen;
