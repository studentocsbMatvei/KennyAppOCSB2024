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
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textBackground: {
    fontSize: 0.1 * windowWidth,
    color: 'black',
    fontFamily: 'monospace',
  },
  buttonStyle_0: {
    width: '80%',
    height: windowHeight / 8,
    marginBottom: 20,
    backgroundColor: '#F96E1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle_1: {
    width: '80%',
    height: windowHeight / 8,
    marginBottom: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 0.03 * windowWidth,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});
