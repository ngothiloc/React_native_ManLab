import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ChoseAvatarProps {
  defaultImage?: any; // Hình ảnh mặc định (nếu không có đường dẫn cứng)
}

const ChoseAvatar: React.FC<ChoseAvatarProps> = ({
  defaultImage = require("../assets/person.png"),
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Ứng dụng cần quyền truy cập vào thư viện ảnh.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={selectedImage ? { uri: selectedImage } : defaultImage}
          style={styles.image}
        />
        {/* <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={selectedImage ? { uri: selectedImage } : defaultImage}
            style={styles.image}
          />
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity style={styles.cameraIcon} onPress={handleChoosePhoto}>
        <MaterialCommunityIcons name="camera" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    overflow: "hidden",
    position: "relative", // Để định vị icon bên trong
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 10, // Khoảng cách từ đáy
    right: 15, // Khoảng cách từ phải
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "gray",
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Tạo hiệu ứng đổ bóng (Android)
    shadowColor: "#000", // Tạo hiệu ứng đổ bóng (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default ChoseAvatar;
