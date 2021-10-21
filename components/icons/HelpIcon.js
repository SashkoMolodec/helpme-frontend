import React, { useState, useEffect } from 'react';
import { Button, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { View, Text, Heading, Center, Image } from "native-base"

function HelpIcon() {
    return (
      <Image
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/620/620807.png",
      }}
      alt="Допомогти"
      size="2xs"
      >
      </Image>
    )
}

export default HelpIcon