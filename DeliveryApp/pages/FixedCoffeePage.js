import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import  { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions, Checkbox, Button, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SimplifiedCoffeePage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textStyle}>ORDER COFFEE INFO</Text>
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>YOUR NAME</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="enter your name" 
                    />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>YOUR EMAIL</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="enter your email" 
                    />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>ROOM NUMBER</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="enter room number" 
                    />
            </View>
            <Text style={styles.label}>DELIVERY TIME</Text>
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.input} 
                    placeholder="choose delivery time" 
                />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>COMMENTS</Text>
                    <TextInput
                        style={styles.inputLarge} multiline={true} placeholder="E.g., How would you like your coffee? If selected food what do you want?"
                    />
            </View>

            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>BACK</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      paddingTop: windowHeight * 0.1,
    },
    
    inputContainer: {
  
      padding: 20,
    },
   
    // backButton: {
    //   width: '60%',
    //   height: windowHeight / 11,
    //   marginBottom: 10,
    //   backgroundColor: '#322f2a',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   padding: 10,
    //   borderRadius: 5,
    //   position: 'absolute',
    //   bottom: 10,
    // },
    // backButtonText: {
    //   color: 'white',
    //   fontSize: windowWidth * 0.02,
    //   allignItems: 'center',
    // },
    header: {
      fontSize: windowWidth * 0.02,
      marginBottom: 20,
    },
    inputGroup: {
      marginBottom: 15,
    },
    label: {
      fontSize: windowWidth * 0.02,
      marginBottom: 10,
      marginTop: 10, 
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginBottom: 5,
      fontStyle: 'italic',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: 'black',
      marginRight: 5,
    },
    checkboxLabel: {
      marginRight: 10,
      marginBottom: 0, 
    },
    inputSmall: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      width: 100,
      fontStyle: 'italic',
    },
    inputLarge: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      height: 50,
      textAlignVertical: 'top', 
      fontStyle: 'italic',
    },
    completeOrderButton: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    completeOrderButtonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: windowWidth * 0.02,
    },
    headerContainer: {
      width: '100%',
      backgroundColor: '#c56729',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      paddingVertical: 15,
      marginBottom: 20,
      padding: 0,
    },
    textStyle: {
      fontSize: windowWidth * 0.05,
      color: 'white',
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
      bottom: 20,
      position: 'absolute',
  
    },
    backButtonText: {
      fontSize: windowWidth * 0.03,
      color: 'white',
    },
    
  });
  
  