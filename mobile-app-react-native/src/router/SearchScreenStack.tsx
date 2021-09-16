/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
// import {Text, View} from 'react-native';
// import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
// import BottomTabNav from './bottomTabNav';
// import HomeScreen from '../screens/HomeScreen';
// import ProductScreen from '../screens/ProductScreen/index';
import {StyleSheet, SafeAreaView, View, TextInput, Text} from 'react-native';
import SubCategoriesScreen from '../screens/SubCategoriesScreen/index';
import SearchScreen from '../screens/SearchScreen/index';
import Feather from 'react-native-vector-icons/Feather';
import ResultSearchScreen from '../screens/ResultSearchScreen/index';
import {useNavigation} from '@react-navigation/native';

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: any;
}
const Stack = createStackNavigator();

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={{
        padding: 10,
        height: 60,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccccc',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{flex: 1}}>
        <Feather name="arrow-left" size={25} color={'black'} onPress={goBack} />
      </View>
      <View style={styles.view}>
        <Feather name="search" size={20} />
        <TextInput
          placeholder="Search for items or members"
          style={{height: 40, marginLeft: 10, fontSize: 17}}
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};
const SearchScreenStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="Categories" options={{title: 'Search Items'}}>
        {() => <SearchScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={SubCategoriesScreen} name="Sub Categories" />
      <Stack.Screen component={ResultSearchScreen} name="Result Page" />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  view: {
    // marginHorizontal: 15,
    flex: 9,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dddddddd',
    borderRadius: 5,
  },
});
export default SearchScreenStack;
