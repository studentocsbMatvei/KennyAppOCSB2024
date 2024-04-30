import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, TextInput } from 'react-native';
import axios from 'axios';

const API_URL = "http://10.13.21.17:5000/api/data";

export default function SendingData({navigation}) {
    return (
        <View>
            <Text>That's a page for sending data to the server!</Text>
            <TextInput placeholder='enter something in here'/>
        </View>
    );
}