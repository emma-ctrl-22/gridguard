import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import notificationsData from './notification.json';

export default function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <AntDesign name="arrowleft" size={24} color="black" marginLeft={15} />
        <Text style={{ fontSize: 18 }}>Notifications</Text>
        <Entypo name="dots-three-vertical" size={24} color="black" marginRight={15} />
      </View>
      <FlatList
        data={notificationsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTime}>{item.time}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FBFBFB"
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
    backgroundColor:"#fff",
    marginBottom:"2%",
    borderRadius:15
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
    alignSelf:"flex-end"
  }
});
