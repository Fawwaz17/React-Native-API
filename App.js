/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View
    behavior="padding"
    style={styles.Wrapper}>
      <TextInput
      placeholder='Email'
      underlineColorAndroid='white'
      placeholderTextColor='white'
      style={[styles.inputField1]}/>

      <TextInput
      placeholder='Password'
      underlineColorAndroid='white'
      placeholderTextColor='white'
      secureTextEntry={true}
      style={styles.inputField}/>

      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.textsize]}>Sign in</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  inputField1: {
    width: 280,
    color: 'white',
    borderColor: 'white',
    marginTop : 200,
    },
  inputField: {
    width: 280,
    color: 'white',
    borderColor: 'white',
    marginTop: 5
    },
  Wrapper : {
    flex:1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: '#4f81c7'
    },
  text :{
    color: 'blue',
    fontSize: 23
    },
  textsize : {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  button : {
    display: 'flex',
    marginTop : 35,
    height: 50,
    width : 150,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#226b80',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  }
});

export default App;
