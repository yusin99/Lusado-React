/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface ButtonProps {
  title?: string;
  onPress: () => void;
  secBtn?: object;
  titleCol: object;
  icon?: () => void;
}
const ButtonsFull = ({title, onPress, secBtn, titleCol, icon}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={{...styles.root, ...secBtn}}>
      <Text style={{...styles.title, ...titleCol}}>
        <MaterialIcons name="verified-user" size={15} color={'white'} />
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#09B1BA',
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#09B1BA',
  },
  title: {
    fontSize: 12,
    color: 'white',
  },
});
export default ButtonsFull;
