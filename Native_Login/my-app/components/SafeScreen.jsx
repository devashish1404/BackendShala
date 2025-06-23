import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

const SafeScreen = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {children}
    </SafeAreaView>
  );
};

export default SafeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
