/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import ShoppingCartScreen from './../screens/ShoppingCartScreen/index';
// import ShoppingCartStack from './ShoppingCartStack';
// import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './homeStack';
// import SearchScreen from './../screens/SearchScreen/index';
// import SellScreen from '../screens/SellScreen/index';
// import InboxScreen from './../screens/InboxScreen/index';
import SearchScreenStack from './SearchScreenStack';
import TopTabNavigator from './TopTabNavigator';
import ProfileScreenStack from './ProfileScreenStack';
import SellScreenStack from './SellScreenStack';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        inactiveTintColor: 'grey',
        activeTintColor: '#41C3CB',
      }}>
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({color}: any) => (
            <Ionicons name="home-outline" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        component={SearchScreenStack}
        name="Search"
        options={{
          tabBarIcon: ({color}: any) => (
            <Feather name="search" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={SellScreenStack}
        name="Sell"
        options={{
          tabBarIcon: ({color}: any) => (
            <Feather name="plus-circle" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={TopTabNavigator}
        name="Inbox"
        options={{
          tabBarIcon: ({color}: any) => (
            <Feather name="inbox" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileScreenStack}
        name="Profile"
        options={{
          tabBarIcon: ({color}: any) => (
            <Feather name="user" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
