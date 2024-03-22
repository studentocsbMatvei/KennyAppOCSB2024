import * as React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderCompleteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Order is Complete!✅</Text>
      <Pressable style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.backButtonText}>BACK</Text>
      </Pressable>
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
  text: {
    fontSize: windowWidth * 0.08,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: '60%',
    height: windowHeight / 11,
    marginBottom: 20,
    backgroundColor: '#322f2a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
  },
  backButtonText: {
    fontSize: windowWidth * 0.03,
    color: 'white',
  },

});

