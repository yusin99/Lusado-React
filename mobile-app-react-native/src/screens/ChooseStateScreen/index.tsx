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
import {StyleSheet} from 'react-native';

const ChooseStateScreen = () => {
  const url = 'http://192.168.1.92:8000/api/state/';
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState();
  const [selectedState, setSelectedState] = useState();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate('Sell Screen', {state: selectedState});
  };
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setState(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={state}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
              <RadioButtonRN
                textStyle={{
                  paddingStart: 10,
                }}
                style={styles.stateRow}
                selectedBtn={(e: any) => {
                  console.log(e);
                  setSelectedState(e.label);
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
        selectedState === undefined ? <Text></Text> : goBack();
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  stateRow: {
    paddingBottom: 10,
    borderBottomColor: '#dddddddd',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
});
export default ChooseStateScreen;
