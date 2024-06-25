import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Alert, Pressable} from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState('');
  const [buttonDisableStatus, setButtonDisabled] = useState(true);

  const emailValidation = (email) => {
    onChangeEmail(email);
    if (validateEmail(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  return <View style={subscribeStyles.container}>
    <Image source={require('../assets/little-lemon-logo-grey.png')}
    resizeMode="contain"
    accessible={true}
    accessibilityLabel={'Little Lemon Logo'} 
    style={subscribeStyles.image}/>
    <Text style={subscribeStyles.text}>Susbcribe to our newsletter for our latest delicious recipes!</Text>
    <TextInput style={subscribeStyles.inputBox}
        value={email}
        onChangeText={(email) => emailValidation(email)}
        placeholder={'email'}
        keyboardType={'email-address'} />
    <Pressable disabled={buttonDisableStatus} onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")} style={[subscribeStyles.button, buttonDisableStatus && subscribeStyles.buttonDisable]}>
      <Text style={subscribeStyles.buttonText}>Subscribe</Text>
    </Pressable>

  </View>;
};

const subscribeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30
  },
  image: {
    height: 150,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 40,
    padding: 30
  },
  inputBox: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    width:"85%",
    borderRadius: 4,
    color: 'grey'
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#495E57',
    width: '85%',
    borderRadius: 4
  },
  buttonDisable: {
    backgroundColor: 'grey'
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 15
  }
})

export default SubscribeScreen;
