/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
// import {useState} from 'react';
import ProductItemProps from '../../models/ProductItemProps';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
const ProductItemBump = (props: ProductItemProps) => {
  const item = props.item;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Product Item', {id: item.id});
  };
  // const onPressSettings = () => {
  //   navigation.navigate('Settings', {id: item.id});
  // };

  return (
    <Pressable style={styles.root} onPress={onPress}>
      {/* Avatar Image */}
      <View>
        <View>
          <Image
            style={styles.avatarImage}
            source={{
              uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
            }}
          />
        </View>
        {/* Product Image */}
        <View>
          <Image
            style={styles.img}
            source={{
              uri: item.photos[0].url,
            }}
          />
        </View>
        {/* Down Image Details*/}
        <View style={styles.productLastRow}>
          <View>
            <Text style={styles.price}>
              {item.price_without_shipping_costs}€
            </Text>
            <Text style={styles.brand}>{item.brand.name}</Text>
          </View>
          <View>
            <Pressable>
              {/* <Entypo name="heart-outlined" size={20} color={'grey'} /> */}
            </Pressable>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderColor: '#09b1ba',
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            padding: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text>Bump</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default ProductItemBump;
