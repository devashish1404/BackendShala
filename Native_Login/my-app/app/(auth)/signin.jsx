import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const base_url = "https://staging.api.slnkoprotrac.com/v1";

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${base_url}/logiN-IT`, {
        name: form.name,
        password: form.password,
      });

      const token = response.headers["x-auth-token"];

      if (token) {
        await SecureStore.setItemAsync("authToken", token);
        router.replace("/dashboard");
      } else {
        Alert.alert("Login Failed", "Token not found in response");
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Login Failed",
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/protrac_logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.inputWrapper}>
        <FontAwesome name="user" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name or Employee ID"
          value={form.employeeId}
          onChangeText={(text) => setForm({ ...form, employeeId: text })}
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputWrapper}>
        <FontAwesome name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forget Password?</Text>
      </TouchableOpacity>

      <Text style={styles.poweredBy}>Powered By</Text>
      <Image
        source={require("../../assets/images/slnko_blue_logo.png")}
        style={styles.brandLogo}
        resizeMode="contain"
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 350,
    height: 250,
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: "100%",
    height: 48,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#00315c",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 12,
    width: "100%",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotText: {
    color: "#00315c",
    textDecorationLine: "underline",
    marginTop: 8,
    fontSize: 14,
  },
  poweredBy: {
    marginTop: 250,
    fontSize: 12,
    color: "#aaa",
  },
  brandLogo: {
    width: 150,
    height: 60,
  },
});
