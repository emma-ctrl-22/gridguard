import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Reward from '../Pages/Reward';
import Ionicons from '@expo/vector-icons/Ionicons';
import Social from '../Pages/Social';
import MakePost from '../Pages/MakeReport';
import Profile from '../Pages/Profile';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            label = 'Home';
          } else if (route.name === 'MakePost') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            label = 'Make Post';
          } else if (route.name === 'Rewards') {
            iconName = focused ? 'gift' : 'gift-outline';
            label = 'Rewards';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            label = 'Profile';
          }

          return (
            <View style={{ alignItems: 'center' }}>
              <Ionicons name={iconName} size={size} color={color} />
              <Text style={{ color, fontSize: 12 }}>{label}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MakePost" component={MakePost} />
      <Tab.Screen
        name="MiddleButton"
        component={Social}
        options={{
          tabBarButton: (props) => (
            <MiddleTabButton {...props} />
          ),
        }}
      />
      <Tab.Screen name="Rewards" component={Reward} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const MiddleTabButton = ({ children, onPress, accessibilityState }) => {
  const isSelected = accessibilityState.selected;

  return (
    <TouchableOpacity
      style={{
        top: isSelected ? -20 : 0, // Move the button up when selected
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
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons name="paper-plane-outline" size={34} color="white" />
      </View>
    </TouchableOpacity>
  );
};

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

export default AppTabs;
