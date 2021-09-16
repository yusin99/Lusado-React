/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    marginStart: 15,
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 15,
    marginVertical: 10,
    lineHeight: 20,
  },
  titlee: {
    color: 'darkgrey',
  },
});
export default styles;
