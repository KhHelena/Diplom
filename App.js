import React from 'react';
import Welcome from './src/views/screens/Welcome';
import Registration from './src/views/screens/Registration';
import Login from './src/views/screens/Login';
import HomeScreen from './src/views/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AsyncStorage} from 'react-native';


const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
         <Stack.Screen 
        name = "Welcome"
        component = {Welcome}
        /> 
        <Stack.Screen 
        name = "Login"
        component = {Login}
        />
        <Stack.Screen 
        name = "Registration"
        component = {Registration}
        />
        <Stack.Screen 
        name = "HomeScreen"
        component = {HomeScreen}
        />
    </Stack.Navigator>
</NavigationContainer>
  );
}
export default App;


