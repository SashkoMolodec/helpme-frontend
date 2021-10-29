import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider,
    View,
    Stack
  } from 'native-base';
import { Ionicons } from "@expo/vector-icons";

import { roles } from '../../../constants';
import LoginService from '../../../service/LoginService';

function RegisterSecondStepScreen({navigation, route}) {

  const [formData, setData] = React.useState({});

  useEffect(() => {
    setData(route.params.formData);
  }, [])

  const redirectToLastRegisterStepScreen = (navigation) => {
    if (formData.role == roles.HELPER_ROLE) LoginService.register(formData, navigation.navigate('BottomNavigation'));
    if (formData.role == roles.SEEKER_ROLE) console.log("redirecting to seeker registerting page");
    if (formData.role == roles.VOLUNTEER_ROLE) console.log("redirecting to volunteer registering page"); 
}

    return (
              <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          Практично закінчили!
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Заповніть й запам'ятайте важливі поля для майбутнього входу в додаток.
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Номер телефону
            </FormControl.Label>
            <Input onChangeText={(value) => setData({ ...formData, phone: value })}/>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Пароль
            </FormControl.Label>
            <Input type="password" onChangeText={(value) => setData({ ...formData, password: value })}/>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Підтвердіть пароль
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }} onPress={() => redirectToLastRegisterStepScreen(navigation)}>
            Зареєструватись
          </Button>
        </VStack>
      </Box>
    )
}

export default RegisterSecondStepScreen