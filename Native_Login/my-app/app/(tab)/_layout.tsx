import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="contacts" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return (
              <View
                style={{
                  borderRadius: 50,
                  height: 60,
                  width: 60,
                  backgroundColor: "#112640",
                  bottom: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome size={28} name="home" color={"white"} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={28} name="circle-user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoot;
