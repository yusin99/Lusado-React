/* eslint-disable prettier/prettier */
import React from 'react';
// import {View, Text, Pressable} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import Messages from '../screens/Messages/index';
import Notifications from '../screens/Notifications/index';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InboxStack from './InboxStack';
import ProfileScreenStack from './ProfileScreenStack';
import ReviewsScreen from '../screens/ReviewsScreen/index';
import AboutScreen from '../screens/AboutScreen/index';
import SingleProfileScreen from '../screens/SingleProfileScreen/index';

const Tab = createMaterialTopTabNavigator();

const ProfileTopTabNavigator = () => {
  const inset = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Messages"
      tabBarOptions={{
        activeTintColor: '#09b1ba',
        inactiveTintColor: 'black',
        style: {marginTop: inset.top},
        indicatorStyle: {
          backgroundColor: '#09b1ba',
        },
      }}>
      <Tab.Screen
        name="Wardrobe"
        component={SingleProfileScreen}
        options={{tabBarLabel: 'Wardrobe'}}
      />
      <Tab.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{tabBarLabel: 'Reviews'}}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{tabBarLabel: 'About'}}
      />
    </Tab.Navigator>
  );
};

export default ProfileTopTabNavigator;
