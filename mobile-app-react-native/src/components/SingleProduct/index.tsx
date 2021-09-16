/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import ProductItemProps from '../../models/ProductItemProps';
import ImageCarousel from '../ImageCarousel/index';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Buttons from '../Buttons/index';
import {Alert} from 'react-native';
import ButtonsFull from '../Buttons/fullButton';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
const SingleProduct = (props: ProductItemProps) => {
  const navigation = useNavigation();
  const [color, setColor] = useState(false);
  const [options, setOptions] = useState(false);
  const goToProfile = () => {
    navigation.navigate('Single Profile Screen');
  };
  const item = props.item;
  const changeColor = () => {
    color ? setColor(false) : setColor(true);
  };
  const showOptions = () => {
    setOptions(true);
  };
  return (
    <ScrollView>
      <ImageCarousel images={item.photos} />
      <Pressable
        onPress={goToProfile}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 5,
          alignItems: 'center',
          backgroundColor: 'white',
          borderBottomColor: '#cccccc',
          borderBottomWidth: 1,
        }}>
        <View style={{}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
            <View style={{paddingHorizontal: 20}}>
              <Text>demo_1</Text>
              <Text>reviews</Text>
            </View>
          </View>
        </View>
        <View>
          <AntDesign name="right" size={15} color={'gray'} />
        </View>
      </Pressable>
      <View style={{padding: 15, backgroundColor: 'white'}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 15}}>{item.name}</Text>
          <Text style={{fontSize: 15, paddingTop: 3}}>
            - {item.state.name} -
            <Text style={{color: '#09b1ba'}}> {item.brand.name}</Text>
          </Text>
          <Text style={{fontSize: 15, paddingTop: 3}}>
            €{item.price_without_shipping_costs}
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <View>
            <Buttons
              titleCol={{fontSize: 16}}
              title="Ask Seller"
              onPress={() => {
                Alert.alert('ASK SELLER');
              }}
            />
            <ButtonsFull
              titleCol={{fontSize: 16}}
              title="Buy Now"
              onPress={() => {
                Alert.alert('BUY NOW');
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <View style={{flex: 2}}>
            <View
              style={{
                width: 50,
                height: 50,
                // borderWidth: 1,
                borderRadius: 77777777,
                backgroundColor: 'rgba(9,177,186,0.1)',
                zIndex: -2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>
                <MaterialIcons
                  name="verified-user"
                  size={30}
                  color={'#09B1BA'}
                />
              </Text>
            </View>
          </View>
          <View style={{flex: 8}}>
            <Text style={{fontSize: 16}}>Be covered by our refund policy</Text>
            <Text style={{color: 'rgba(9,177,186,0.7)', fontSize: 13}}>
              Learn more about Buyer protection
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#edededed',
        }}>
        <Pressable
          style={{
            // backgroundColor: 'red',
            padding: 15,
            flex: 5,
            alignItems: 'center',
            // justifyContent: 'center',
            borderEndWidth: 0.5,
            borderTopColor: '#cccccc',
          }}>
          <Pressable
            onPress={changeColor}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <AntDesign
              name={color ? 'heart' : 'hearto'}
              size={25}
              color={color ? 'red' : '#cccccc'}
            />
            <Text style={{paddingStart: 5}}>Favourites</Text>
          </Pressable>
        </Pressable>
        <Pressable
          style={{
            padding: 15,
            flex: 5,
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <EvilIcons name="share-google" size={30} color={'#cccccc'} />
            <Text style={{paddingStart: 5}}>Share</Text>
          </View>
        </Pressable>
      </View>
      <View style={{backgroundColor: 'white', marginTop: 15, padding: 10}}>
        <Text style={{color: '#999999', paddingVertical: 15}}>
          ITEM DESCRIPTION
        </Text>
        <Text>{item.description}</Text>
        <Pressable onPress={showOptions}>
          <Text style={{paddingBottom: 15, color: '#09b1ba'}}>
            {options ? '' : 'more'}
          </Text>
        </Pressable>
      </View>
      {!options ? (
        <Text></Text>
      ) : (
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderTopColor: '#edededed',
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingVertical: 15,
            }}>
            <Text>Category</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{paddingHorizontal: 5}}>{item.category.name}</Text>
              <AntDesign name="right" size={15} color={'gray'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderTopColor: '#edededed',
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingVertical: 15,
            }}>
            <Text>Size</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <Text style={{paddingHorizontal: 5}}>{item.category.name}</Text> */}
              <AntDesign name="right" size={15} color={'gray'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderTopColor: '#edededed',
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingVertical: 15,
            }}>
            <Text>View Count</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <Text style={{paddingHorizontal: 5}}>{item.category.name}</Text> */}
              {/*  <AntDesign name="right" size={15} color={'gray'} /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderTopColor: '#edededed',
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingVertical: 15,
            }}>
            <Text>Added</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{paddingHorizontal: 5}}>07/07 20:19</Text>
              {/*  <AntDesign name="right" size={15} color={'gray'} /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderTopColor: '#edededed',
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingVertical: 15,
            }}>
            <Text>People Interested</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <Text style={{paddingHorizontal: 5}}>07/07 20:19</Text> */}
              {/*  <AntDesign name="right" size={15} color={'gray'} /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderTopColor: '#edededed',
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingVertical: 15,
            }}>
            <Text>Payment Options</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <Text style={{paddingHorizontal: 5}}>07/07 20:19</Text> */}
              {/*  <AntDesign name="right" size={15} color={'gray'} /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderTopColor: '#edededed',
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingVertical: 15,
            }}>
            <Text>Postage</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <Text style={{paddingHorizontal: 5}}>07/07 20:19</Text> */}
              <AntDesign name="down" size={15} color={'#aaa'} />
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={{marginTop: 15, padding: 10}}>
        <Text>
          <Text style={{color: 'rgba(9,177,186,1)'}}>Learn more</Text> about
          your rights as a buyer
        </Text>
      </View>
    </ScrollView>
  );
};

export default SingleProduct;
