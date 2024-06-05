import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>SELECT YOUR ITEM</Text>
      </View>
      
      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('FixedCoffeePage')}>
        <Text style={styles.buttonText}>COFFEE</Text>
      </Pressable>

      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('TeaPage')}>
        <Text style={styles.buttonText}>TEA</Text>
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
    position: 'relative',
  },
  textStyle: {
    fontSize: windowWidth * 0.05,
    color: 'white',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    height: '10%',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: windowWidth * 0.03,
    marginLeft: 10,
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
  headerContainer: {
    width: '100%',
    backgroundColor: '#c56729',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    paddingVertical: 15,
  },
});
