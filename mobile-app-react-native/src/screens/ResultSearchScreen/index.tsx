/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView,
  LogBox,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ProductItem from '../../components/ProductItem/index';
import ProductItemProps from '../../models/ProductItemProps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const ResultSearchScreen = () => {
  const route = useRoute();
  const url = 'http://192.168.1.92:8000/api/product/';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  let item: any = [];
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {
          console.log(json[i].configurations[0].value.name);
          if (
            json[i].category.id === route.params.id &&
            json[i].configurations[0].feature.name === route.params.feature
          ) {
            item.push(json[i]);
            setData(item);
          }
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      {data === undefined ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <View>
            <Text style={{fontSize: 20}}>No items found</Text>
          </View>
          {/* <ActivityIndicator
            size="large"
            color="rgb(9, 177, 186)"
            animating={true}
          /> */}
        </View>
      ) : (
        <SafeAreaView>
          <ScrollView>
            <View style={{padding: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 120,
                    // height: 50,
                    padding: 12,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    borderWidth: 0.5,
                    borderColor: '#aaaaaaaa',
                    flexDirection: 'row',
                    marginHorizontal: 2,
                  }}>
                  <Text style={{color: 'black', fontSize: 18}}>
                    <Ionicons
                      name="md-filter-outline"
                      size={20}
                      color="black"
                    />{' '}
                    Filters
                  </Text>
                </View>

                {data.map((prod: any, i) => {
                  console.log(prod.configurations[0].value.name);
                  return (
                    <View
                      style={{
                        width: 120,
                        // height: 50,
                        padding: 12,
                        backgroundColor: 'rgb(9, 177, 186)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        marginHorizontal: 2,
                      }}>
                      <Text style={{color: 'white', fontSize: 18}}>
                        {prod.configurations[0].value.name}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>

              <Text style={{color: 'red', fontSize: 15}}>{}</Text>
              <Text>{data.length}+ Results</Text>
            </View>
            <View>
              {isLoading ? (
                <ActivityIndicator
                  animating={true}
                  size="large"
                  color={'rgb(9, 177, 186)'}
                />
              ) : true ? (
                <FlatList
                  style={{backgroundColor: 'white', padding: 5}}
                  numColumns={2}
                  data={data}
                  keyExtractor={({id}: any, index) => id}
                  renderItem={({item}: ProductItemProps) => (
                    <ProductItem item={item} />
                  )}
                />
              ) : (
                <View style={{backgroundColor: 'red'}}>
                  <Text>No items found</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

export default ResultSearchScreen;
