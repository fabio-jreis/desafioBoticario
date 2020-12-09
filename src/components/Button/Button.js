import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './Button.style';

export default Button = ({ disabled, onPress, style, styleText, title, fontSize }) => {

    return (
        <TouchableOpacity
            disabled={disabled}
            style={[styles.button, disabled && styles.disabledButton, style]}
            onPress={onPress}>
            <View>
                <Text style={[styles.buttonText, disabled && styles.disabledText, fontSize && { fontSize: fontSize }, styleText]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}