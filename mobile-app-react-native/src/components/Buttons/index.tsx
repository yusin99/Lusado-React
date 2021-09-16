/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
interface ButtonProps {
  title: string;
  onPress: () => void;
  secBtn?: object;
  titleCol?: object;
}
const Buttons = ({title, onPress, secBtn, titleCol}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={{...styles.root, ...secBtn}}>
      <Text style={{...styles.title, ...titleCol}}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
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
    color: '#09B1BA',
  },
});
export default Buttons;
