import React, { useState, useEffect } from 'react';
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
    Pressable
  } from 'native-base';

  import { Ionicons } from "@expo/vector-icons";

import HelpIcon from '../../components/icons/HelpIcon';
import VolunteerIcon from '../../components/icons/Volunteer';
import ShakeHandsIcon from '../../components/icons/ShakeHandsIcon';

import { roles } from '../../constants';

function WelcomeScreen ({navigation}) {

    const [rolePressed, setRolePressed] = useState(0);

    const primaryColor = "indigo.500";

    useEffect(() => {
    }, [])

    return (
        <Box safeArea flex={1} p="2" w="95%" mx="auto" py="8">
        <Heading size="xl" pl="2" color="coolGray.800" fontWeight="600">
          Вітаємо!
        </Heading>
        <Heading mt="1" pl="2" color="coolGray.600" fontWeight="medium" size="sm">
          Чому ви тут?
        </Heading>

        <VStack space={3} mt="5">
        <Pressable
            onPress={() => {
                setRolePressed(roles.HELPER_ROLE)
        }}
        >
            <Box
             borderColor={rolePressed == roles.HELPER_ROLE ? primaryColor : 'transparent'}
             borderWidth = {1}
             rounded="2xl"
             p = {2}
            >        
                        <Heading height ="30"><ShakeHandsIcon/>  Хочу допомогти</Heading>
                        <Text>У вас буде можливість заносити в додаток речі, якими ви хочете поділитись. Після чого ви зможете швидко віднайти потребуючого.</Text>
            </Box>
        </Pressable>

        <Pressable
            onPress={() => {
                setRolePressed(roles.SEEKER_ROLE)
        }}
        >
            <Box 
               borderColor={rolePressed == roles.SEEKER_ROLE ? primaryColor : 'transparent'}
               borderWidth = {1}
               rounded="2xl"
               p = {2}
            >        
                        <Heading height ="30"><HelpIcon/>  Потрібна допомога</Heading>
                        <Text>Ви зможете створювати запити на речі, які вам життєво необхідні і в найкоротший час їх знаходити.</Text>
            </Box>
        </Pressable>

        <Pressable
            onPress={() => {
                setRolePressed(roles.VOLUNTEER_ROLE)
        }}
        >
            <Box 
              borderColor={rolePressed == roles.VOLUNTEER_ROLE ? primaryColor : 'transparent'}
              borderWidth = {1}
              rounded="2xl"
              p = {2}
            >       
                        <Heading height ="30"
                        ><VolunteerIcon/>  Я волонтер</Heading>
                        <Text>Від імені вашої організації ви зможете створювати запити на набір необхідних речей, заносити в додаток інформацію про нужденних і їхні запити.</Text>
            </Box>
        </Pressable>
          
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }} onPress={() => navigation.navigate('RegisterFirstStepScreen', {role: rolePressed})}>
          Продовжити
        </Button>

          <HStack mt="1" justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            Я вже зареєстрований.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="#">
            Увійти
          </Link>
        </HStack>
        </VStack>
      </Box>
    )
}

export default WelcomeScreen