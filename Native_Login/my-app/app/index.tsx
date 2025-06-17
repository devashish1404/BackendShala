import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize:20 , fontWeight:"bold"}}>Welcome to Dashboard</Text>
      <Link href="/about">Go to About</Link>

    </View>
  );
}
