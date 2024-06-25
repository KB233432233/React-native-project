import * as React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={welcomeStyles.container}>
    <Image source={require('../assets/little-lemon-logo.png')}
    resizeMode="contain"
    accessible={true}
    accessibilityLabel={'Little Lemon Logo'} 
    style={welcomeStyles.image}/>
    <Text style={welcomeStyles.text}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable onPress={() => navigation.navigate('Subscribe')} style={welcomeStyles.button}>
      <Text style={welcomeStyles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  },
  image: {
    height: 200,
    borderRadius: 20,
  },
  text: {
    paddingVertical: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 40
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#495E57',
    width: '90%',
    position: 'absolute',
    bottom: 20
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 15
  }
})

export default WelcomeScreen;
