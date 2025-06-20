import { Link } from "expo-router";
import { Text, View } from "react-native";
import SafeScreen from "@/components/SafeScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Welcome to Dashboard
      </Text>
    </View>
  );
}
