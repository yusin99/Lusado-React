/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import styles from './styles';
import {Alert} from 'react-native';
import {TextInput} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import ProductItemProps from '../../models/ProductItemProps';
// import  from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import Buttons from '../../components/Buttons/index';
import {ScrollView} from 'react-native-gesture-handler';
// import axios from 'axios';
import {Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';

const SellScreen = () => {
  // const urlCat = 'http://192.168.1.92:8000/api/category/';
  // const urlBrand = 'http://192.168.1.92:8000/api/brand/';
  // const urlState = 'http://192.168.1.92:8000/api/state/';
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = useState(false);
  const [uri, setUri] = useState();
  const goToSelectCategory = () => {
    navigation.navigate('Choose Category');
  };
  const goToSelectBrand = () => {
    navigation.navigate('Choose Brand');
  };
  const goToSelectState = () => {
    navigation.navigate('Choose State');
  };
  const route = useRoute();
  const checkBox = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  // const [isLoading, setLoading] = useState(true);
  // const [categories, setCategories] = useState<ProductItemProps | undefined>();
  // const [brand, setBrand] = useState();
  // const [state, setState] = useState();
  // const [selectedOption, setSelectedOption] = useState('');
  // const [selectedBrand, setSelectedBrand] = useState('');
  // const [selectedState, setSelectedState] = useState('');

  // const getData = () => {
  //   const allCategories = axios.get(urlCat);
  //   const allBrands = axios.get(urlBrand);
  //   const allStates = axios.get(urlState);
  //   axios
  //     .all([allCategories, allBrands, allStates])
  //     .then(
  //       axios.spread((...allData) => {
  //         const catData = allData[0].data;
  //         const brData = allData[1].data;
  //         const stData = allData[2].data;
  //         // console.log(catData);
  //         // console.log(brData);
  //         setCategories(catData);
  //         setBrand(brData);
  //         setState(stData);
  //         // console.log(state);
  //       }),
  //     )
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  //   // fetch(urlCat)
  //   //   .then(response => response.json())
  //   //   .then(json => {
  //   //     console.log(json);
  //   //     setCategories(json);
  //   //   })
  //   //   .catch(error => console.error(error))
  //   //   .finally(() => setLoading(false));
  // }, []);
  // const;
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
    };
    launchCamera(options, response => {
      console.log(response.assets[0].uri);
      setUri(response.assets[0].uri);
    });
  };
  return (
    <ScrollView>
      {/* {getBrands} */}
      <View
        style={{
          height: 70,
          padding: 20,
          backgroundColor: 'white',
          borderBottomColor: '#cccccccc',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 18}}>Sell Item </Text>
      </View>
      <View>
        {/* UploadPhotos */}
        <View style={styles.topContainer}>
          <Text style={{color: 'grey'}}>
            Add up to 3 photos.{' '}
            <Text style={{color: '#09B1BA'}}>See photo tips</Text>
          </Text>
          <Buttons
            secBtn={{width: 150, jusifyContent: 'center'}}
            onPress={openCamera}
            title="+ Upload Photos"
          />
          {uri === '' ? (
            <Text></Text>
          ) : (
            <Image source={{uri: uri}} style={{height: 150, width: 150}} />
          )}
        </View>
        {/* TextInput */}
        <View style={styles.texInputContainer}>
          <Text style={{paddingStart: 10, marginBottom: -10}}>Title</Text>
          <TextInput
            placeholder="e.g. White COS Sweater"
            style={styles.textInputTop}
          />
          <Text style={{paddingStart: 10, marginBottom: -10}}>
            Describe your item
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. only worn a few times,true to size"
          />
        </View>
        {/* Picker Category, Brand, Condition*/}
        <View style={styles.picker}>
          <TouchableOpacity
            onPress={goToSelectCategory}
            style={{
              borderBottomColor: '#cccccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text>Category</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{paddingEnd: 10}}>
                {route.params !== undefined ? route.params.name : ''}
              </Text>
              <AntDesign name="caretdown" color={'#999999'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToSelectBrand}
            style={{
              borderBottomColor: '#cccccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text>Brand</Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingEnd: 10}}>
                {route.params !== undefined ? route.params.brand : ''}
              </Text>
              <AntDesign name="caretdown" color={'#999999'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToSelectState}
            style={{
              borderBottomColor: '#cccccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text>Condition</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingEnd: 10}}>
                {route.params !== undefined ? route.params.state : ''}
              </Text>
              <AntDesign name="caretdown" color={'#999999'} />
            </View>
          </TouchableOpacity>
        </View>
        {/* PRICE */}
        <View style={styles.texInputContainer}>
          <Text style={{paddingStart: 10, marginBottom: -10}}>Price</Text>
          <TextInput placeholder="0.00 EUR" style={styles.textInputTop} />
          <View
            style={{
              paddingStart: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#cccccc',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                I'm interested in swapping this {}
              </Text>
              <Pressable onPress={checkBox}>
                <MaterialCommunityIcons
                  name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  color={checked ? '#09b1ba' : '#cccccccc'}
                  size={25}
                />
              </Pressable>
            </View>
          </View>

          {/* <CheckBox /> */}
        </View>
        {/* Button Add */}
        <Buttons
          onPress={() => {
            Alert.alert('Added item');
          }}
          title="Add"
          secBtn={{backgroundColor: '#09B1BA'}}
          titleCol={{color: 'white', fontWeight: '700', fontSize: 16}}
        />
        {/* Text */}
        <Text style={{color: '#aaaaaa'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quae
          doloremque aliquam laudantium magnam distinctio fugiat ullam corrupti
          accusantium. Nobis earum adipisci ratione accusamus omnis. Ipsam
          nostrum eum quas porro aliquam?
          {/* {route.params.name === undefined ? (
            <Text>None</Text>
          ) : (
            <Text>{route.params.name}</Text>
          )} */}
        </Text>
      </View>
    </ScrollView>
  );
};

export default SellScreen;
