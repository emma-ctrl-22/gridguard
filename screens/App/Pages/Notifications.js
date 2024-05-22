import { StyleSheet, Text, View ,SafeAreaView ,FlatList,ScrollView} from 'react-native'
import React from 'react'
import { AntDesign,Entypo } from '@expo/vector-icons';

export default function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
      <AntDesign name="arrowleft" size={24} color="black" marginLeft={15} />
      <Text style={{fontSize:18}}>Notifications</Text>
      <Entypo name="dots-three-vertical" size={24} color="black" marginRight={15} />
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#FBFBFB"
    },
    top:{
        width:"100%",
        height:"8%",
        marginTop:"6%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})