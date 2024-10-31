import { ThemedText } from '@/components/ThemedText'
import { Globals } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home() {
    return (
        <SafeAreaView style={styles.root}>
            <ThemedText>HOME</ThemedText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Globals.backgroundColor,
    }
})
export default Home;



