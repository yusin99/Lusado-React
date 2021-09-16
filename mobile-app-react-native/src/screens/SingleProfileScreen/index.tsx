/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ProductItem from '../../components/ProductItem/index';
import ProductItemProps from '../../models/ProductItemProps';
import {FlatList} from 'react-native';
import {ActivityIndicator, LogBox} from 'react-native';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductItemBump from './../../components/ProductItemBump/index';

const SingleProfileScreen = () => {
  const url = 'http://192.168.1.92:8000/api/product/';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ProductItemProps | undefined>();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
    <ScrollView style={{backgroundColor: 'white'}}>
      <Pressable
        style={{
          flexDirection: 'row',
          borderBottomColor: '#cccccc',
          borderBottomWidth: 1,
        }}>
        <View style={styles.topContainer}>
          {/* Photo */}
          <View>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
          </View>
          <View>
            <Text>demo_1</Text>
            <Text style={{color: '#60615F'}}>View my profile</Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            alignItems: 'flex-end',
            // backgroundColor: 'red',
            flex: 2,
            justifyContent: 'center',
          }}>
          <Feather name="arrow-right" size={20} color={'gray'} />
        </View>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          borderBottomColor: '#cccccccc',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{fontSize: 15}}>
            <EvilIcons name="check" size={20} color={'gray'} /> Email, Google,
            Facebook
          </Text>
          <Text style={{fontSize: 15}}>
            <EvilIcons name="location" size={20} color={'gray'} /> Paris, France
          </Text>
          <Text style={{fontSize: 15}}>
            <Feather name="wifi" size={20} color={'gray'} /> 0 Followers, 0
            Following
          </Text>
        </View>

        <Feather name="arrow-right" size={20} color={'gray'} />
      </View>
      <Pressable
        style={{
          flexDirection: 'row',
          // borderBottomColor: '#cccccc',
          // borderBottomWidth: 1,
        }}>
        <View style={styles.topContainer}>
          {/* Photo */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                marginEnd: 20,
                backgroundColor: '#EBF9F9',
                borderRadius: 7777777,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="arrow-up" size={30} color={'#09B1BA'} />
            </View>
          </View>
          <View>
            <Text>Bump Your Items</Text>
            <Text style={{color: '#60615F'}}>Increase Sales Now</Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            alignItems: 'flex-end',
            // backgroundColor: 'red',
            flex: 2,
            justifyContent: 'center',
          }}>
          <Feather name="arrow-right" size={20} color={'gray'} />
        </View>
      </Pressable>
      <View
        style={{
          borderTopColor: '#cccccccc',
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{fontSize: 16}}>0 Items</Text>
        <Text>
          <Text style={{color: 'black', fontSize: 16}}>
            <Ionicons name="md-filter-outline" size={20} color="#09B1BA" />{' '}
            Filter
          </Text>
        </Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.root}
            numColumns={2}
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => <ProductItemBump item={item} />}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default SingleProfileScreen;
