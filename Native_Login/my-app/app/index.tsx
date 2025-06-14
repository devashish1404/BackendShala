import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    
  },
});

  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      style={styles.container}
    >
      <Text style={styles.text}>
        Welcome to Dashboard
      </Text>

      {/* <Link href="/about">
        <Text style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
          Go to About Page
        </Text>
      </Link> */}
    </View>
  );
}
