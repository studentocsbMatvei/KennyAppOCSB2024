import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function KennysPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Welcome,</Text>
            <Text style={styles.textStyle}>Kenny!</Text>
            <Pressable style={styles.buttonStyle}>
                <Text style={styles.buttonText}>ORDERS TO COMPLETE</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle}>
                <Text style={styles.buttonText}>COMPLETED ORDERS</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    textStyle: {
        fontSize: windowWidth * 0.1,
        color: 'black',
    },
    buttonText: {
        fontSize: windowWidth * 0.03,
        textAlign: 'center',
    },
    buttonStyle: {
        width: '80%',
        height: windowHeight / 8,
        marginBottom: 20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
});