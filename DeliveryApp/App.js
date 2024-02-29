import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import KennysPage from './pages/KennysPage';
import TeachersPage from './pages/TeachersPage';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    padding: 42,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 80,
  },
  textBackground: {
    fontSize: 60,
    color: 'black',
    fontFamily: 'monospace',
  },
  buttonStyle_1: {
    width: windowWidth / 3.4,
    height: windowHeight / 9.5,
    backgroundColor: '#1c1b1b',
    cursor: 'pointer',
  },
  buttonStyle_2: {
    width: windowWidth / 3.4,
    height: windowHeight / 9.5,
    backgroundColor: '#e66c02',
    cursor: 'pointer',
  },
  buttonText_1: {
    color: 'white',
    fontSize: windowWidth / 34,
    marginTop: 13,
    fontFamily: 'fantasy',
    textAlign: 'center',
  },
  buttonText_2: {
    color: 'white',
    fontSize: windowWidth / 34,
    marginTop: 13,
    fontFamily: 'fantasy',
    textAlign: 'center',
  },
  pressedButton: {
    backgroundColor: 'black',
    borderRadius: 4,
  },
});
