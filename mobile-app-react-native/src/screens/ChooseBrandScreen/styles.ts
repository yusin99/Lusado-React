/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  view: {
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
  textInputRow: {
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
  radioButtonStyle: {
    paddingBottom: 10,
    borderBottomColor: '#dddddddd',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
});
export default styles;
