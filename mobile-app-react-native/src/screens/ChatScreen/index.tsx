/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native';
import {TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Pressable} from 'react-native';
import styles from './styles';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.innerContainer1}>
        <View style={styles.messageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
          </View>
          <View>
            <Text style={styles.messageStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              odio unde non aliquam repellat, quaerat maiores nobis saepe ipsa
              sed eius quo rem quasi illo, necessitatibus nisi. Deleniti, quos
              dolores.
            </Text>
          </View>
        </View>

        <View style={styles.userMessageContainer}>
          <Text style={styles.userMessageStyle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            corporis laborum dolorem rerum cumque error, reiciendis quidem,
            aperiam cupiditate, soluta nobis. Facere ex nemo sit odit dicta ab,
            a ipsa?
          </Text>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
          </View>
          <View>
            <Text style={styles.messageStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              odio unde non aliquam repellat, quaerat maiores nobis saepe ipsa
              sed eius quo rem quasi illo, necessitatibus nisi. Deleniti, quos
              dolores.
            </Text>
          </View>
        </View>

        <View style={styles.userMessageContainer}>
          <Text style={styles.userMessageStyle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            corporis laborum dolorem rerum cumque error, reiciendis quidem,
            aperiam cupiditate, soluta nobis. Facere ex nemo sit odit dicta ab,
            a ipsa?
          </Text>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.avatarImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                width: '50%',
                backgroundColor: '#efefefef',
                padding: 10,
                borderRadius: 5,
              }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              corporis
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            paddingVertical: 15,
          }}>
          <Text style={styles.userMessageStyle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            corporis
          </Text>
        </View>
      </ScrollView>
      <View style={{padding: 10}}>
        <View style={styles.messageInput}>
          {/* <View> */}
          <TextInput
            placeholder="Enter your message here..."
            style={{flex: 9}}
          />
          <Pressable style={{padding: 10}}>
            <Feather
              name="send"
              size={25}
              style={{flex: 1}}
              color={'#09b1ba'}
            />
          </Pressable>
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
