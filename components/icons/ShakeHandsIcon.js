import React, { useState, useEffect } from 'react';
import { Button, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { View, Text, Heading, Center, Image } from "native-base"

function ShakeHandsIcon() {
    return (
      <Image
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/3728/3728434.png",
      }}
      alt="Допомога"
      size="2xs"
      >
      </Image>
    )
}

export default ShakeHandsIcon