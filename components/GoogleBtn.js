import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GoogleLogo from '../assets/GoogleIcon.svg'

export default function GoogleBtn({ onPress, title }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <GoogleLogo/>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 325,
        maxHeight:325,
        height: 50,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderRadius: 5,
        marginTop: "4%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        borderWidth: 1,
        gap: 10,
    },
    Glogo: {
        width: 25,
        height: 25,
    }
})