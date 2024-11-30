import { Animated, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const handleCenterButtonPress = (
  scaleAnim: Animated.Value,
  bottomSheetAnim: Animated.Value,
  isVisible: boolean,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  // Hiệu ứng phóng to - thu nhỏ cho nút giữa
  Animated.sequence([
    Animated.timing(scaleAnim, {
      toValue: 1.2,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }),
  ]).start();

  // Hiển thị hoặc ẩn BottomSheet
  if (!isVisible) {
    Animated.timing(bottomSheetAnim, {
      toValue: height * 0.6, // Vị trí hiển thị BottomSheet (40% từ đáy)
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsVisible(true);
  } else {
    Animated.timing(bottomSheetAnim, {
      toValue: height, // Đưa BottomSheet xuống đáy
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsVisible(false);
  }
};