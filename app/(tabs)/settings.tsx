import { globalStyles } from "@/src/styles/gloabl_styles"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Pressable, Switch, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"




interface SettingsFormData {
    name: string,
    target_hours: number,
    dark_mode: boolean,

}

const SettingsScreen = () => {
    const [theme, setTheme] = useState("light")


    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<SettingsFormData>({
        defaultValues: {
            name: "",
            target_hours: 0,
            dark_mode: false,
        }
    })

    const onSubmit = async (data: FormData) => {
        await AsyncStorage.setItem('user-pref', JSON.stringify(data))
        reset()
    }



    return (
        <SafeAreaView style={globalStyles.container}>


            {/* forms */}

            <View style={globalStyles.colContainer}>
                <View>
                    <Text style={globalStyles.heading}>
                        Settings Page
                    </Text>
                    <Text style={globalStyles.subheading}>
                        your setting page
                    </Text>
                </View>


                <View>
                    <Text style={globalStyles.label}>Name</Text>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={globalStyles.input}
                                onChangeText={onChange}
                                value={value}
                                placeholder='e.g Juan Delacruz....'
                            />
                        )}
                    />
                </View>

                <View>
                    <Text style={globalStyles.label}>Target hours</Text>
                    <Controller
                        control={control}
                        name='target_hours'
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={globalStyles.input}
                                onChangeText={onChange}
                                value={value}
                                placeholder='e.g 520...'
                                keyboardType="numeric"
                            />
                        )}
                    />
                </View>

                <View>
                    <Text>App Theme</Text>
                    <Controller
                        control={control}
                        name='dark_mode'
                        render={({ field: { onChange, value } }) => (
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={theme ? "#f5dd4b" : "#f4f3f4"}
                                onValueChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </View>
                
                <Pressable style={globalStyles.btnPrimary} onPress={handleSubmit(onSubmit)}>
                    <Text style={globalStyles.btnText}>Save Settings</Text>
                </Pressable>


            </View>
        </SafeAreaView>
    )
}


export default SettingsScreen;