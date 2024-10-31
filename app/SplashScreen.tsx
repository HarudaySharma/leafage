import { ThemedView } from "@/components/ThemedView";
import { Globals } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";


function Splash() {
    const router = useRouter();

    const scaleValue = useRef(new Animated.Value(0.3)) // Set up initial scale value

    useEffect(() => {
        Animated.timing(scaleValue.current, {
            toValue: 1, // Target scale (100% size)
            duration: 2000, // Duration in milliseconds
            useNativeDriver: true,
        }).start();

        const id = setTimeout(() => {
             router.replace('/home')
        }, 2000)

        return () => clearTimeout(id)
    }, [])

    return (
        <ThemedView
            style={styles.root}
        >
            <Animated.Image
                source={require('@/assets/images/leaf.png')}
                style={[styles.leafLogo, { transform: [{ scale: scaleValue.current }] }]}
            />
        </ThemedView>
    );
}

export default Splash;

const styles = StyleSheet.create({
    root: {
        backgroundColor: Globals.backgroundColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    leafLogo: {
        width: 324,
        height: 342,
    }
})
