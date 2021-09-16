/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const SubCategoryList = (props: any) => {
  const item = props.item;
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default SubCategoryList;
