import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated ,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Reward from './Reward';
import Ionicons from '@expo/vector-icons/Ionicons';
import Social from '../Pages/Social';
import MakePost from './MakeReport';
import Profile from './Profile';
import Logo from '../../../assets/GridGuard-Logo.svg';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const navigation = useNavigation();
  const navToNotification = () => {
    navigation.navigate('Notification');
  };
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
            label = 'Post';
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
      <Tab.Screen name="Home" component={Home}
        options={{
          headerTransparent: false,
          headerLeft: () => (
            <View style={{ marginLeft: "10%" }}>
              <Logo width={60} height={60} />
            </View>
          ),
          headerTitle: () => (
            <View style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
              <Text style={{ color: "#c0c0c0" }}>
                Welcome Back
              </Text>
              <Text style={{ fontSize: 18 }}>
                James Brown
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={navToNotification} style={{ marginRight: 20, backgroundColor: "#e0f2fa", width: 50, height: 50, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FCFCFC',
            height: 100,
          },
          headerTitleStyle: {
            fontSize: 15,
            color: '#333',
          },
          headerRightContainerStyle: {
            marginLeft: "2%"
          }
        }}
      />
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
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animation, {
      toValue: isSelected ? -25 : 0,
      useNativeDriver: true,
    }).start();
  }, [isSelected]);

  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
        transform: [{ translateY: animation }],
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={['#02B2DD', '#12D2C7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.middleButton}
      >
        <Ionicons name="paper-plane-outline" size={34} color="white" />
      </LinearGradient>
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
  middleButton: {
    width: 55,
    height: 55,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppTabs;
