/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
// import styles from './style';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
// import {FontAwesome} from 'react-native-vector-icons/FontAwesome';

const Categories = (props: any) => {
  const item = props.item;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Sub Categories', {id: item.id});
  };

  return (
    // <View style={styles.header}>
    <Pressable onPress={onPress}>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          // marginBottom: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#cccccccc',
        }}>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name={item.icon} size={25} color={'#09b1ba'} />
        </View>
        <View style={{flex: 7}}>
          <Text style={{fontSize: 16}}> {item.name}</Text>
        </View>
        <View>
          <AntDesign name="right" size={15} color={'#aaa'} />
          {/* <Feather name="arrow-right" size={20} color={'#aaaaaa'} /> */}
        </View>
      </View>
    </Pressable>
    // </View>
  );
};

export default Categories;
