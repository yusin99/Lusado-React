/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const Messages = () => {
  const navigation = useNavigation();
  const goToChat = () => {
    navigation.navigate('Chat Screen');
  };
  const newMessageNavigate = () => {
    navigation.navigate('New Message Screen');
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={goToChat} style={styles.chatStyle}>
        <View style={styles.chatRow}>
          <View>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{fontSize: 16}}>Maxmoux</Text>
            <Text style={{fontSize: 16, color: 'grey'}}>
              The parcel is sent💋
            </Text>
          </View>
        </View>

        <View style={{width: '35%', paddingHorizontal: 10}}>
          <Text style={{paddingStart: 30}}>1 hour ago</Text>
        </View>
      </Pressable>

      <Pressable onPress={goToChat} style={styles.chatStyle}>
        <View style={styles.chatRow}>
          <View>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{fontSize: 16}}>Maxmoux</Text>
            <Text style={{fontSize: 16, color: 'grey'}}>
              Great. Thanks a lot😅👌
            </Text>
          </View>
        </View>

        <View style={{width: '35%', paddingHorizontal: 10}}>
          <Text style={{paddingStart: 30}}>1 hour ago</Text>
        </View>
      </Pressable>
      <Pressable onPress={goToChat} style={styles.chatStyle}>
        <View style={styles.chatRow}>
          <View>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{fontSize: 16}}>Maxmoux</Text>
            <Text style={{fontSize: 16, color: 'grey'}}>
              Hello👋Interested?
            </Text>
          </View>
        </View>

        <View style={{width: '35%', paddingHorizontal: 10}}>
          <Text style={{paddingStart: 30}}>1 hour ago</Text>
        </View>
      </Pressable>
      <Pressable onPress={newMessageNavigate} style={styles.newMessage}>
        <EvilIcons name="pencil" size={50} color={'white'} />
      </Pressable>
    </View>
  );
};

export default Messages;
