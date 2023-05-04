import {AsyncStorage} from 'react-native';
import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../../styles/style';

function Login({navigation}) {
    const loadScene = ( ) => {
      navigation.navigate('Registration');
    }
    return <SafeAreaView>
              <Text style = {gStyle.title}>Go login!</Text>
              <Button title='Next page' onPress={loadScene}/>
    </SafeAreaView>
};

 export default Login;
