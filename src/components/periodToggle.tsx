import { Pressable, Text, View } from "react-native";
import { colors, globalStyles } from "../styles/gloabl_styles";




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


export default PeriodToggle;