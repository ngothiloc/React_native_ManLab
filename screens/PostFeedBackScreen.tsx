import { View, Text, StyleSheet, Alert } from "react-native";
import DienTT from "../components/DienTT";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Nut from "../components/Nut";
import StarRating from "../components/StarRating";
import { useState } from "react";

const PostFeedBackScreen = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    console.log("Đánh giá:", newRating, "sao");
  };

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert("Thông báo", "Vui lòng đánh giá trước khi gửi");
      return;
    }
    Alert.alert("Thông báo", "Cập nhật thông tin thành công");
  };

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
          <View style={styles.ratingContainer}>
            <Text style={styles.title}>Đánh giá</Text>
            <StarRating onRatingChange={handleRatingChange} />
            <Text style={styles.ratingText}>
              {rating > 0
                ? `Bạn đã đánh giá ${rating} sao`
                : "Vui lòng đánh giá"}
            </Text>
          </View>
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
        <Nut text="Gửi" onPress={handleSubmit} />
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
  ratingContainer: {
    gap: 10,
  },
  ratingText: {
    textAlign: "center",
    fontSize: 14,
    color: "#308BFF",
    marginTop: 5,
  },
});

export default PostFeedBackScreen;
