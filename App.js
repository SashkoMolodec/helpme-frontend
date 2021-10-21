import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from 'native-base';

import BottomNavigation from './pages/navigation/BottomNavigation';
import WelcomeScreen from './pages/authorization/WelcomeScreen';
import RegisterFirstStepScreen from './pages/authorization/register/RegisterFirstStepScreen';
import RegisterSecondStepScreen from './pages/authorization/register/RegisterSecondStepScreen';
import LoginScreen from './pages/authorization/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerTitle: "поділись!"}}/>
          <Stack.Screen name='RegisterFirstStepScreen' component={RegisterFirstStepScreen} options={{headerTitle: "Контактні дані"}}/>
          <Stack.Screen name='RegisterSecondStepScreen' component={RegisterSecondStepScreen} options={{headerTitle: "Дані для входу"}}/>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerTitle: "Сторінка логіну"}}/>
          <Stack.Screen name='BottomNavigation' component={BottomNavigation} options = {{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}