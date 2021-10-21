import React, { useState, useEffect } from 'react';
import { Button, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { View, Text, Heading, Center, Box, Stack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {

    useEffect(() => {
    }, [])

    return (
        <View>
            <Box
                m={3}
                p={2}
                rounded="2xl"
                bg="white"
            >
                <Stack direction="row">
                    <Box>
                        <Ionicons name="body" size={42}></Ionicons>
                    </Box>
                    <Box
                        maxWidth="95%"
                    >
                        <Heading>Допомогти</Heading>
                        <Text>Дозволь системі підібрати потребуючого якому знадобиться саме твоя річ.</Text>
                    </Box>
                </Stack>
            </Box>

            <Heading>
                This is home screen
            </Heading>
        </View>
    )
}

export default HomeScreen