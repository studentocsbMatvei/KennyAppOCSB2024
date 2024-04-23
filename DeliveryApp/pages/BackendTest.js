import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions } from 'react-native';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/data";

export default function BackendTest({navigation}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setData(response.data.message);
        } catch (error) {
            console.error("There is a problem with loading the data: ", error);
        }
    };
    return (
        <View>
            <Text>
                {data ? data: 'Loading...'}
            </Text>
        </View>
    )
}