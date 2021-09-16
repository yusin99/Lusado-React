/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductItem/index';
// import styles from './style';
import ProductItemProps from '../../models/ProductItemProps';
const HomeScreen = () => {
  const url = 'http://192.168.1.92:8000/api/product/';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ProductItemProps | undefined>();

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setData(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.root}
          numColumns={2}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <ProductItem item={item} key={item.id} />}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    padding: 5,
    backgroundColor: '#fff',
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
  },
});
export default HomeScreen;
