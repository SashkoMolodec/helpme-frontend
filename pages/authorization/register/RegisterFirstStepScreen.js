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
    Stack,
    NumberInput,
    NumberInputField
  } from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';


function RegisterFirstStepScreen({navigation, route}) {

  const [formData, setData] = React.useState({});
  const [date, setDate] = useState(new Date(1598051730000));


  useEffect(() => {
    setData({ ...formData, role: route.params.role})
  }, [])

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setData({ ...formData, birthDate: currentDate.toJSON()});
  };


  console.log(formData);

    return (
              <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          Контактні дані
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Заповніть поля, щоб продовжити.
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
      
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Ім'я
            </FormControl.Label>
            <Input onChangeText={(value) => setData({ ...formData, name: value })} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Прізвище
            </FormControl.Label>
            <Input onChangeText={(value) => setData({ ...formData, surname: value })} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Дата народження
            </FormControl.Label>
            <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }} onPress={() => navigation.navigate('RegisterSecondStepScreen', {formData: formData})}>
            Продовжити
          </Button>
        </VStack>
      </Box>
    )
}

export default RegisterFirstStepScreen