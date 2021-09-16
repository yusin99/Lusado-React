/* eslint-disable prettier/prettier */
import React from 'react';
// import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Messages from '../screens/Messages/index';
import ChatScreen from '../screens/ChatScreen/index';
import NewMessageScreen from '../screens/NewMessageScreen/index';

const Stack = createStackNavigator();
const InboxStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Inbox Screen">{() => <Messages />}</Stack.Screen>
      <Stack.Screen
        component={ChatScreen}
        name="Chat Screen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={NewMessageScreen}
        name="New Message Screen"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default InboxStack;
