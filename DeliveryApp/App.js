import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useFonts} from 'expo-font';

import KennysPage from './pages/KennysPage';
import TeachersPage from './pages/TeachersPage';

import axios from 'axios';
import OrdersPage from './pages/OrdersPage';
import LastPage from './pages/LastPage';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/ASH-logo.png')}/>
      <Text style={styles.textBackground}>ASH Eats</Text>
      <Pressable style={styles.buttonStyle_0} onPress={() => navigation.navigate('KennysPage')}>
        <Text style={styles.buttonText}>DELIVERIES (KENNY)</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle_1} onPress={() => navigation.navigate('TeachersPage')}>
        <Text style={styles.buttonText}>ORDER HERE</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Impact' : require('./fonts/impact.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="KennysPage" component={KennysPage}/>
        <Stack.Screen name="TeachersPage" component={TeachersPage}/>
        <Stack.Screen name="OrdersPage" component={OrdersPage}/>
        <Stack.Screen name="LastPage" component={LastPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 42,
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textBackground: {
    fontSize: 0.1 * windowWidth,
    color: 'black',
  },
  buttonStyle_0: {
    width: '90%',
    height: windowHeight / 8,
    marginBottom: 20,
    backgroundColor: '#F96E1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle_1: {
    width: '90%',
    height: windowHeight / 8,
    marginBottom: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Impact',
    color: 'white',
    fontSize: 0.04 * windowWidth,
    textAlign: 'center',
  },
});
