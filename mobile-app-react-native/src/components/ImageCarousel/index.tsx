/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native';
import {useState, useCallback} from 'react';

const ImageCarousel = ({images}: {images: object}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    // console.log(viewableItems);
  }, []);
  return (
    <ScrollView>
      <View style={styles.root}>
        <FlatList
          data={images}
          renderItem={({item}) => (
            <Image
              style={[styles.image, {width: windowWidth}]}
              source={{uri: item.url}}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowWidth}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          onViewableItemsChanged={onFlatlistUpdate}
        />
        <View style={styles.dotContainer}>
          {images.map((image, index) => (
            <View
              style={[
                styles.dot,
                {backgroundColor: index === activeIndex ? 'white' : '#cdcdcd'},
              ]}></View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 77777,
    borderWidth: 1,
    borderColor: 'white',
    margin: 5,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  root: {},
});

export default ImageCarousel;
