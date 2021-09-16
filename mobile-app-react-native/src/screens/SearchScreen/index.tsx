/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList, Text} from 'react-native';
import styles from './styles';
// import HeaderComponentProps from './../../models/HeaderComponentProps';
// import Feather from 'react-native-vector-icons/Feather';
import Categories from '../../components/Categories/index';
import Feather from 'react-native-vector-icons/Feather';

const SearchScreen = () => {
  const url = 'http://192.168.1.92:8000/api/category/';
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setCategories(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccccc',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Feather name="list" size={20} color={'#09b1ba'} />
            <Text style={{fontSize: 20}}> All Categories</Text>
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.header}
            numColumns={1}
            data={categories}
            keyExtractor={({id}: any, index) => id}
            renderItem={({item}: any) => <Categories item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
