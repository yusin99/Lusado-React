/* eslint-disable prettier/prettier */
import React from 'react';
// import {View, Text, Pressable} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import Messages from '../screens/Messages/index';
import Notifications from '../screens/Notifications/index';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InboxStack from './InboxStack';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
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
        name="Messages"
        component={InboxStack}
        options={{tabBarLabel: 'Messages'}}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{tabBarLabel: 'Notifications'}}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
