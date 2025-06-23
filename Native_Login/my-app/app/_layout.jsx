import React from "react";
import { Slot } from "expo-router";
import SafeScreen from "@/components/SafeScreen";

const RootLayout = () => {
  return (
    <SafeScreen>
      <Slot />
    </SafeScreen>
  );
};

export default RootLayout;

