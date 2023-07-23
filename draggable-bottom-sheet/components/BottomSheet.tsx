import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useSharedValue } from 'react-native-reanimated'

const {height: SCREENHEIGHT} = Dimensions.get('window');

const BottomSheet = () => {
    const translateY = useSharedValue(0)
    
    const gesture = Gesture.Pan().onUpdate((event) => {
        const translateY = event.translationY
    });


    return(
    <GestureDetector gesture={gesture} >
        <Animated.View style={styles.bottomSheetContainer}>
            <View style={styles.line}/>
        </Animated.View>
    </GestureDetector>
    );
};

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: 500,
        width: '100%',
        backgroundColor: 'gray',
        position: 'absolute',
        top: SCREENHEIGHT / 1.2
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: '15',
        borderRadius: 2,
    },
});

export default BottomSheet;