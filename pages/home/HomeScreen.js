import React, { useState, useEffect } from 'react';
import { VirtualizedList, ScrollView } from "react-native"
import { View, Text, Heading, Center, Box, Stack, List, Avatar, Image, HStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { padding } from 'styled-system';

function HomeScreen() {

    useEffect(() => {
    }, [])


    const DATA = [];

    const getItem = (_data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`,
    })

    const getItemCount = (_data) => 20

    const ThingItem = ({ item }) => (
        <Stack direction="column" mr={3}>
        <Image
            size="12"
            alt="fallback text"
            borderRadius={100}
            bg="gray.100"
            source={{
                uri: "https://cdn-icons.flaticon.com/png/512/2839/premium/2839793.png?token=exp=1634984836~hmac=09dd189aec75770d2bd2d78165d8e8e1",
            }}
            
            fallbackSource={{
                uri: "https://www.w3schools.com/css/img_lights.jpg",
            }}
        />
        <Text mx="auto">S</Text>
    </Stack>
    )
    const Item2 = ({ title }) => (
        <List.Item
            bg="white"
            borderRadius="md"
            rounded="2xl"
            height={150}
            p={1}
            pb={3}
            pt={3}
            mb={3}

        >
            <Stack direction="column" w="100%">
                    <Text mb={3}>Тамара Семенівна, 83 роки</Text>
                   
                    <ScrollView horizontal={true}>
                        
                    <ThingItem/>
                    <ThingItem/>
                    <ThingItem/>
                    <ThingItem/>
                    
                    </ScrollView>
                    
                    <Text
                        color="coolGray.600"
                        _dark={{
                            color: "warmGray.200",
                        }}
                        fontWeight="400"
                        fontSize="2xs"
                    >
                        6 хвилин тому
                    </Text>
            </Stack>
        </List.Item>
    )


    return (
        <Box flex={1} mx="auto">

            <VirtualizedList
                style={{ padding: 10 }}
                data={DATA}
                renderItem={({ item, index }) => {
                    if (index == 0) {
                        console.log("sdf");
                        return <Box
                            p={3}
                            rounded="2xl"
                            bg="white"
                            mt={8}

                        >
                            <Heading size="md"><Ionicons name="map" size={18}></Ionicons> Віднести речі</Heading>
                            <Text mt={1}>Переглянь карту найближчих пунктів збору речей твого міста.</Text>
                        </Box>
                    }
                    else if (index == 1) {
                        return <Box
                            p={3}
                            rounded="2xl"
                            bg="white"
                            mt={3}
                            mb={8}
                        >
                            <Heading size="md"><Ionicons name="body" size={18}></Ionicons> Допомогти</Heading>
                            <Text mt={1}>Дозволь системі підібрати потребуючого якому знадобиться саме твоя річ.</Text>
                        </Box>
                    }

                    else if (index == 2) {
                        return <Heading size="md" mb={3} ml={3}>Активні запити</Heading>
                    }
                    else {
                        return <Item2 />
                    }
                }}
                keyExtractor={(item) => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            />

        </Box>
    )
}

export default HomeScreen