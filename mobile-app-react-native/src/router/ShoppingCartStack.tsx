/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        component={}
        name="Cart"
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        component={}
        name="Address"
        options={{title: 'Address'}}
      /> */}
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
