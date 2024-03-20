import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderSummaryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </Pressable>

      <Text style={styles.header}>HERE'S WHAT YOU ORDERED</Text>

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

      <Pressable style={styles.completeOrderButton}>
        <Text style={styles.completeOrderButtonText}>COMPLETE ORDER</Text>
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
    alignSelf: 'flex-start', 
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
  },
  header: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: windowWidth * 0.04,
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
    fontSize: windowWidth * 0.04,
  },
});

