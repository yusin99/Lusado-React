/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  innerContainer1: {
    borderBottomColor: '#cccccccc',
    borderBottomWidth: 1,
    padding: 10,
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 77777,
    marginEnd: 10,
  },
  messageContainer: {
    width: '70%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imageContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageStyle: {
    width: '20%',
    backgroundColor: '#efefefef',
    padding: 10,
    borderRadius: 5,
  },
  userMessageContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingVertical: 15,
  },
  userMessageStyle: {
    width: '70%',
    backgroundColor: '#dddd',
    padding: 10,
    borderRadius: 5,
  },
  messageInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeeeee',
    borderRadius: 5,
  },
});
export default styles;
