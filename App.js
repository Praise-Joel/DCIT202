import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './screens/login';
import home from './screens/home'

export default function App() {
  const MainNavigator =createStackNavigator();

  
  }
  return (
    <view>
     <NavigationContainer>
       <MainNavigator.Navigator>
     <MainNavigator.Screen name= "login"component ={login}/>
     <MainNavigator.Screen name= "home" component ={home}/>
      </MainNavigator.Navigator>
  
      
     </NavigationContainer>

    </view>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
 
});
