import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    employeeId: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('Logging in with:', form);
    // Add your API call here
    // router.push('/home'); // Navigate to a protected page
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/protrac_logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>PROTRAC</Text>

      <TextInput
        style={styles.input}
        placeholder="Name or Employee ID"
        value={form.employeeId}
        onChangeText={(text) => setForm({ ...form, employeeId: text })}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
        secureTextEntry
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forget Password?</Text>
      </TouchableOpacity>

      <Text style={styles.poweredBy}>Powered By</Text>
      <Image
        source={require('../../assets/images/slnko_white_logo.png')}
        style={styles.brandLogo}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>The Next Level Engineering</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00315c',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#00315c',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotText: {
    color: '#00315c',
    textDecorationLine: 'underline',
    marginTop: 8,
    fontSize: 14,
  },
  poweredBy: {
    marginTop: 40,
    fontSize: 12,
    color: '#aaa',
  },
  brandLogo: {
    width: 80,
    height: 40,
    marginTop: 4,
  },
  tagline: {
    fontSize: 12,
    color: '#00315c',
    marginTop: 2,
  },
});
