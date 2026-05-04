import { globalStyles } from "@/src/styles/gloabl_styles";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.safeContainer}>
        <Text style={globalStyles.heading}>This is Home!</Text>
      </View>
    </SafeAreaView>
  );
}
