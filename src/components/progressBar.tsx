import { StyleSheet, View } from 'react-native';

export default function ProgressBar({ progress = 0, color = '#4CAF50' }) {
    // progress = 0 to 100
    return (
        <View style={styles.container}>
            <View style={[styles.fill, { width: `${progress}%`, backgroundColor: color }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        width: '100%',
    },
    fill: {
        height: '100%',
        borderRadius: 5,
    },
});