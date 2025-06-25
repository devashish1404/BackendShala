import { Text, View } from "react-native";
import SafeScreen from "@/components/SafeScreen";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeScreen>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Welcome to Dashboard again
        </Text>
        <Link href="/(auth)/signin" style={{ color: 'blue', marginTop: 10 }}>
          Go to Sign In
        </Link>
      </View>
    </SafeScreen>
  );
}
