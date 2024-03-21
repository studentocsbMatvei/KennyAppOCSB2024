import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>What would you like to order?</Text>
      
      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('LastPage')}>
        <Text style={styles.buttonText}>COFFEE</Text>
      </Pressable>

      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('LastPage')}>
        <Text style={styles.buttonText}>TEA</Text>
      </Pressable>

      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('LastPage')}>
        <Text style={styles.buttonText}>I Want Food</Text>
      </Pressable>

      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('LastPage')}>
        <Text style={styles.buttonText}>All of the above</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    height: '10%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: windowWidth * 0.03,
    marginLeft: 10,
  },
  backButton: {
    width: '80%',
    padding: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
  },
  backButtonText: {
    fontSize: windowWidth * 0.03,
    color: 'white',
  },

});
