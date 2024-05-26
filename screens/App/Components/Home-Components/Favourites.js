import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import LongDivider from '../../../../components/LongDivider';

export default function Favourites() {
  return (
    <View style={styles.statusContainer}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusTitle}>View Power & Water Status</Text>
            <Text style={styles.statusSubtitle}>Get updates for your set locations</Text>
          </View>
          <View style={styles.locations}>
            <TouchableOpacity style={styles.location}>
              <TouchableOpacity style={{ backgroundColor: "#e0f2fa", width: 50, height: 50, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="home-outline" size={24} color="black" />
              </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Home</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.location}>
              <TouchableOpacity style={{ backgroundColor: "#e0f2fa", width: 50, height: 50, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="briefcase-outline" size={24} color="black" />
              </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Work</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.location}>
              <TouchableOpacity style={{ backgroundColor: "#e0f2fa", width: 50, height: 50, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="barbell-outline" size={24} color="black" />
              </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Gym</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.location}>
              <TouchableOpacity style={{ backgroundColor: "#e0f2fa", width: 50, height: 50, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="school-outline" size={24} color="black" />
              </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>School</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <LongDivider />
            <TouchableOpacity style={styles.addLocation}>

              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Add a Location</Text>
                <Text style={styles.noLocation}>Add a favorite location for updates</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: "#e0f2fa", width: 50, height: 50, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="add-outline" size={24} color="black" />
              </TouchableOpacity >
            </TouchableOpacity>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    statusContainer: {
        marginHorizontal: 20,
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
        width:'95%'
      },
      statusHeader: {
        marginBottom: 20,
      },
      statusTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: "#02B2DD"
      },
      statusSubtitle: {
        color: '#666',
      },
      locations: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      location: {
        width: '48%',
        marginBottom: 0,
        alignItems: 'center',
paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        //margin:2
      },
      locationTextContainer: {
        marginLeft: 7
      },
      locationText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500'
      },
      noLocation: {
        color: '#888',
      },
      addLocation: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 1,
        borderRadius: 10,
    
        display: "flex",
        flexDirection: "row",
      },
      addLocationText: {
        color: 'dodgerblue',
        fontWeight: 'bold',
      },
})