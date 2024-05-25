import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import initialNotificationsData from './notificationData.json';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';

export default function Notifications() {
    const navigation = useNavigation();
    const [notificationsData, setNotificationsData] = useState(initialNotificationsData);

    const NavBack = () => {
        navigation.goBack();
    }

    const handleDelete = (index) => {
        const updatedNotifications = [...notificationsData];
        updatedNotifications.splice(index, 1);
        setNotificationsData(updatedNotifications);
    }

    const renderRightActions = (index) => {
        return (
            <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteContainer}>
                <FontAwesome5 name="trash" size={24} color="black" />
            </TouchableOpacity>
        );
    }

    const renderItem = ({ item, index }) => {
        return (
            <Swipeable renderRightActions={() => renderRightActions(index)}>
                <View style={styles.notification}>
                    <Text style={styles.notificationTitle}>{item.title}</Text>
                    <Text style={styles.notificationMessage}>{item.message}</Text>
                    <Text style={styles.notificationTime}>{item.time}</Text>
                </View>
            </Swipeable>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <AntDesign name="arrowleft" size={24} color="black" marginLeft={15} onPress={NavBack} />
                <Text style={{ fontSize: 18 }}>Notifications</Text>
                <Entypo name="dots-three-vertical" size={24} color="black" marginRight={15} />
            </View>
            <View style={styles.details}>
                <Text style={{ fontWeight: "bold" }}>
                    {notificationsData.length} New notifications
                </Text>
                <Pressable>
                    <Text style={{ color: "#02B2DD" }}>
                        Mark all as read
                    </Text>
                </Pressable>
            </View>
            <FlatList
                data={notificationsData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F8F8F8"
    },
    top: {
        width: "100%",
        height: "8%",
        marginTop: "6%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    notification: {
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: "2%",
        borderRadius: 15
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    notificationMessage: {
        fontSize: 14,
        color: '#666'
    },
    notificationTime: {
        fontSize: 12,
        color: '#02B2DD',
        alignSelf: "flex-end"
    },
    details: {
        width: "95%",
        height: 40,
        display: "flex",
        flexDirection: "row",
        padding: "2%",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1%"
    },
    deleteContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: '90%',
        borderRadius: 2
    },
    deleteText: {
        color: 'white',
    }
});
