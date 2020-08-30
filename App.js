import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import LoadingScreen from './Screen/LoadingScreen';
import RegisterScreen from './Screen/RegisterScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>This is main screen</Text>
        
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Inicia Sesion"
              component={LoginScreen}
             />
            <Stack.Screen
              name="Registrate"
              component={RegisterScreen}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

function RegisterrScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});