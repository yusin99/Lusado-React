/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{height: '50%'}}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
          }}
        />
      </View>
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>demo_1</Text>
      </View>
      <View style={styles.informationContainer}>
        <View>
          <Text style={{fontSize: 15}}>
            <EvilIcons name="check" size={20} color={'gray'} /> Email, Google,
            Facebook
          </Text>
        </View>

        <Feather name="arrow-right" size={20} color={'gray'} />
      </View>
      <View style={styles.additionalInfo}>
        <View>
          <Text style={styles.textSize15}>
            <EvilIcons name="location" size={20} color={'gray'} /> Paris,France
          </Text>
          <Text style={styles.textSize15}>
            <EvilIcons name="clock" size={20} color={'gray'} /> Last seen today
            03:57PM
          </Text>
          <Text style={styles.textSize15}>
            <Feather name="wifi" size={20} color={'gray'} /> 0 Followers, 0
            Following
          </Text>
        </View>
        <Feather name="arrow-right" size={20} color={'gray'} />
      </View>
    </View>
  );
};

export default AboutScreen;
