import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function KennysPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>Your Completed Orders</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'column',
        gap: 30,
    },
    titleTextStyle: {
        fontSize: windowWidth * 0.06,
        color: 'black',
    },
});