/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: 'white'},
  image: {height: '100%', resizeMode: 'cover'},
  userNameContainer: {borderBottomWidth: 1, borderBottomColor: '#cccccccc'},
  userName: {
    fontSize: 25,
    color: 'black',
    paddingHorizontal: 10,
    paddingBottom: 50,
    paddingTop: 15,
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#cccccccc',
    borderBottomWidth: 1,
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#cccccccc',
    borderBottomWidth: 1,
  },
  textSize15: {fontSize: 15},
});
export default styles;
