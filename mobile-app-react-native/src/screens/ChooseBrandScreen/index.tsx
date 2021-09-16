/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native';
import styles from './styles';

const ChooseBrandScreen = () => {
  const url = 'http://192.168.1.92:8000/api/brand/';
  const [isLoading, setLoading] = useState(true);
  const [brand, setBrand] = useState();
  const [selectedBrand, setSelectedBrand] = useState();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate('Sell Screen', {brand: selectedBrand});
  };
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setBrand(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.textInputRow}>
        <View style={styles.view}>
          <Feather name="search" size={20} />
          <TextInput
            placeholder="Find a brand"
            style={styles.textInput}
            // value={searchValue}
            // onChangeText={setSearchValue}
          />
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={brand}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
              <RadioButtonRN
                textStyle={{
                  paddingStart: 10,
                }}
                style={styles.radioButtonStyle}
                selectedBtn={(e: any) => {
                  console.log(e);
                  setSelectedBrand(e.label);
                  goBack();
                }}
                box={false}
                circleSize={15}
                activeColor={'#09b1ba'}
                key={item.id}
                data={[{label: item.name}]}
              />
            </View>
          )}
        />
      )}
      {useEffect(() => {
        // eslint-disable-next-line react/self-closing-comp
        selectedBrand === undefined ? <Text></Text> : goBack();
      })}
    </View>
  );
};

export default ChooseBrandScreen;
