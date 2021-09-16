/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate('Single Profile Screen');
  };
  const goToPersonalisation = () => {
    navigation.navigate('Personalisation Settings');
  };
  const goToBalance = () => {
    navigation.navigate('My Balance');
  };
  const goToFavourites = () => {
    navigation.navigate('My Favourites');
  };
  const goToOrders = () => {
    navigation.navigate('My Orders');
  };
  const goToDiscounts = () => {
    navigation.navigate('Bundle Discounts');
  };
  const goToInviteFriends = () => {
    navigation.navigate('Invite Friends');
  };
  const [selectedValue, setSelectedValue] = useState('English');
  return (
    <ScrollView>
      {/* Profile */}
      <View style={{backgroundColor: 'white', marginBottom: 15}}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={goToProfile}
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
              <Text>View my profile</Text>
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
            <AntDesign name="right" size={15} color={'#aaa'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', padding: 15}}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View>
              <Text>
                <EvilIcons name="question" size={25} color={'grey'} />
              </Text>
            </View>
            <View style={{paddingStart: 15}}>
              <Text>Your guide to Lusado</Text>
            </View>
          </View>
          <View>
            <AntDesign name="right" size={15} color={'#aaa'} />
          </View>
        </TouchableOpacity>
      </View>
      {/*  */}
      <View style={{backgroundColor: 'white', marginBottom: 15}}>
        {/* Favourites */}
        <TouchableOpacity
          onPress={goToFavourites}
          style={{
            flexDirection: 'row',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
          }}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View>
              <Text>
                <EvilIcons name="heart" size={25} color={'grey'} />
              </Text>
            </View>
            <View style={{paddingStart: 15}}>
              <Text>My favourites</Text>
            </View>
          </View>
          <View>
            <AntDesign name="right" size={15} color={'#aaa'} />
          </View>
        </TouchableOpacity>
        {/* personalisation */}
        <TouchableOpacity
          onPress={goToPersonalisation}
          style={{
            flexDirection: 'row',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
          }}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View>
              <Text>
                <Octicons name="settings" size={20} color={'grey'} />
              </Text>
            </View>
            <View style={{paddingStart: 15}}>
              <Text> Personalisation</Text>
            </View>
          </View>
          <View>
            <AntDesign name="right" size={15} color={'#aaa'} />
          </View>
          {/* <AntDesign name="right" size={15} color={'#aaa'} /> */}
        </TouchableOpacity>
        {/* Balance */}
        <TouchableOpacity
          onPress={goToBalance}
          style={{
            flexDirection: 'row',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
          }}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View>
              <Text>
                <Ionicons name="ios-wallet-outline" size={20} color={'grey'} />
              </Text>
            </View>
            <View style={{paddingStart: 15}}>
              <Text> Balance</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{paddingEnd: 10, color: '#aaa', fontSize: 15}}>
              150.00$
            </Text>
            <AntDesign name="right" size={15} color={'#aaa'} />
          </View>
        </TouchableOpacity>
        {/* Orders */}
        <TouchableOpacity
          onPress={goToOrders}
          style={{
            flexDirection: 'row',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
          }}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View>
              <Text>
                <Ionicons name="list-outline" size={20} color={'grey'} />
              </Text>
            </View>
            <View style={{paddingStart: 15}}>
              <Text> My Orders</Text>
            </View>
          </View>
          <View>
            <AntDesign name="right" size={15} color={'#aaa'} />
          </View>
        </TouchableOpacity>
        {/* Bundle discounts */}
        <TouchableOpacity
          onPress={goToDiscounts}
          style={{flexDirection: 'row', padding: 15}}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View>
              <Text>
                <Feather name="percent" size={20} color={'grey'} />
              </Text>
            </View>
            <View style={{paddingStart: 15}}>
              <Text>Bundle discounts</Text>
            </View>
          </View>
          <View>
            <AntDesign name="right" size={15} color={'#aaa'} />
          </View>
        </TouchableOpacity>
      </View>
      {/* Invite Friends */}
      <TouchableOpacity onPress={goToInviteFriends}>
        <View style={{backgroundColor: 'white', marginBottom: 15}}>
          <View style={{flexDirection: 'row', padding: 15}}>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <View>
                <Text>
                  <Ionicons
                    name="person-add-outline"
                    size={20}
                    color={'grey'}
                  />
                </Text>
              </View>
              <View style={{paddingStart: 15}}>
                <Text> Invite Friends</Text>
              </View>
            </View>
            <View>
              <AntDesign name="right" size={15} color={'#aaa'} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/*  */}
      <View style={{backgroundColor: 'white', marginBottom: 10}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 15,
            borderBottomColor: '#cccccccc',
            borderBottomWidth: 1,
          }}
          onPress={() => {}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Text>
                <Fontisto name="world-o" size={20} color={'grey'} />
              </Text>
            </View>
            <View style={{paddingStart: 15}}>
              <Text> Language</Text>
            </View>
          </View>
          <View style={{margin: -15}}>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 150}}
              onValueChange={itemValue => setSelectedValue(itemValue)}>
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Portuguese" value="pt" />
            </Picker>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            marginBottom: 10,
            borderBottomColor: '#cccccccc',
            borderBottomWidth: 1,
          }}>
          <View style={{flexDirection: 'row', padding: 15}}>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <View>
                <Text>
                  <Feather name="info" size={20} color={'grey'} />
                </Text>
              </View>
              <View style={{paddingStart: 15}}>
                <Text> About Lusado</Text>
              </View>
            </View>
            <View>
              <AntDesign name="right" size={15} color={'#aaa'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            // marginBottom: 10,
            borderBottomColor: '#cccccccc',
            borderBottomWidth: 1,
          }}>
          <View style={{flexDirection: 'row', padding: 15}}>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <View>
                <Text>
                  <EvilIcons name="question" size={25} color={'grey'} />
                </Text>
              </View>
              <View style={{paddingStart: 15}}>
                <Text>Help center</Text>
              </View>
            </View>
            <View>
              <AntDesign name="right" size={15} color={'#aaa'} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
