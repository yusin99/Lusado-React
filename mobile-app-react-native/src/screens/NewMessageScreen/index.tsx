/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native';

const NewMessageScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
      }}>
      <View style={{paddingHorizontal: 15, flex: 1}}>
        <Text style={{fontSize: 18}}>To:</Text>
      </View>
      <View
        style={{borderBottomWidth: 1, borderBottomColor: '#cccccccc', flex: 8}}>
        <TextInput placeholder="Select a member" />
      </View>
    </View>
  );
};

export default NewMessageScreen;
