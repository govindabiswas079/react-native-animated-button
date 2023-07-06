import React, { useRef } from 'react'
import { Animated, Pressable, Text } from 'react-native';

interface PropType {
    isDisabled: boolean,
    buttonDisabledStyles: object,
    buttonStyles: object,
    buttonTextStyles: object,
    buttonDisabledTextStyles: object,
    delayLongPress: number,
    onLongPress: () => void,
    onHoverIn: () => void,
    onHoverOut: () => void,
    pressRetentionOffset: object,
    onPress: () => void,
    title: string,
};

const AnimatedButton = ({ isDisabled, buttonDisabledStyles, buttonStyles, buttonTextStyles, buttonDisabledTextStyles, delayLongPress, onLongPress, onHoverIn, onHoverOut, pressRetentionOffset, onPress, title, }: PropType) => {
    const animation = useRef(new Animated.Value(0))?.current;
    const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.9] })

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    }

    const onPressOut = () => {
        setTimeout(() => {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true
            }).start();
        }, 0)
    };

    return (
        <Animated.View style={{ transform: [{ scale }] }}>
            <Pressable
                style={isDisabled ? buttonDisabledStyles : buttonStyles}
                onPressIn={() => { onPressIn() }}
                onPressOut={() => { onPressOut() }}
                onPress={() => onPress()}
                disabled={isDisabled}
                delayLongPress={delayLongPress}
                onLongPress={() => onLongPress()}
                onHoverIn={() => onHoverIn()}
                onHoverOut={() => onHoverOut()}
                pressRetentionOffset={pressRetentionOffset}
            >
                <Text style={isDisabled ? buttonDisabledTextStyles : buttonTextStyles}>{title}</Text>
            </Pressable>
        </Animated.View>
    )
}


AnimatedButton.defaultProps = {
    isDisabled: false,
    buttonDisabledStyles: { alignItems: 'center', justifyContent: 'center', paddingVertical: 15, borderRadius: 8, backgroundColor: '#808080cf', },
    buttonStyles: { borderRadius: 8, backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center', paddingVertical: 15 },
    buttonTextStyles: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
    buttonDisabledTextStyles: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
    delayLongPress: 500,
    onLongPress: () => { },
    onHoverIn: () => { },
    onHoverOut: () => { },
    pressRetentionOffset: { bottom: 30, left: 20, right: 20, top: 20 },
    onPress: () => { },
    title: 'Button',
};

export default AnimatedButton