import React from 'react';
import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
        
          headerTitle: () => (
            <Image
              source={require('../assets/images/slnko_white_logo.png')}
              style={{ width: 60, height: 50, resizeMode: 'contain' }}
            />
          ),

          headerStyle: {
            backgroundColor: '#023c6b',
          },

  
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Profile tapped')}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 12,
                }}
              >
                <Text style={{ color: '#023c6b', fontWeight: 'bold' }}>M</Text>
              </View>
            </TouchableOpacity>
          ),

          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
};

export default RootLayout;
