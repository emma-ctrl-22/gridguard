import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LongDivider from '../../../components/LongDivider';
import Favourites from '../Components/Home-Components/Favourites';

const trendingIssues = [
  { id: 1, hashtag: 'Ashiaman - Wahala', comments: '0.5K comments' },
  { id: 2, hashtag: 'Kasoa - Wahala', comments: '2.1K comments' },
];
const reportData = [
  { id: '1', initials: 'JB', location: 'Accra - Central', time: '2 hours ago', type: 'water', status: 'Absent' },
  { id: '2', initials: 'LK', location: 'Tema - Newtown', time: '7 hours ago', type: 'flash', status: 'Available' },
  { id: '3', initials: 'TF', location: 'Zenu - Lebanon', time: '8 hours ago', type: 'water', status: 'Absent' },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '10%', justifyContent: "center", alignItems: "center" }}>
        <Favourites />

        <View style={styles.trendingheader}>
          <Text style={styles.trendheadmain}>Hot Trending Issues</Text>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trendingContainer}>
          {trendingIssues.map((issue, index) => (
            <React.Fragment key={issue.id}>
              <View style={styles.trendingItem}>
                <Text style={styles.trendingText}>{issue.id}</Text>
                <View style={styles.trendlocation}>
                  <Text style={{ color: "#02B2DD", fontSize: 20 }}>#</Text>
                  <Text style={styles.trendingText}>{issue.hashtag}</Text>
                </View>
                <Text style={styles.trendingComments}>{issue.comments}</Text>
                <TouchableOpacity style={styles.availableviewbtn}>
                  <Text style={styles.availablebtn}>View</Text>
                </TouchableOpacity>
              </View>
              {index < trendingIssues.length - 1 && <LongDivider />}
            </React.Fragment>
          ))}
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
          {reportData.map(report => (
            <View key={report.id} style={styles.trendingItem}>
              <TouchableOpacity style={styles.Usercont}>
                <Text style={styles.nametxt}>{report.initials}</Text>
              </TouchableOpacity>
              <View style={styles.locptionTextContainer}>
                <Text style={styles.locationText}>{report.location}</Text>
                <Text style={styles.noLocation}>{report.time}</Text>
              </View>
              <View>
                <Text>Type</Text>
                <Ionicons name={report.type === 'water' ? 'water' : 'flash'} size={24} color="#02B2DD" />
              </View>
              <View style={styles.type}>
                <Text>Status</Text>
                <TouchableOpacity style={report.status === 'Absent' ? styles.absentviewbtn : styles.availableviewbtn}>
                  <Text style={report.status === 'Absent' ? styles.absentbtn : styles.availablebtn}>{report.status}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
    width:"95%",
    marginBottom:"12%"
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
    backgroundColor: '#fad9d9',
    alignItems: 'center',
    width:65
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
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  absentbtn: {
    color: '#FF3D00',
    fontWeight: '500',
    fontSize: 13,
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
