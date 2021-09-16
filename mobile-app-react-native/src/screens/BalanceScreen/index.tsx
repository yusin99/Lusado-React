/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Button} from 'react-native';
import styles from './styles';

const BalanceScreen = () => {
  return (
    <View>
      <View style={styles.topRow}>
        <Text style={styles.textSize21}>Pending Balance</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textSize21}>10,00 € </Text>
          <Feather name="info" size={25} color={'#999999'} />
        </View>
      </View>
      <View style={styles.withdrawRow}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>150,00€</Text>
          <Text style={{fontSize: 17, color: '#999999', paddingBottom: 10}}>
            Available balance
          </Text>
        </View>
        <View style={{paddingBottom: 10}}>
          <Button onPress={() => {}} title="Withdraw" color={'#09b1ba'} />
        </View>
      </View>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 21, color: '#999999'}}>
          Track wath you earn and spend on IonVinted. Sell your items, and your
          earnings will appear here.
        </Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.textSize21}>Start Balance</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textSize21}>0,00 € </Text>
          <Feather name="info" size={25} color={'#999999'} />
        </View>
      </View>
    </View>
  );
};

export default BalanceScreen;
