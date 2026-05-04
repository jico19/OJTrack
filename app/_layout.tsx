// app/_layout.tsx
import { initDb } from "@/src/db/db";
import { Stack } from "expo-router";
import { useEffect } from "react";


export default function RootLayout() {


    useEffect(() => {
        initDb()
    }, [])


    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}