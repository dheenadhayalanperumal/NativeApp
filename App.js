import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';

export default function App() {
  
  const Stack = createNativeStackNavigator();



  return (

    
    <NavigationContainer>
    <Stack.Navigator>
     
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    
    </Stack.Navigator>
  </NavigationContainer>



  );
}