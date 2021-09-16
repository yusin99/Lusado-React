/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const MyOrdersScreen = () => {
  return (
    <View>
      <View>
        <View style={styles.root}>
          <Image
            source={{
              uri: 'https://img01.ztat.net/article/spp-media-p1/bd1ee8193c963634b1d8bf1bb54aab70/f84d974809fc43a49543275eb9564532.jpg?imwidth=762&filter=packshot',
            }}
            style={styles.imageProduct}
          />
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.itemTitle}>Tommy Hilfiger Cap</Text>
            <Text style={{color: '#999999'}}>pending!</Text>
            <Text style={{color: '#999999'}}>14/06/2021</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text> 17,41 $</Text>

            <FontAwesome5
              name="clock"
              size={20}
              color={'orange'}
              style={{paddingTop: 20}}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.root}>
          <Image
            source={{
              uri: 'https://img01.ztat.net/article/spp-media-p1/bd1ee8193c963634b1d8bf1bb54aab70/f84d974809fc43a49543275eb9564532.jpg?imwidth=762&filter=packshot',
            }}
            style={styles.imageProduct}
          />
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.itemTitle}>Tommy Hilfiger Cap</Text>
            <Text style={{color: '#999999'}}>pending!</Text>
            <Text style={{color: '#999999'}}>14/06/2021</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text> 17,41 $</Text>
            <FontAwesome5
              name="clock"
              size={20}
              color={'orange'}
              style={{paddingTop: 20}}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.root}>
          <Image
            source={{
              uri: 'https://img01.ztat.net/article/spp-media-p1/bd1ee8193c963634b1d8bf1bb54aab70/f84d974809fc43a49543275eb9564532.jpg?imwidth=762&filter=packshot',
            }}
            style={styles.imageProduct}
          />
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.itemTitle}>Tommy Hilfiger Cap</Text>
            <Text style={{color: '#999999'}}>pending!</Text>
            <Text style={{color: '#999999'}}>14/06/2021</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text> 17,41 $</Text>
            <FontAwesome5
              name="clock"
              size={20}
              color={'orange'}
              style={{paddingTop: 20}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyOrdersScreen;
