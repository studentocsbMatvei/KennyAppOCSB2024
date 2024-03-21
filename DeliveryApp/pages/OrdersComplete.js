import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderCompleteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Order is Complete!✅</Text>
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
  text: {
    fontSize: windowWidth * 0.08,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },

});

