import React, { useState, useEffect } from 'react';
import { Button, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { View, Text, Heading, Center } from "native-base"

function WelcomeScreen() {

    useEffect(() => {
    }, [])

    return (
        <View>
            <Heading>
                A component library for the{" "}
                <Heading color="emerald.400">React Ecosystem</Heading>
            </Heading>
            <Text pt="5">
                NativeBase is a simple, modular and accessible component library that
                gives you building blocks to build you React applications.
            </Text>
        </View>
    )
}

export default WelcomeScreen