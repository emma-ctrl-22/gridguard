import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import React from 'react'

export default function GoogleBtn({onPress,title}) {
  return (
    <TouchableOpacity style={styles.btn}>
        <Image source={require('../assets/GoogleIcon.png')} style={styles.Glogo}/> 
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn:{
        width:"82%",
        height:50,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        border:"#000",
        borderRadius:5,
        marginTop:"4%"
    },
    Glogo:{
        width:25,
        height:25,
    }
})