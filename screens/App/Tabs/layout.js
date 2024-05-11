import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Social from '../Pages/Social';
import Reward from '../Pages/Reward';

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: '10%',
    elevation: 0.1,
    backgroundColor: '#1c3530',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarActiveTintColor: "white"
};

const Tab = createBottomTabNavigator();

const Tabs = ({ colorScheme }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
      tabBarActiveTint
    >
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "25%" }}>
              <Text style={{ color: colorScheme === 'dark' ? 'white' : '#000' }}>
                Social
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "25%" }}>
              <Text style={{ color: colorScheme === 'dark' ? 'white' : '#000' }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={Reward}
        initialRouteName="Channel"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "25%" }}>
              <Text style={{ color: colorScheme === 'dark' ? 'white' : '#000' }}>
                Reward
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
