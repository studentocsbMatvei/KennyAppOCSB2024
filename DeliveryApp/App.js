import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useFonts} from 'expo-font';

import KennysPage from './pages/KennysPage';

import axios from 'axios';
import OrdersPage from './pages/OrdersPage';
import LastPage from './pages/LastPage';
import CoffeePage from './pages/CoffeePage';
import TeaPage from './pages/TeaPage';
import OrdersComplete from './pages/OrdersComplete';
import OrdersToComplete from './pages/OrdersToComplete';

import SendingData from './pages/SendingData';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/ASH-logo.png')}/>
      <Text style={styles.textBackground}>ASH Eats</Text>
      <Pressable style={styles.buttonStyle_1} onPress={() => navigation.navigate('SendingData')}>
        <Text style={styles.buttonText}>ORDER HERE</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle_0} onPress={() => navigation.navigate('KennysPage')}>
        <Text style={styles.buttonText}>DELIVERIES (KENNY)</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'calibri' : require('./fonts/calibri.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="KennysPage" component={KennysPage}/>
        <Stack.Screen name="OrdersPage" component={OrdersPage}/>
        <Stack.Screen name="LastPage" component={LastPage}/>
        <Stack.Screen name="TeaPage" component={TeaPage}/>
        <Stack.Screen name="CoffeePage" component={CoffeePage}/>
        <Stack.Screen name="OrdersComplete" component={OrdersComplete}/>
        <Stack.Screen name="OrdersToComplete" component={OrdersToComplete}/>
        <Stack.Screen name="SendingData" component={SendingData}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textBackground: {
    fontSize: 0.1 * windowWidth,
    color: '#322f2a',
  },
  buttonStyle_0: {
    width: '60%',
    height: windowHeight / 11,
    marginBottom: 20,
    backgroundColor: '#322f2a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle_1: {
    width: '60%',
    height: windowHeight / 11,
    marginBottom: 20,
    backgroundColor: '#c56729',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'calibri',
    color: 'white',
    fontSize: 0.035 * windowWidth,
    textAlign: 'center',
  },
});
