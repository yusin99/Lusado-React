/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ProductItemProps from '../../models/ProductItemProps';
import SingleProduct from '../../components/SingleProduct/index';

const ProductScreen = () => {
  const route = useRoute();
  console.log(route.params.id);
  const url = 'http://192.168.1.92:8000/api/product/';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ProductItemProps | undefined>();

  useEffect(() => {
    fetch(url + route.params.id)
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => <SingleProduct item={item} />}
        />
      ) : (
        <SingleProduct item={data} />
      )}
    </View>
  );
};

export default ProductScreen;
