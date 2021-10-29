import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default {
   
     storeToken: async (value) => {
        try {
            await AsyncStorage.setItem('userToken', value)
            console.log('Successfull login. Your token is:', value);
        } catch (err) {
            console.log("error during storing token")
        }
    },

    getToken: async () => {
        try {
            const token = await AsyncStorage.getItem('userToken')
            return token;
        } catch (err) {
            console.log('error during getting token')
        }
    },

    removeToken: async () => {
        try {
            await AsyncStorage.removeItem('userToken')
            console.log('your token has been removed')
        } catch (err) {
            console.log('error during removing token')
        }
    }
}