import PeriodToggle from '@/src/components/periodToggle';
import { fetchAllEntry, logEntry } from '@/src/db/services';
import { globalStyles } from '@/src/styles/gloabl_styles';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";



interface LogFormData {
    timeIn: string;
    timeInPeriod: 'AM' | 'PM';
    timeOut: string;
    timeOutPeriod: 'AM' | 'PM';
}


const LogScreen = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<LogFormData>({
        defaultValues: {
            timeIn: "",
            timeInPeriod: "AM",
            timeOut: "",
            timeOutPeriod: "PM",
        }
    })

    const onSubmit = async (data: LogFormData) => {
        await logEntry(data)
        await fetchAllEntry()
        reset()
    }


    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.colContainer}>
                <Text style={globalStyles.heading}>Log your time in and time out here.</Text>


                <View>
                    <Text style={globalStyles.label}>Time in</Text>
                    <View style={[globalStyles.row, { gap: 8 }]}>
                        <View style={{ flex: 1 }}>
                            <Controller
                                control={control}
                                name='timeIn'
                                rules={{ required: "Time in is required." }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={globalStyles.input}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder='8:00'
                                    />
                                )}
                            />
                        </View>
                        <View style={{ width: 120 }}>
                            <Controller
                                control={control}
                                name='timeInPeriod'
                                render={({ field: { onChange, value } }) => (
                                    <PeriodToggle value={value} onChange={onChange} />
                                )}
                            />
                        </View>
                    </View>
                    {errors.timeIn && <Text style={globalStyles.errorText}>{errors.timeIn.message}</Text>}
                </View>

                <View>
                    <Text style={globalStyles.label}>Time Out</Text>
                    <View style={[globalStyles.row, { gap: 8 }]}>
                        <View style={{ flex: 1 }}>
                            <Controller
                                control={control}
                                name='timeOut'
                                rules={{ required: "Time Out is required." }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={globalStyles.input}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder='5:00'
                                    />
                                )}
                            />
                        </View>
                        <View style={{ width: 120 }}>
                            <Controller
                                control={control}
                                name='timeOutPeriod'
                                render={({ field: { onChange, value } }) => (
                                    <PeriodToggle value={value} onChange={onChange} />
                                )}
                            />
                        </View>
                    </View>
                    {errors.timeOut && <Text style={globalStyles.errorText}>{errors.timeOut.message}</Text>}
                </View>


                <Pressable style={globalStyles.btnPrimary} onPress={handleSubmit(onSubmit)}>
                    <Text style={globalStyles.btnText}>
                        Submit
                    </Text>
                </Pressable>

                {/* <Pressable style={globalStyles.btnPrimary} onPress={flushData}>
                    <Text style={globalStyles.btnText}>
                        Delete all data
                    </Text>
                </Pressable> */}

            </View>

        </SafeAreaView>
    )
}



export default LogScreen