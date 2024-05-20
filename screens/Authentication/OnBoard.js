import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import BigLogo from '../../assets/Logo.svg';

export default function OnBoard() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.LogoGroup}>
                <BigLogo style={styles.logo} />
                <View style={styles.TextContainer}>
                    <Text style={{ fontSize: 20, color: '#04B5DF',fontWeight:"200" }}>Your Guard,</Text>
                    <Text style={{ fontSize: 20, color: '#000', textAlign: 'center',fontWeight:"200" }}>  On Grids </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    LogoGroup: {
        height: 250,
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    TextContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop:"5%"
    },
})