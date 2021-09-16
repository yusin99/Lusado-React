/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  view: {
    // marginHorizontal: 15,
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#cccccccc',
    borderBottomWidth: 3,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  textInputContainer: {
    padding: 10,
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccccc',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {height: 40, marginLeft: 10, fontSize: 17},
  categoryRow: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomColor: '#dddddddd',
    borderBottomWidth: 1,
    // borderTopColor: '#dddddddd',
    // borderTopWidth: 1,
    flexDirection: 'row',
  },
  categoryText: {fontSize: 15, paddingStart: 15},
  radioButtonStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccccc',
    // paddingStart: 10,
    paddingBottom: 10,
    width: '100%',
  },
});
export default styles;
