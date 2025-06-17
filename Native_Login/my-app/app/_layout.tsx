import React from 'react'
import { Link, Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name ="(drawer)"/>
      <Stack.Screen name="(tab)" options={{headerShown:false}} />
      <Stack.Screen name="index" />
      <Stack.Screen name="about"/>
    </Stack>
  )
}

export default RootLayout;
