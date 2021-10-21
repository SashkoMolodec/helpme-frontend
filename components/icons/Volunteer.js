import React, { useState, useEffect } from 'react';
import { Button, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { View, Text, Heading, Center, Image } from "native-base"

function VolunteerIcon() {
    return (
      <Image
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/5348/5348551.png",
      }}
      alt="Волонтер"
      size="2xs"
      >
      </Image>
    )
}

export default VolunteerIcon