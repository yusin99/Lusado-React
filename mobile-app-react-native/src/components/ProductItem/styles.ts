/* eslint-disable prettier/prettier */
// import {StyleSheet} from 'react-native';
// const styles = StyleSheet.create({
//   page: {
//     padding: 10,
//   },
//   root: {
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderColor: '#d1d1d1',
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     marginBottom: 5,
//   },
//   img: {
//     marginStart: 10,
//     flex: 2,
//     resizeMode: 'contain',
//     height: 150,
//   },
//   oldPrice: {
//     fontSize: 12,
//     fontWeight: 'normal',
//     marginStart: 15,
//     textDecorationLine: 'line-through',
//   },
//   title: {
//     fontSize: 18,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   rightContainer: {
//     padding: 10,
//     flex: 3,
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//   },
//   titleRatings: {
//     paddingStart: 6,
//   },
// });
// export default styles;
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },

  root: {
    padding: 5,
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 5,
    maxWidth: '50%',
  },
  avatarImage: {
    height: 25,
    width: 25,
    borderRadius: 77777,
    marginStart: 10,
    marginBottom: 5,
  },
  img: {
    resizeMode: 'cover',
    height: 208,
    width: '100%',
  },
  // oldPrice: {
  //   fontSize: 12,
  //   fontWeight: 'normal',
  //   marginStart: 15,
  //   textDecorationLine: 'line-through',
  // },
  price: {
    fontSize: 14,
    fontWeight: '500',
    paddingStart: 7,
  },
  brand: {
    fontSize: 11,
    fontWeight: '400',
    color: 'gray',
    paddingStart: 7,
  },
  productLastRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },

  rightContainer: {
    padding: 10,
    flex: 3,
  },
});
export default styles;
