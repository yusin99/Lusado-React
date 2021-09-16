/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';

import {View, Text, ActivityIndicator, FlatList, Pressable} from 'react-native';
import {useRoute} from '@react-navigation/native';
// import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SubCategoriesScreen = () => {
  const route = useRoute();
  const url = 'http://192.168.1.92:8000/api/category/';
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState();
  const [feature, setFeature] = useState();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const featureSave = () => {
    navigation.navigate('Result Page', {
      id: categories.id,
      feature: feature,
    });
  };
  useEffect(() => {
    fetch(url + route.params.id)
      .then(response => response.json())
      .then(json => {
        // let {id} = json.features[0];
        // console.log(json.features);
        // setFeature(json.features);
        setCategories(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Pressable
        // onPress={goBack}
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderBottomColor: '#cccccccc',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <FontAwesome name="sitemap" size={20} color={'#09b1ba'} />
          </View>
          <View style={{flex: 9}}>
            <Text style={{fontSize: 20}}> All Features</Text>
          </View>
        </View>
      </Pressable>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {categories.features.map((ft: any, index: any) => {
            return (
              <Pressable
                onPressIn={() => {
                  setFeature(ft.name);
                }}
                onPressOut={() => {
                  featureSave();
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccccc',
                    // borderTopWidth: 1,
                    // borderTopColor: '#cccccccc',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {}
                    <FontAwesome5 name={ft.icon} size={20} color={'#09b1ba'} />
                  </View>
                  <View style={{flex: 7}}>
                    <Text style={{color: 'black'}}> {ft.name}</Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SubCategoriesScreen;
