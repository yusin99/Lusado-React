/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {backgroundColor: 'white', height: '100%'},
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 77777,
    marginStart: 10,
    marginBottom: 5,
  },
  chatStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#cccccccc',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  chatRow: {width: '65%', flexDirection: 'row', alignItems: 'center'},
  newMessage: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 75,
    height: 75,
    borderRadius: 7777777,
    backgroundColor: '#09b1ba',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
