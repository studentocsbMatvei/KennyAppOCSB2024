import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, TextInput } from 'react-native';
import axios from 'axios';

const API_URL = "http://10.13.21.17:5000/api/accept_data";

export default function SendingData({navigation}) {
    const [number, setNumber] = useState(null);

    const handleInput = (input) => {
        setNumber(input);
    }
    const handleSubmit = () => {
        alert('You entered: ' + number);
    }
    return (
        <View>
            <TextInput onChangeText={handleInput} value={number}/>
            <Button title='Submit' onPress={handleSubmit} />
        </View>
    );
}