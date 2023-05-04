import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { gStyle } from '../../../styles/style';


 function Welcome({navigation}) {
  const loadScene = ( ) => {
    navigation.navigate('Login');
  }
  return (
    <View style = {gStyle.non}>
      <Text style = {gStyle.title}>Welcome to Hipothron!</Text>
      <Button title='Next page' onPress={loadScene}/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Welcome;
