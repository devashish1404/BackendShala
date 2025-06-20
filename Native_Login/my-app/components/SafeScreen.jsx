import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeScreen
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
    <View>
      <Text>Hello</Text>
    </View>
      
    </SafeScreen>
  );
};

export default SafeScreen;
