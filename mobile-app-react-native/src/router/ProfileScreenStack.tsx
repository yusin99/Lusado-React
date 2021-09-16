/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen/index';
import ProfileTopTabNavigator from './ProfileTopTabNavigator';
import PersonalisationSettingsScreen from './../screens/PersonalisationSettingsScreen/index';
import MyFavouritesScreen from './../screens/MyFavouritesScreen/index';
import BalanceScreen from './../screens/BalanceScreen/index';
import MyOrdersScreen from './../screens/MyOrdersScreen/index';
import BundleDiscountsScreen from './../screens/BundleDiscountsScreen/index';
import InviteFriendsScreen from './../screens/InviteFriendsScreen/index';

const Stack = createStackNavigator();
const ProfileScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProfileScreen}
        name="Profile Screen"
        options={{title: 'Profile Screen'}}
      />
      <Stack.Screen
        component={PersonalisationSettingsScreen}
        name="Personalisation Settings"
        options={{title: 'Personalisation Settings'}}
      />
      <Stack.Screen
        component={MyFavouritesScreen}
        name="My Favourites"
        options={{title: 'My Favourites'}}
      />
      <Stack.Screen
        component={BalanceScreen}
        name="My Balance"
        options={{title: 'My Balance'}}
      />
      <Stack.Screen
        component={MyOrdersScreen}
        name="My Orders"
        options={{title: 'My Orders'}}
      />
      <Stack.Screen
        component={BundleDiscountsScreen}
        name="Bundle Discounts"
        options={{title: 'Bundle Discounts'}}
      />
      <Stack.Screen
        component={InviteFriendsScreen}
        name="Invite Friends"
        options={{title: 'Invite Friends'}}
      />
      <Stack.Screen
        component={ProfileTopTabNavigator}
        name="Single Profile Screen"
        options={{title: 'Single Profile Screen'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreenStack;
