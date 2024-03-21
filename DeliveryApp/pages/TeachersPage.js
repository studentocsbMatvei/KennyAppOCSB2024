import * as React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, TextInput, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TeachersPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}><b>What is your room number?</b></Text>


            <TextInput
                style={styles.textStyle2}
                placeholder='Press to Type...'
            />
               
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('OrdersPage')}>
                <Text style={styles.buttonText}>
                    ORDER HERE
                </Text>
            </Pressable>
            <Pressable style={styles.buttonStyle_1} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText_1}>
                    BACK
                </Text>
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
        gap: 30,
    },
    textStyle: {
        fontSize: windowWidth * 0.04,
        color: '#322f2a',
    },
    textStyle2: {
        fontSize: windowWidth * 0.03,
        color: '#a19f9a',
        fontFamily: 'Refsan',


    },
    buttonText: {
        fontSize: windowWidth * 0.02,
        textAlign: 'center',
        color: 'white',
    },
    buttonStyle: {
        width: '60%',
        height: windowHeight / 8,
        marginBottom: 20,
        backgroundColor: '#c56729',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle_1: {
        width: '60%',
        height: windowHeight / 8,
        marginBottom: 20,
        backgroundColor: '#322f2a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText_1: {
        fontSize: windowWidth * 0.02,
        textAlign: 'center',
        color: 'white',
    }
});