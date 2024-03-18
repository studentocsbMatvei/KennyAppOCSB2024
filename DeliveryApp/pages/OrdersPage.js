import * as React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, TextInput, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrdersPage({navigation}) {
    return (
        <View>
            <Text>
                That's a page for orders!
            </Text>
        </View>
    )
}