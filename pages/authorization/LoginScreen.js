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
    View
  } from 'native-base';
  
function LoginScreen() {

    return (
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
      <Heading size="lg" fontWeight="600" color="coolGray.800">
        Вітаємо!
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Увійдіть, щоб продовжити.
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Email
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Пароль
          </FormControl.Label>
          <Input type="password" />
          <Link
            _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
            alignSelf="flex-end"
            mt="1">
            Забули пароль?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
          Увійти
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            Я новий користувач.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="#">
            Зареєструватись
          </Link>
        </HStack>
      </VStack>
    </Box>
    )
}

export default LoginScreen