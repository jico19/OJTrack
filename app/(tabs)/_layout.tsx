import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="log"
        options={{
          title: "Log",
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false
        }}
      />

    </Tabs>
  );
}