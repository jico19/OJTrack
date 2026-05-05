
import { getTotalHours } from "@/src/db/services";
import { globalStyles } from "@/src/styles/gloabl_styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  const [userData, setUserData] = useState([])
  const [hour, setTotalHours] = useState(0)


  useFocusEffect(
    useCallback(() => {
      const res = async () => {
        const data = await AsyncStorage.getItem('user-pref')
        setUserData(JSON.parse(data))
        const totalHours = await getTotalHours()
        setTotalHours(totalHours[0].total)

      }
      res()
    }, [])
  )

  const target = userData?.target_hours ?? 0
  const percent = target > 0 ? ((hour / target) * 100).toFixed(1) : 0

  console.log(target, percent)

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.colContainer}>
        <Text style={globalStyles.heading}>Hello, {userData.name || "User!"}!</Text>

        <View style={globalStyles.card}>
          <View style={globalStyles.colContainer}>
            <Text style={globalStyles.subheading}>Targe Hours: {userData.target_hours}</Text>
            <Text style={globalStyles.subheading}>Rendered Hours: {hour}</Text>
          </View>


          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
