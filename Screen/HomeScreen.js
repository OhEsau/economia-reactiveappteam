import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

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