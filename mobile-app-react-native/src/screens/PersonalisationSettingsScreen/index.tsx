/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const PersonalisationSettingsScreen = () => {
  return (
    <View>
      <View style={styles.topRow}>
        <Text style={{fontSize: 30, paddingVertical: 20}}>Build your feed</Text>
        <Text style={{fontSize: 17, color: '#a1a1a1', paddingBottom: 20}}>
          Set your sizes and follow brands and members whose content you'd like
          to see.
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity>
          <View style={styles.element}>
            <Text style={{fontSize: 17}}>Categories & sizes</Text>
            <Feather name="arrow-right" size={20} color={'gray'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.element}>
            <Text style={{fontSize: 17}}>Brands</Text>
            <Feather name="arrow-right" size={20} color={'gray'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4}>
          <View style={styles.element}>
            <Text style={{fontSize: 17}}>Members</Text>
            <Feather name="arrow-right" size={20} color={'gray'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalisationSettingsScreen;
