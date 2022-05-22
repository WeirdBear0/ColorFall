import React, { useState, useRef, useEffect } from 'react';
import Constants from 'expo-constants';
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

const LandingPage = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((isEnabled) => !isEnabled);
  const [deviceID, setDeviceID] = useState('deviceID');
  var deviceIDNew = null;
  const getdeviceId = () => {
    var uniqueId = Constants.deviceId;
    deviceIDNew = uniqueId;
    console.log(deviceIDNew, 'DeviceID');
  };
  const [isLoaded] = useFonts({
    bebasNeue: require('../assets/fonts/BebasNeue-Regular.ttf'),
    nexa: require('../assets/fonts/NexaDemo-Light.ttf'),
    montserratBold: require('../assets/fonts/MontserratAlternates-Bold.ttf'),
    righteousFont: require('../assets/fonts/Righteous-Regular.ttf'),
  });
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  }, [fadeAnim]);
  const moveLeftAnim = useRef(new Animated.Value(-200)).current;
  useEffect(() => {
    Animated.timing(moveLeftAnim, {
      toValue: 0,
      duration: 1000,
    }).start();
  }, [moveLeftAnim]);
  const moveRightAnim = useRef(new Animated.Value(200)).current;
  useEffect(() => {
    Animated.timing(moveRightAnim, {
      toValue: 0,
      duration: 1000,
    }).start();
  }, [moveRightAnim]);
  const handleEasyPress = () => {
    props.navigation.navigate('PlayScreen');
    getdeviceId();
    //console.log(db.collection('playerData').doc('player_0e7824fd-6a18-4d0c-bee8-a712a30d9ff5').get('deviceID'));

    console.log(db.collection('playerData').doc(`player_${Constants.deviceId}` ));
    if (db.collection('playerData').doc(`player_${deviceIDNew}`).length > 0) {
      console.log('device exists');
    } else {
      console.log('device does not exist');
      db.collection('playerData')
        .doc(`player_${deviceIDNew}`)
        .set({ deviceID: deviceIDNew });
    }
  };
  const handleMediumPress = async () => {
    props.navigation.navigate('PlayScreen');
    getdeviceId();
    if (
      db.collection('playerData').where('deviceID', '==', deviceID) === true
    ) {
      console.log('device exists');
    } else {
      console.log('device does not exist');
      db.collection('playerData').add({ deviceID: deviceID });
    }
  };
  const handleHardPress = async () => {
    props.navigation.navigate('PlayScreen');
    getdeviceId();
    if (
      db.collection('playerData').where('deviceID', '==', deviceID) === true
    ) {
      console.log('device exists');
    } else {
      console.log('device does not exist');
      db.collection('playerData').add({ deviceID: deviceID });
    }
  };
  if (!isLoaded) {
    return (
      <SafeAreaView>
        <Image
          source={{ uri: '../assets/animations/94099-bouncing-ball.gif' }}
          style={styles.image}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FECD71', 'transparent']}
          style={styles.background}
        />
        <SafeAreaView
          style={{
            position: 'absolute',
            top: 30,
            left: 30,
          }}>
          <TouchableOpacity
            style={{ paddingTop: 20 }}
            onPress={() => {
              props.navigation.navigate('Settings');
            }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require('../assets/gear.png')}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Animated.Text
            style={{
              fontFamily: 'righteousFont',
              fontSize: 40,
              opacity: fadeAnim,
              paddingTop: 20,
            }}>
            Color Fall
          </Animated.Text>
        </View>
        <View style={styles.textView}>
          <Animated.View
            style={{ padding: 4, position: 'relative', left: moveLeftAnim }}>
            <TouchableOpacity
              style={styles.landingButton}
              onPress={() => {
                handleEasyPress();
              }}>
              <Text style={styles.textStyle}>Easy</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ padding: 4 }}>
            <TouchableOpacity
              style={styles.landingButton}
              onPress={() => {
                handleMediumPress();
              }}>
              <Text style={styles.textStyle}>Medium</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{ padding: 4, position: 'relative', left: moveRightAnim }}>
            <TouchableOpacity
              style={styles.landingButton}
              onPress={() => {
                handleHardPress();
              }}>
              <Text style={styles.textStyle}>Hard</Text>
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.toggleStyle}>
            <Text
              style={{
                fontFamily: 'bebasNeue',
                alignSelf: 'center',
                marginRight: 10,
                fontSize: 15,
              }}>
              RGB Mode
            </Text>
            <Switch
              trackColor={{ false: 'grey', true: '#F7B878' }}
              thumbColor={isEnabled ? 'white' : 'white'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};
var color = 'red';
var hexes = '0123456789ABCDEF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E27A8E',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  landingButton: {
    padding: 13,
    borderRadius: 7,
    borderWidth: 2,
    backgroundColor: '',
  },
  textView: {
    borderRadius: 5,
    background: '',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60,
    paddingBottom: 60,
  },
  textStyle: {
    fontFamily: 'montserratBold',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  toggleStyle: {
    alignSelf: 'center',
    padding: 10,
    background: 'white',
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
  },
  title: {
    fontFamily: 'righteousFont',
    fontSize: 40,
  },
  propsStyle: {},
});

export default LandingPage;
