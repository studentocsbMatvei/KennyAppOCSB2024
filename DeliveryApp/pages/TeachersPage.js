import * as React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, TextInput, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TeachersPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>What is your room number?</Text>
            <TextInput placeholder='Enter your room number'/>
            <Text style={styles.textStyle}>What do you want to order?</Text>
            <Pressable style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                    DRINK
                </Text>
            </Pressable>
            <Pressable style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                    FOOD
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
        color: 'black',
    },
    buttonText: {
        fontSize: windowWidth * 0.04,
        textAlign: 'center',
    },
    buttonStyle: {
        width: '80%',
        height: '10%',
        marginBottom: 20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle_1: {
        width: '80%',
        height: '10%',
        marginBottom: 20,
        backgroundColor: '#F96E1F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText_1: {
        fontSize: windowWidth * 0.04,
        textAlign: 'center',
        color: 'white',
    }
});