/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
// import {Text, View} from 'react-native';
// import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
// import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen/index';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {TextInput} from 'react-native';
import {View} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import SingleProfileScreen from '../screens/SingleProfileScreen/index';
import PersonalisationSettingsScreen from './../screens/PersonalisationSettingsScreen/index';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: any;
}
const Stack = createStackNavigator();
const HeaderComponent = ({}: // searchValue,
// setSearchValue,
HeaderComponentProps) => {
  const navigation = useNavigation();
  const goToSettings = () => {
    navigation.navigate('Personalisation Settings');
  };
  return (
    <SafeAreaView
      style={{
        height: 60,
        backgroundColor: 'white',
        borderBottomColor: '#cccccccc',
        borderBottomWidth: 1,
      }}>
      <View style={styles.view}>
        <Text style={{fontSize: 19, fontWeight: '600'}}>News Feed</Text>
        <Pressable onPress={goToSettings}>
          <View style={{transform: [{rotateZ: '1.56rad'}]}}>
            <Octicons name="settings" size={25} />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={
        {
          // header: () => (
          //   <HeaderComponent
          //     searchValue={searchValue}
          //     setSearchValue={setSearchValue}
          //   />
          // ),
        }
      }>
      <Stack.Screen
        name="News Feed"
        options={{
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ),
        }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        component={ProductScreen}
        name="Product Item"
        options={({route}) => ({title: route.params.productName})}
      />
      <Stack.Screen
        component={SingleProfileScreen}
        name="Single Profile Screen"
      />
      <Stack.Screen
        component={PersonalisationSettingsScreen}
        name="Personalisation Settings"
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  view: {
    // margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    // backgroundColor: 'red',
  },
});
export default HomeStack;
