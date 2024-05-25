import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LongDivider from '../../../components/LongDivider';
import Favourites from '../Components/Home-Components/Favourites';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '10%',justifyContent:"center",alignItems:"center" }}>
        <Favourites/>
        <View style={styles.trendingheader}>
          <Text style={styles.trendheadmain}>Hot Trending Issues</Text>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trendingContainer}>

          <View style={styles.trendingItem}>
            <Text style={styles.trendingText}>1</Text>
            <View style={styles.trendlocation}>
              <Text style={{ color: "#02B2DD", fontSize: 20, }} >#</Text>
              <Text style={styles.trendingText}>Ashiaman - Wahala</Text>
            </View>
            <Text style={styles.trendingComments}>2.1K comments</Text>
            <TouchableOpacity style={styles.availableviewbtn}>
              <Text style={styles.availablebtn}>View</Text>
            </TouchableOpacity>
          </View>
          <LongDivider />
          <View style={styles.trendingItem}>
            <Text style={styles.trendingText}>2</Text>
            <View style={styles.trendlocation}>
              <Text style={{ color: "#02B2DD", fontSize: 20, }} >#</Text>
              <Text style={styles.trendingText}>Kasoa - Wahala</Text>
            </View>
            <Text style={styles.trendingComments}>0.5K comments</Text>
            <TouchableOpacity style={styles.availableviewbtn}>
              <Text style={styles.availablebtn}>View</Text>
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity style={styles.outageMapButton}>
          <Text style={styles.outageMapText}>View Outage Map</Text>
          <Ionicons name="arrow-forward-outline" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.trendingheader}>
          <Text style={styles.trendheadmain}>Outage Report History</Text>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trendingContainer}>
          <Text style={{ fontSize: 15, marginBottom: 13 }}>Reports from the last 12 hours</Text>
          <View style={styles.trendingItem}>
            <TouchableOpacity style={styles.Usercont}>
              <Text style={styles.nametxt}>JB</Text>
            </TouchableOpacity>
            <View style={styles.locptionTextContainer}>
              <Text style={styles.locationText}>Accra - Central</Text>
              <Text style={styles.noLocation}>2 hours ago</Text>
            </View>
            <View  >
              <Text >Type</Text>
              <Ionicons name="water" size={24} color="#02B2DD" />
            </View>
            <View style={styles.type}>
              <Text >Status</Text>
              <TouchableOpacity style={styles.absentviewbtn}>
                <Text style={styles.absentbtn}>Absent</Text>
              </TouchableOpacity>
            </View>
          </View>
          <LongDivider />
          <View style={styles.trendingItem}>
            <TouchableOpacity style={styles.Usercont}>
              <Text style={styles.nametxt}>LK</Text>
            </TouchableOpacity>
            <View style={styles.locptionTextContainer}>
              <Text style={styles.locationText}>Tema - Newtown</Text>
              <Text style={styles.noLocation}>7 hours ago</Text>
            </View>
            <View  >
              <Text >Type</Text>
              <Ionicons name="flash" size={24} color="#02B2DD" />
            </View>
            <View style={styles.type}>
              <Text >Status</Text>
              <TouchableOpacity style={styles.availableviewbtn}>
                <Text style={styles.availablebtn}>Available</Text>
              </TouchableOpacity>
            </View>
          </View>
          <LongDivider />
          <View style={styles.trendingItem}>
            <TouchableOpacity style={styles.Usercont}>
              <Text style={styles.nametxt}>TF</Text>
            </TouchableOpacity>
            <View style={styles.locptionTextContainer}>
              <Text style={styles.locationText}>Zenu - Lebanon</Text>
              <Text style={styles.noLocation}>8 hours ago</Text>
            </View>
            <View  >
              <Text >Type</Text>
              <Ionicons name="water" size={24} color="#02B2DD" />
            </View>
            <View style={styles.type}>
              <Text >Status</Text>
              <TouchableOpacity style={styles.absentviewbtn}>
                <Text style={styles.absentbtn}>Absent</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf6fb",
    
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    color: "#c0c0c0",
  },
  username: {
    fontSize: 18,
  },
  trendingheader: {
    flexDirection: 'row',
    display: "flex",
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 10

  },
  type: {
    alignItems: 'center'
  },
 
  trendingContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trendingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: "center",
    alignContent: 'center'

  },
  trendlocation: {
    flexDirection: 'row',

    justifyContent: "center", alignItems: "center"

  },
  reportlocation: {


    justifyContent: "center", alignItems: "center"

  },
  trendingText: {
    fontSize: 15,
  },
  trendingText: {
    fontSize: 15,
  },
  trendingComments: {
    color: '#888',
  },
  viewMoreButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  trendheadmain: {
    fontSize: 20
  },
  viewMoreText: {

    fontWeight: 'bold',
  },
  outageMapButton: {
    marginHorizontal: 0,
    width: '50%',
    alignSelf: 'center',

    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#02B2DD',
    justifyContent: 'space-between',
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
  },

  availableviewbtn: {


    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#e0f2fa',
    alignItems: 'center',
  },
  absentviewbtn: {


    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#DD0202',
    alignItems: 'center',
  },
  Usercont: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#02B2DD',
    alignItems: 'center',
  },
  outageMapText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  availablebtn: {
    color: '#02B2DD',
    fontWeight: '500',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  absentbtn: {
    color: '#FF3D00',
    fontWeight: '500',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nametxt: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 20,
  },
});
