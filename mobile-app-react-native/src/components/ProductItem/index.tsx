/* eslint-disable prettier/prettier */
// import React, {isValidElement} from 'react';
// import {View, Text, Image, Pressable} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {useNavigation} from '@react-navigation/native';
// import styles from './styles';
// interface ProductItemProps {
//   item: {
//     id: number;
//     title: string;
//     image: string;
//     avgRating: number;
//     ratings: number;
//     price: number;
//     oldPrice: number;
//   };
// }
// const ProductItem = (props: ProductItemProps) => {
//   const item = props.item;
//   const navigation = useNavigation();
//   const onPress = () => {
//     navigation.navigate('Product Item', {id: item.id});
//   };
//   return (
//     <Pressable style={styles.root} onPress={onPress}>
//       <Image
//         style={styles.img}
//         source={{
//           uri: item.image,
//         }}
//       />
//       <View style={styles.rightContainer}>
//         <Text style={styles.title} numberOfLines={3}>
//           {item.title}
//         </Text>
//         {/* Rating */}
//         <View style={styles.ratingsContainer}>
//           {[0, 0, 0, 0, 0].map((el, i) => (
//             <FontAwesome
//               key={`${item.id}-${i}`}
//               name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
//               size={18}
//               color={'#e47911'}></FontAwesome>
//           ))}
//           {/* <FontAwesome name="star" size={18} color={'#e47911'}></FontAwesome>
//           <FontAwesome name="star" size={18} color={'#e47911'}></FontAwesome>

//           <FontAwesome
//             name="star-half-full"
//             size={18}
//             color={'#e47911'}></FontAwesome>
//           <FontAwesome name="star-o" size={18} color={'#e47911'}></FontAwesome> */}
//           <Text style={styles.titleRatings}>{item.ratings}</Text>
//         </View>
//         <Text style={styles.price}>
//           from ${item.price}
//           {item.oldPrice && (
//             <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
//           )}
//         </Text>
//       </View>
//     </Pressable>
//   );
// };

// export default ProductItem;
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
// import {useState} from 'react';
import ProductItemProps from '../../models/ProductItemProps';
import {useNavigation} from '@react-navigation/native';
const ProductItem = (props: ProductItemProps) => {
  const item = props.item;
  const [color, setColor] = useState(false);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Product Item', {id: item.id, productName: item.name});
  };

  const changeColor = () => {
    color ? setColor(false) : setColor(true);
  };
  // const onPressSettings = () => {
  //   navigation.navigate('Settings', {id: item.id});
  // };

  return (
    <Pressable style={styles.root} onPress={onPress}>
      {/* Avatar Image */}
      <View>
        <View>
          <Image
            style={styles.avatarImage}
            source={{
              uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg',
            }}
          />
        </View>
        {/* Product Image */}
        <View>
          <Image
            style={styles.img}
            source={{
              uri: item.photos[0].url,
            }}
          />
        </View>
        {/* Down Image Details*/}
        <View style={styles.productLastRow}>
          <View>
            <Text style={styles.price}>
              {item.price_without_shipping_costs}€
            </Text>
            <Text style={styles.brand}>{item.brand.name}</Text>
          </View>
          <View>
            <Pressable onPress={changeColor}>
              <AntDesign
                name={color ? 'heart' : 'hearto'}
                size={20}
                color={color ? 'red' : 'grey'}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
