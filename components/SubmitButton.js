import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SubmitButton({ props }) {
    return (
        <TouchableOpacity style={[styles.btn,{width: props.width, height: props.height,backgroundColor: props.bg,borderWidth: props.bW,borderRadius:props.bR }]}>
            <Text style={[styles.the-txt,{color:props.color}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})