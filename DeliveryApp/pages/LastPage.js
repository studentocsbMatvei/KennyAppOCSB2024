import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderSummaryScreen({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>ORDER INFO</Text>
      </View>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </Pressable>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>ROOM NUMBER:</Text>
        <TextInput style={styles.input} placeholder="___________" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>PRIORITY</Text>
        <View style={styles.checkboxContainer}>
          <TextInput style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>ASAP</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TextInput style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Custom:</Text>
          <TextInput style={styles.inputSmall} placeholder="___________" />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>COMMENTS</Text>
        <TextInput style={styles.inputLarge} multiline={true} placeholder="E.g., How would you like your coffee? If ordered food what do you want?" />
      </View>

      <Pressable style={styles.completeOrderButton} onPress={() => navigation.navigate('OrdersComplete')}>
        <Text style={styles.completeOrderButtonText}>COMPLETE ORDER</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start', 
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
    position: 'absolute',
    bottom: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.02,
  },
  header: {
    fontSize: windowWidth * 0.02,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: windowWidth * 0.02,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 5,
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
  },
  inputSmall: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: 100,
  },
  inputLarge: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 100,
    textAlignVertical: 'top', 
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
  },
  textStyle: {
    fontSize: windowWidth * 0.05,
    color: 'white',
  },
});

