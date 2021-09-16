/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SellScreen from './../screens/SellScreen/index';
import ChooseCategoryScreen from './../screens/ChooseCategoryScreen/index';
import ChooseBrandScreen from './../screens/ChooseBrandScreen/index';
import ChooseStateScreen from './../screens/ChooseStateScreen/index';
const Stack = createStackNavigator();
const SellScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Sell Screen">{() => <SellScreen />}</Stack.Screen>
      <Stack.Screen
        component={ChooseCategoryScreen}
        name="Choose Category"
        options={{headerShown: true}}
      />
      <Stack.Screen
        component={ChooseBrandScreen}
        name="Choose Brand"
        options={{headerShown: true}}
      />
      <Stack.Screen
        component={ChooseStateScreen}
        name="Choose State"
        options={{headerShown: true}}
      />
      {/* <Stack.Screen
        component={NewMessageScreen}
        name="New Message Screen"
        options={{headerShown: true}}
      /> */}
    </Stack.Navigator>
  );
};

export default SellScreenStack;
