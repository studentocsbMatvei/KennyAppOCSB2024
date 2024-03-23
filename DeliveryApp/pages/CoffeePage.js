import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import  { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions, Checkbox, Button, Alert } from 'react-native';
import emailjs from '@emailjs/browser';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderSummaryScreen({navigation}) {
  const [room_number, setRoomNumber] = useState('');
  const [delivery_time, setDeliveryTime] = useState('');
  const [comments, setComments] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [order_name, setOrderName] =useState('');
  const [order_email, setOrderEmail] =useState('');

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    console.log("called: ", room_number, delivery_time, order_name, order_email)

    // EmailJS serviceId, templateId, publicKey
    const serviceId = 'service_3wx6ncc';
    const templateId = 'template_21l55hh';
    const orderedTemplateId = 'template_miiokxb';
    const publicKey = 'mJrUtk4BFYbqX5xJ3';

    var food = "NO"
    if (checked.toString()) { 
      food = "YES"
    }

    var templateParams = {
      ordered_by_name: order_name,
      ordered_by_email: order_email,
      room_number: room_number,
      order_type: 'COFFEE',
      add_food: food,
      delivery_time: delivery_time,
      comments: comments
    };

    // send email to Kenny
    emailjs.send(
      serviceId, 
      templateId, 
      templateParams,
      publicKey
    );

    //send email to ordered by email
    emailjs.send(
      serviceId, 
      orderedTemplateId, 
      templateParams,
      publicKey
    );
        // reset values
        setOrderName('');
        setOrderEmail('');
        setRoomNumber('');
        food = "NO";
        setDeliveryTime('');
        setComments('');
        navigation.navigate('OrdersComplete')

  }

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>ORDER COFFEE INFO</Text>
      </View>



      <View style={styles.inputContainer}>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}><b>YOUR NAME</b></Text>
          <TextInput
            onChangeText={ (order_name) => {setOrderName(order_name)}}
            style={styles.input} 
            placeholder="enter your name" 
            />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}><b>YOUR EMAIL</b></Text>
          <TextInput
            onChangeText={ (order_email) => {setOrderEmail(order_email)}}
            style={styles.input} 
            placeholder="enter your email" 
            />
      </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}><b>ROOM NUMBER</b></Text>
          <TextInput
            onChangeText={ (room_number) => {setRoomNumber(room_number)}}
            style={styles.input} 
            placeholder="enter room number" 
           />

        </View>

        <View style={styles.inputGroup}>
          <View style={styles.checkboxContainer}>
            <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />

          <Text style={styles.checkboxLabel}> ADD FOOD</Text>
        </View>

        <Text style={styles.label}><b>DELIVERY TIME</b></Text>
        <View style={styles.inputGroup}>
          <TextInput
            onChangeText={ (delivery_time) => {setDeliveryTime(delivery_time)}}
            style={styles.input} 
            placeholder="choose delivery time" 
           />
  
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>COMMENTS</Text>
        <TextInput
          onChangeText={ (comments) => {setComments(comments)}}
          style={styles.inputLarge} multiline={true} placeholder="E.g., How would you like your coffee? If selected food what do you want?"
          />
        </View>
      </View>

      <Pressable style={styles.completeOrderButton} onPress={(handleSubmit) }> 
        <Text style={styles.completeOrderButtonText}>COMPLETE ORDER</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: windowHeight * 0.1,
  },
  
  inputContainer: {

    padding: 20,
  },
 
  // backButton: {
  //   width: '60%',
  //   height: windowHeight / 11,
  //   marginBottom: 10,
  //   backgroundColor: '#322f2a',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10,
  //   borderRadius: 5,
  //   position: 'absolute',
  //   bottom: 10,
  // },
  // backButtonText: {
  //   color: 'white',
  //   fontSize: windowWidth * 0.02,
  //   allignItems: 'center',
  // },
  header: {
    fontSize: windowWidth * 0.02,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 10,
    marginTop: 20,
  },
  label: {
    fontSize: windowWidth * 0.02,
    marginBottom: 10,
    marginTop: 10, 
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 5,
    fontStyle: 'italic',
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
    marginBottom: 0, 
  },
  inputSmall: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: 100,
    fontStyle: 'italic',
  },
  inputLarge: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 50,
    textAlignVertical: 'top', 
    fontStyle: 'italic',
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
    marginBottom: 30,
    padding: 0,
  },
  textStyle: {
    fontSize: windowWidth * 0.05,
    color: 'white',
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
    bottom: 10,
    position: 'absolute',

  },
  backButtonText: {
    fontSize: windowWidth * 0.03,
    color: 'white',
  },
  
});

