// AppTabs.js
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Intro from '../screens/Authentication/Intro';
import Home from '../screens/App/Pages/Home';
import Reward from '../screens/App/Pages/Home';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Social from '../screens/App/Pages/Social';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused,color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'MakePost') {
        iconName = focused ? 'plus' : 'add-circle-outline';
      } else if (route.name === 'Rewards') {
        iconName = focused ? 'gift' : 'gift-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'dodgerblue',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 60,
      borderTopWidth: 0,
      elevation: 0,
      backgroundColor: '#ffffff',
    },
  })}
>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MakePost" component={Intro} />
      <Tab.Screen
        name="MiddleButton"
        component={Home}
        options={{
          tabBarButton: (props) => (
            <MiddleTabButton {...props} />
          ),
        }}
      />
      <Tab.Screen name="Rewards" component={Reward} />
      <Tab.Screen name="Profile" component={Social} />
    </Tab.Navigator>
  );
};
const MiddleTabButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
  
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#04B5DF',
        justifyContent: 'center', // Center the icon vertically
        alignItems: 'center', // Center the icon horizontally
      }}
    >
      <Text> {/* Wrap the Ionicons component with Text */}
      <EvilIcons name="sc-telegram" size={34} color="white" />
      </Text>
    </View>
  </TouchableOpacity>
);

export default AppTabs;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
