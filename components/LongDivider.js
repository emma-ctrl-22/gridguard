import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LongDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5%",
        marginBottom:"5%",
        width:"95%"
    },
    line:{
        height:1,
        width:"100%",
        backgroundColor:"#000",
        opacity:0.2
    },
    text:{
        marginHorizontal:"5%",
        fontSize:15,
        fontWeight:"bold",
        color:"#000",
        opacity:0.2
    }
})