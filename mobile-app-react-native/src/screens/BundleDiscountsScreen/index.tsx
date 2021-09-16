/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Switch, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

const BundleDiscountsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <View style={styles.topRow}>
        <Text style={styles.textSize21}>Select discount</Text>
        <Switch
          trackColor={{false: '#99999999', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#09b1ba' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Text style={styles.textSize21}>Set up discounts</Text>
      </View>
      <TouchableOpacity style={styles.element}>
        <Text style={styles.textSize15}>2 items</Text>
        <Text style={styles.textSize15}>25%</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
        <Text style={styles.textSize15}>3 items</Text>
        <Text style={styles.textSize15}>30%</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.element}>
        <Text style={styles.textSize15}>5 items</Text>
        <Text style={styles.textSize15}>50%</Text>
      </TouchableOpacity>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 18}}>
          Great! You can give discounts in ascending order, starting with any
          number of items. The better your deal, the more you'll sell! For help,
          see the FAQ.
        </Text>
      </View>
    </View>
  );
};

export default BundleDiscountsScreen;
