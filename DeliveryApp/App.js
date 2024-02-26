import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBackground}>Choose if you are Kenny or teacher</Text>
      <Button title="I am Kenny"/>
      <Button title="I am a teacher"/>
      <StatusBar style="auto" />
    </View>
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
    fontFamily: 'courier',
  },
});
