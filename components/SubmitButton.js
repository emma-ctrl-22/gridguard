import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function SubmitButton({ text, width, height, bg, bW, bR, color,onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: width, height: height }}>
            <LinearGradient
                colors={['#02B2DD', '#12D2C7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.btn, { borderRadius: bR, borderWidth: bW, height: '100%', width: '100%' }]}
            >
                <Text style={[styles.theTxt, { color: color }]}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"5%"
    },
    theTxt: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
