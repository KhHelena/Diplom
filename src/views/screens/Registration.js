import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { gStyle } from '../../../styles/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../components/imput';

 function Registration({navigation}) {
  const loadScene = ( ) => {
    navigation.navigate('HomeScreen');
  }
  return (
    <SafeAreaView style = {gStyle.non}>
      <ScrollView contentContainerStyle ={gStyle.conteiner}>
      <Text style = {gStyle.title}>Register</Text>
      <Text style = {gStyle.text}>Enter your details to register!</Text>
      <View style={{marginVertical: 20}}> 
      <Input label={"Email"}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
export default Registration;