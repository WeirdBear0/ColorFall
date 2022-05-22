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
  Easing,
  SafeAreaView,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppLoading } from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@use-expo/font';
import LottieView from 'lottie-react-native';
import Play from './Play';
import '@react-navigation/native';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import db from '../config';

const Settings = (props) => {
  const [isLoaded] = useFonts({
    bebasNeue: require('../assets/fonts/BebasNeue-Regular.ttf'),
    nexa: require('../assets/fonts/NexaDemo-Light.ttf'),
    montserratBold: require('../assets/fonts/MontserratAlternates-Bold.ttf'),
    righteousFont: require('../assets/fonts/Righteous-Regular.ttf'),
    ralewayFont: require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
  });
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const toggleDarkModeSwitch = () =>
    setIsDarkModeEnabled((isDarkModeEnabled) => !isDarkModeEnabled);

  const [isContrastModeEnabled, setIsContrastModeEnabled] = useState(false);
  const toggleContrastModeSwitch = () =>
    setIsContrastModeEnabled((isContrastModeEnabled) => !isContrastModeEnabled);

  const [isRgbModeEnabled, setIsRgbModeEnabled] = useState(false);
  const toggleRgbModeSwitch = () =>
    setIsRgbModeEnabled((isRgbModeEnabled) => !isRgbModeEnabled);

  if (!isLoaded) {
    return <SafeAreaView></SafeAreaView>;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FECD71', 'transparent']}
          style={styles.background}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.switchView}>
            <Text style={{ paddingRight: 5 }}>
              Dark Mode
              <TouchableOpacity
                onPress={() => {
                  Platform.OS === 'android'
                    ? ToastAndroid.show(
                        'Dark Mode turns the screen to a dark theme that is easy on the eyes.',
                        ToastAndroid.SHORT
                      )
                    : Alert.alert(
                        'Dark Mode turns the screen to a dark theme that is easy on the eyes.'
                      );
                }}>
                <Image
                  source={require('../assets/info.png')}
                  style={{ height: 15, width: 15 }}
                />
              </TouchableOpacity>
            </Text>
            <Switch
              trackColor={{ false: 'grey', true: '#F7B878' }}
              thumbColor={isDarkModeEnabled ? 'white' : 'white'}
              onValueChange={toggleDarkModeSwitch}
              value={isDarkModeEnabled}
            />
          </View>
          <View style={styles.switchView}>
            <Text style={{ paddingRight: 5 }}>
              High Contrast Mode
              <TouchableOpacity
                onPress={() => {
                  Platform.OS === 'android'
                    ? ToastAndroid.show(
                        'High Contrast colors for more visibility',
                        ToastAndroid.SHORT
                      )
                    : Alert.alert('High Contrast colors for more visibility');
                }}>
                <Image
                  source={require('../assets/info.png')}
                  style={{ height: 15, width: 15 }}
                />
              </TouchableOpacity>
            </Text>
            <Switch
              trackColor={{ false: 'grey', true: '#F7B878' }}
              thumbColor={isContrastModeEnabled ? 'white' : 'white'}
              onValueChange={toggleContrastModeSwitch}
              value={isContrastModeEnabled}
            />
          </View>
          <View style={styles.switchView}>
            <Text style={{ paddingRight: 5 }}>
              RGB Mode
              <TouchableOpacity
                onPress={() => {
                  Platform.OS === 'android'
                    ? ToastAndroid.show(
                        'Select the RGB Value of the falling colors instead of the name of the color.',
                        ToastAndroid.SHORT
                      )
                    : Alert.alert(
                        'Select the RGB Value of the falling colors instead of the name of the color.'
                      );
                }}>
                <Image
                  source={require('../assets/info.png')}
                  style={{ height: 15, width: 15 }}
                />
              </TouchableOpacity>
            </Text>
            <Switch
              trackColor={{ false: 'grey', true: '#F7B878' }}
              thumbColor={isRgbModeEnabled ? 'white' : 'white'}
              onValueChange={toggleRgbModeSwitch}
              value={isRgbModeEnabled}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('LandingPage');
            }}
            style={styles.buttonStyle}>
            <Text style={{ color: 'white' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E27A8E',
  },
  switchView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 25,
    paddingTop: 50,
    paddingBottom: 50,
  },
  buttonStyle: {
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'ralewayFont',
    fontSize: 30,
    color: 'black',
    padding: 10,
  },
});

export default Settings;
