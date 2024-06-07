import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, TextInput } from 'react-native';
import axios from 'axios';

const API_URL = "http://10.13.20.16:5000/api/accept_data";

export default function SendingData({navigation}) {
    const [inputValue, setInputValue] = useState(null);

    const handlePostRequest = async () => {
        try {
            const response = await axios.post(API_URL, {data: inputValue});
            console.log(response.data);
        } catch (error) {
            console.error('Error occured: ', error);
        }
    };

    return (
        <View>
            <TextInput placeholder='enter your input in here' value={inputValue} onChangeText={(text) => setInputValue(text)}/>
            <Button title="submit" onPress={handlePostRequest}/>
        </View>
    )
}