/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const ReviewsScreen = () => {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          color: '#99999999',
          fontSize: 18,
          textAlign: 'center',
          paddingVertical: 20,
        }}>
        No reviews yet
      </Text>
    </View>
  );
};

export default ReviewsScreen;
