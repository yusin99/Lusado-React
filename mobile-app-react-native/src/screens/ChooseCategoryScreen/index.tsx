/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ChooseCategoryScreen = () => {
  const url = 'http://192.168.1.92:8000/api/category/';
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState();
  const [selectedFeature, setSelectedFeature] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.navigate('Sell Screen', {
      name: selectedFeature,
      category: selectedCategory,
    });
  };
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setCategories(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.textInputContainer}>
        <View style={styles.view}>
          <Feather name="search" size={20} />
          <TextInput
            placeholder="Find a category"
            style={styles.textInput}
            // value={searchValue}
            // onChangeText={setSearchValue}
          />
        </View>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={categories}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <View>
                <View style={styles.categoryRow}>
                  <View style={{flex: 1}}>
                    <FontAwesome name={item.icon} size={25} color={'#09b1ba'} />
                  </View>
                  <View style={{flex: 9}}>
                    <Text style={styles.categoryText}>{item.name}</Text>
                  </View>
                </View>
                {item.features.map((ft: any) => {
                  return (
                    <RadioButtonRN
                      textStyle={styles.radioButtonStyle}
                      selectedBtn={(e: any) => {
                        setSelectedFeature(e.label);
                        setSelectedCategory(item.name);
                        console.log(selectedFeature);
                        navigateBack();
                      }}
                      box={false}
                      circleSize={15}
                      activeColor={'#09b1ba'}
                      key={ft.id}
                      data={[{label: ft.name}]}
                    />
                  );
                })}
              </View>
            )}
          />
        )}
        {useEffect(() => {
          selectedFeature === undefined ? <Text></Text> : navigateBack();
        })}
      </View>
    </View>
  );
};

export default ChooseCategoryScreen;
