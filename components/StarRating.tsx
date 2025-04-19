import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface StarRatingProps {
  onRatingChange?: (rating: number) => void;
  initialRating?: number;
  size?: number;
  disabled?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  onRatingChange,
  initialRating = 0,
  size = 50,
  disabled = false,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [tempRating, setTempRating] = useState(0);

  const handleStarPress = (selectedRating: number) => {
    if (!disabled) {
      setRating(selectedRating);
      onRatingChange?.(selectedRating);
    }
  };

  const handleStarHover = (hoverRating: number) => {
    if (!disabled) {
      setTempRating(hoverRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    const displayRating = tempRating || rating;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleStarPress(i)}
          onPressIn={() => handleStarHover(i)}
          onPressOut={() => handleStarHover(0)}
          disabled={disabled}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name={i <= displayRating ? "star" : "star-outline"}
            size={size}
            color={i <= displayRating ? "#FFD700" : "#C4C4C4"}
          />
        </TouchableOpacity>
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.starsContainer}>{renderStars()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  starsContainer: {
    flexDirection: "row",
    gap: 5,
  },
});

export default StarRating;
