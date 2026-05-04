
import { fetchAllEntry } from "@/src/db/services";
import { globalStyles } from "@/src/styles/gloabl_styles";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


interface Entry {
    id: number;
    date: string;
    timeIn: string;
    timeOut: string | null;
    totalHours: number | null;
}

const HistoryScreen = () => {
    const [entries, setEntries] = useState<Entry[]>([])

    useFocusEffect(
        useCallback(() => {
            const res = async () => {
                const test = await fetchAllEntry()
                console.log(test)
                setEntries(test as Entry[])
            }
            res()
        }, [])
    )

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.safeContainer}>
                <Text style={globalStyles.heading}>Your History</Text>
                <FlatList
                    data={entries}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={globalStyles.card}>
                            <View style={globalStyles.rowBetween}>
                                <Text style={globalStyles.subheading}>{item.date}</Text>
                                <Text>Total Hours: {item.totalHours}</Text>
                            </View>


                            <View style={globalStyles.divider} />
                            <View style={globalStyles.rowBetween}>
                                <Text>Time in: {item.timeIn}</Text>
                                <Text>Time out: {item.timeOut}</Text>
                            </View>

                        </View>
                    )}
                />

            </View>
        </SafeAreaView>
    )
}

export default HistoryScreen;