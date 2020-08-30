import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './Screen/LoginScreen';
import LoadingScreen from './Screen/LoadingScreen';
import RegisterScreen from './Screen/RegisterScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Register"
          onPress={() => navigate('RegisterScreen')}
        />  
      </View>
    )
  } 
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Login: {
    screen: LoginScreen
  }
},{
  initialRouteName: "Home"        
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});