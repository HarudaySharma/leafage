import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

export default function CameraScreen() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <ThemedView />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <ThemedView>
                <ThemedText>We need your permission to show the camera</ThemedText>
                <Button onPress={requestPermission} title="grant permission" />
            </ThemedView>
        );
    }

    function toggleCameraFacing() {
        if (cameraRef.current) {
            cameraRef.current.resumePreview().then(() => console.log("resumed"))
        }
        console.log("toggling")
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <ThemedView>
            <CameraView ref={cameraRef} enableTorch={true} style={styles.camera} facing={facing}>

                <ThemedView >
                    <TouchableOpacity onPress={toggleCameraFacing}>
                        <ThemedText>Flip Camera</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </CameraView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
