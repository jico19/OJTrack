import { fetchAllEntry, logEntry } from '@/src/db/services';
import { colors, globalStyles } from '@/src/styles/gloabl_styles';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

interface LogFormData {
    timeIn: string;
    timeInPeriod: 'AM' | 'PM';
    timeOut: string;
    timeOutPeriod: 'AM' | 'PM';
}

const PeriodToggle = ({ value, onChange }: { value: 'AM' | 'PM', onChange: (val: 'AM' | 'PM') => void }) => (
    <View style={[globalStyles.row, { borderWidth: 1, borderColor: colors.border, borderRadius: 8, overflow: 'hidden', height: 48 }]}>
        <Pressable
            onPress={() => onChange('AM')}
            style={{
                flex: 1,
                height: '100%',
                backgroundColor: value === 'AM' ? colors.primary : 'transparent',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{ color: value === 'AM' ? '#fff' : colors.text, fontWeight: '600' }}>AM</Text>
        </Pressable>
        <View style={{ width: 1, backgroundColor: colors.border, height: '100%' }} />
        <Pressable
            onPress={() => onChange('PM')}
            style={{
                flex: 1,
                height: '100%',
                backgroundColor: value === 'PM' ? colors.primary : 'transparent',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{ color: value === 'PM' ? '#fff' : colors.text, fontWeight: '600' }}>PM</Text>
        </Pressable>
    </View>
);

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
                    <Text style={{ color: "#fff", fontWeight: 'black' }}>
                        Submit
                    </Text>
                </Pressable>

            </View>

        </SafeAreaView>
    )
}



export default LogScreen