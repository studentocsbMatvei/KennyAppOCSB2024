import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import KennysPage from './pages/KennysPage';

const Stack = createNativeStackNavigator();

function TeachersPage({navigation}) {
  return (
      <View>
          <Text style={styles.textBackground}>That is a page for Teachers!</Text>
      </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBackground}>Choose if you are Kenny or teacher</Text>
      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('KennysPage')}>
        <Text style={styles.buttonText}> I am Kenny</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('TeachersPage')}>
        <Text style={styles.buttonText}> I am a Teacher</Text>
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
    fontSize: 40,
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'georgia-bold',
  },
  buttonStyle: {
    backgroundColor: 'red',
    borderRadius: 4,
    cursor: 'pointer',
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
  pressedButton: {
    backgroundColor: 'black',
    borderRadius: 4,
  },
});
