import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Switch,
  Animated,
  SafeAreaView,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppLoading } from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@use-expo/font';
import LottieView from 'lottie-react-native';

const Play = (props) => {
  return (
    <SafeAreaView style = {styles.playContainer}>
      <Text></Text>
      <TouchableOpacity
        onPress={() => {
          console.log('clicked');
          props.navigation.navigate('LandingPage');
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/play_button-removebg-preview.png')}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  playContainer : {
    alignItems : "center"
  }
});

export default Play;
