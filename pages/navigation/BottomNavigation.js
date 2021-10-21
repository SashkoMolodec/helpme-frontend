import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Heading, Center, Box, Stack, SearchIcon } from "native-base";

import HomeScreen from '../home/HomeScreen';
import AddScreen from '../add/AddScreen';
import ProfileScreen from '../profile/ProfileScreen';

import { Ionicons } from "@expo/vector-icons";
import HelpIcon from '../../components/icons/HelpIcon';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Допомогти" component={HomeScreen} options={{
        title: 'Допомогти',
        headerTitleStyle: {
          opacity: 0
        },
        headerLeft: () => (
          <Heading ml="3" >поділись!</Heading>
        ),
        headerRight: () => (
          <SearchIcon
            size="5"
            m="3"
          />
        ),
        tabBarIcon: () => (
          <HelpIcon/>
        )
      }} />
      <Tab.Screen name="Додати річ" component={AddScreen} options={{

        tabBarIcon: () => (
          <Ionicons name="add" size={32}></Ionicons>
        )
      }} />
      <Tab.Screen name="Профіль" component={ProfileScreen} options={{

        tabBarIcon: () => (
          <Ionicons name="person" size={24}></Ionicons>
        )
      }} />
    </Tab.Navigator>
  );

}
export default BottomNavigation;