import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function KennysPage({navigation}) {
  return (
    <View>
      <Text>
        That's a page for Kenny!
      </Text>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBackground}>Choose if you are Kenny or teacher</Text>
      <Button title="I am Kenny" onPress={() => navigation.navigate('KennysPage')}/>
      <Button title="I am a teacher"/>
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
    fontFamily: 'courier',
  },
});
