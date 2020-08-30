import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  Image, 
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.regform}>
        <Image
          style={styles.imageReg}
          source={{
            uri: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fmece.usb.ve%2Fregistro&psig=AOvVaw1_ux9voM1psLwXv43klds4&ust=1598831230076000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICZ6tTMwesCFQAAAAAdAAAAABAD'
          }}
         />
        <Text style={styles.header}>Bienvenidos</Text> 

        <TextInput style={styles.textinput} placeholder="Correo Electronico"
        underlineColorAndroid={'transparent'} />

        <TextInput style={styles.textinput} placeholder="Clave"
        secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TextInput style={styles.textinput} placeholder="Nombre"
        underlineColorAndroid={'transparent'} />

        <TextInput style={styles.textinput} placeholder="Apellido"
        unerlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.bttnReg}>
          <Text style={styles.bttnTxt}>Registrarse!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  imageReg: {
    position: 'absolute',
    width: 274,
    height: 189,
    left: 43,
    top: 50,
  },
  header: {
    left: 62,
    top: 243,
    fontFamily: 'Roboto',
    color: 'black',
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  bttnReg: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  bttnTxt: {
    color: '#fff',
    fontWeight: 'bold',
  }
});