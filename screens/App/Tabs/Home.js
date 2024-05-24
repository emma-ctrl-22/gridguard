import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LongDivider from '../../../components/LongDivider';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '2%' }}>
      
        <View style={styles.statusContainer}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusTitle}>View Power & Water Status</Text>
            <Text style={styles.statusSubtitle}>Get updates for your set locations</Text>
          </View>
          <View style={styles.locations}>
            <TouchableOpacity style={styles.location}>
            <TouchableOpacity  style={{backgroundColor:"#e0f2fa",width:50,height:50,borderRadius:7,justifyContent:"center",alignItems:"center" }}>
              <Ionicons name="home-outline" size={24} color="black" />
            </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Home</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.location}>
            <TouchableOpacity  style={{backgroundColor:"#e0f2fa",width:50,height:50,borderRadius:7,justifyContent:"center",alignItems:"center" }}>
              <Ionicons name="briefcase-outline" size={24} color="black" />
            </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Work</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.location}>
            <TouchableOpacity  style={{backgroundColor:"#e0f2fa",width:50,height:50,borderRadius:7,justifyContent:"center",alignItems:"center" }}>
              <Ionicons name="barbell-outline" size={24} color="black" />
            </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Gym</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.location}>
            <TouchableOpacity  style={{backgroundColor:"#e0f2fa",width:50,height:50,borderRadius:7,justifyContent:"center",alignItems:"center" }}>
              <Ionicons name="school-outline" size={24} color="black" />
            </TouchableOpacity >
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>School</Text>
                <Text style={styles.noLocation}>No set location</Text>
              </View>
            </TouchableOpacity>
            <LongDivider/>
            <TouchableOpacity style={styles.addLocation}>
           
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Add a Location</Text>
                <Text style={styles.noLocation}>Add a favorite location for updates</Text>
              </View>
              <TouchableOpacity  style={{backgroundColor:"#e0f2fa",width:50,height:50,borderRadius:50,justifyContent:"center",alignItems:"center" }}>
              <Ionicons name="add-outline" size={24} color="black" />
            </TouchableOpacity >
            </TouchableOpacity>
          </View>
        </View>
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
                <Text style={{color:"#02B2DD",fontSize:20,}} >#</Text>
                <Text style={styles.trendingText}>Ashiaman - Wahala</Text>
              </View>
            <Text style={styles.trendingComments}>2.1K comments</Text>
            <TouchableOpacity style={styles.availableviewbtn}>
          <Text style={styles.availablebtn}>View</Text>
        </TouchableOpacity>
          </View>
         <LongDivider/>
         <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>2</Text>
          <View style={styles.trendlocation}>
                <Text style={{color:"#02B2DD",fontSize:20,}} >#</Text>
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
       <Text  style={{fontSize:15,marginBottom:13 }}>Reports from the last 12 hours</Text>
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
      <LongDivider/>
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
       <LongDivider/>
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
  trendingheader:{
    flexDirection: 'row',
    display: "flex",
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width:'85%',
    marginTop:10

  },
  statusContainer: {
    marginHorizontal: 20,
    padding: 20,
    marginTop:70,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  statusHeader: {
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color:"#02B2DD"
  },
  type:{
  alignItems:'center'
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
  },
  locationTextContainer: {
  
    marginLeft:7
  },
  locationText: {
    marginTop: 10,
    fontSize:16,
    fontWeight:'500'
  },
  noLocation: {
    color: '#888',
  },
  addLocation: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 1,
    borderRadius: 10,

    display: "flex",
    flexDirection: "row",
  },
  addLocationText: {
    color: 'dodgerblue',
    fontWeight: 'bold',
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
    alignItems:"center" ,
    alignContent:'center'
   
  },
  trendlocation: {
    flexDirection: 'row',
    
    justifyContent:"center",alignItems:"center" 
    
  },
  reportlocation: {

    
    justifyContent:"center",alignItems:"center" 
    
  },
  trendingText: {
    fontSize:15,
  },
  trendingText: {
    fontSize:15,
  },
  trendingComments: {
    color: '#888',
  },
  viewMoreButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  trendheadmain:{
    fontSize:20
  },
  viewMoreText: {

    fontWeight: 'bold',
  },           
  outageMapButton: {
    marginHorizontal: 0,
    width:'50%',
    alignSelf:'center',
    
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
    height:40,
    width:40,
    alignItems: 'center',
    justifyContent:'center',
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
  availablebtn:  {
    color: '#02B2DD',
    fontWeight: '500',
    fontSize: 16,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf: 'center',
  },
  absentbtn:  {
    color: '#FF3D00',
    fontWeight: '500',
    fontSize: 16,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf: 'center',
  },
  nametxt :  {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 20,
  },
});
