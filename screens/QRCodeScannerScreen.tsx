import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { WebView } from "react-native-webview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {};

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCAN_BOX_SIZE = 200; // Kích thước vùng quét QR

const QRCodeScannerScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [scannedLinks, setScannedLinks] = useState<{ [key: string]: number }>(
    {}
  );
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!permission || permission.status !== "granted") {
      requestPermission();
    }
  }, [permission]);

  if (!permission || permission.status !== "granted") {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Ứng dụng chưa có quyền truy cập camera.
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={styles.permissionButton}
        >
          <Text style={styles.permissionButtonText}>Cấp quyền</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarCodeScanned = (event: { data: string; bounds?: any }) => {
    if (!event.bounds) return;

    const { origin, size } = event.bounds;
    const qrCenterX = origin.x + size.width / 2;
    const qrCenterY = origin.y + size.height / 2;

    const scanBoxX = (SCREEN_WIDTH - SCAN_BOX_SIZE) / 2;
    const scanBoxY = (SCREEN_HEIGHT - SCAN_BOX_SIZE) / 2;

    if (
      qrCenterX >= scanBoxX &&
      qrCenterX <= scanBoxX + SCAN_BOX_SIZE &&
      qrCenterY >= scanBoxY &&
      qrCenterY <= scanBoxY + SCAN_BOX_SIZE
    ) {
      const now = Date.now();
      if (
        event.data.startsWith("http://") ||
        event.data.startsWith("https://")
      ) {
        if (
          !scannedLinks[event.data] ||
          now - scannedLinks[event.data] > 2000 //chỉ quét lại được sau 2s
        ) {
          setActiveLink(event.data);
          actionSheetRef.current?.show();
          setScannedLinks((prev) => ({ ...prev, [event.data]: now }));
        }
      }
    }
  };
  const closeBottomSheet = () => {
    actionSheetRef.current?.hide();
    setActiveLink(null);
  };
  return (
    <View style={styles.container}>
      {/* Nut back */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <MaterialCommunityIcons name="chevron-left" size={35} color="white" />
      </TouchableOpacity>

      {/* Camera */}
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={handleBarCodeScanned}
      />

      {/* Vùng quét */}
      <View style={styles.scanBox} />

      {/* Bottom Sheet */}
      <ActionSheet ref={actionSheetRef} gestureEnabled>
        {activeLink && (
          <View style={styles.sheetContainer}>
            <View style={styles.sheetHeader}>
              <Text numberOfLines={1} style={styles.sheetTitle}>
                {activeLink}
              </Text>
              <TouchableOpacity onPress={closeBottomSheet}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
            <WebView source={{ uri: activeLink }} style={styles.webView} />
          </View>
        )}
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  camera: { width: "100%", height: "100%" },

  /* Nut back */
  backButton: {
    position: "absolute",
    top: 60,
    left: 10,
    zIndex: 10,
    backgroundColor: "transparent",
    padding: 20,
  },

  /* Vùng quét QR */
  scanBox: {
    position: "absolute",
    width: SCAN_BOX_SIZE,
    height: SCAN_BOX_SIZE,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    top: (SCREEN_HEIGHT - SCAN_BOX_SIZE) / 2,
    left: (SCREEN_WIDTH - SCAN_BOX_SIZE) / 2,
  },

  /* Bottom Sheet */
  sheetContainer: { height: SCREEN_HEIGHT * 0.85 },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sheetTitle: { fontSize: 16, fontWeight: "bold", flex: 1 },
  doneText: { color: "blue", fontSize: 16 },
  webView: { flex: 1 },

  /* Cấp quyền */
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionText: { fontSize: 16, marginBottom: 20, textAlign: "center" },
  permissionButton: { backgroundColor: "blue", padding: 10, borderRadius: 5 },
  permissionButtonText: { color: "white", fontSize: 16 },
});

export default QRCodeScannerScreen;
