import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import KennysPage from './pages/KennysPage';
import TeachersPage from './pages/TeachersPage';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBackground}>ASH Eats</Text>
      <Pressable style={styles.buttonStyle_2} onPress={() => navigation.navigate('KennysPage')}>
        <Text style={styles.buttonText_2}>DELIVERIES (KENNY)</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle_1} onPress={() => navigation.navigate('TeachersPage')}>
        <Text style={styles.buttonText_1}>ORDER HERE</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="KennysPage" component={KennysPage}/>
        <Stack.Screen name="TeachersPage" component={TeachersPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBackground: {
    position: 'absolute',
    top: 70,
    left: 610,
    fontSize: 60,
    color: 'black',
    fontFamily: 'monospace',
  },
  buttonStyle_1: {
    position: 'absolute',
    top: 200,
    left: 540,
    width: 450,
    height: 80,
    backgroundColor: '#1c1b1b',
    cursor: 'pointer',
  },
  buttonStyle_2: {
    position: 'absolute',
    left: 540,
    top: 340,
    width: 450,
    height: 80,
    backgroundColor: '#e66c02',
    cursor: 'pointer',
  },
  buttonText_1: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    top: 13,
    left: 110,
    fontFamily: 'fantasy',
  },
  buttonText_2: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    top: 13,
    left: 90,
    fontFamily: 'fantasy',
  },
  pressedButton: {
    backgroundColor: 'black',
    borderRadius: 4,
  },
});
