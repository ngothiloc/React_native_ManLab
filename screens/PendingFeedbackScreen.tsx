import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FeedBackComponent from "../components/FeedBackComponent";

export const pendingFeedbackData = [
  {
    code: "FB12345",
    title: "Tiêu đề phản hồi 1",
    avatar: "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
  },
  {
    code: "FB12346",
    title: "Tiêu đề phản hồi 2",
    avatar: "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
  },
  {
    code: "FB12347",
    title: "Tiêu đề phản hồi 3",
    avatar: "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
  },
  {
    code: "FB12348",
    title: "Tiêu đề phản hồi 4",
    avatar: "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
  },
  {
    code: "FB12349",
    title: "Tiêu đề phản hồi 5",
    avatar: "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
  },
  // Bạn có thể thêm nhiều dữ liệu ở đây
];

interface PendingFeedbackScreenProps {
  onFeedbackCountChange?: (count: number) => void;
}

const PendingFeedbackScreen: React.FC<PendingFeedbackScreenProps> = ({
  onFeedbackCountChange,
}) => {
  React.useEffect(() => {
    onFeedbackCountChange?.(pendingFeedbackData.length);
  }, [onFeedbackCountChange]);

  return (
    <ScrollView style={styles.tabContent}>
      {pendingFeedbackData.map((feedback, index) => (
        <FeedBackComponent
          key={index}
          code={feedback.code}
          title={feedback.title}
          avatar={feedback.avatar}
          onPress={() => {
            console.log(`Đã chọn phản hồi với mã ${feedback.code}`);
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    paddingHorizontal: 18,
    paddingTop: 20,
    gap: 20,
  },
});

export default PendingFeedbackScreen;
