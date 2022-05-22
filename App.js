import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Card } from 'react-native-paper';
import LandingPage from './screens/LandingPage';
import Play from "./screens/Play"
import Settings from  './screens/Settings'
export default function App() {
  return <AppContainer />;
}
const StackNavigator = createStackNavigator({
  LandingPage: {
    screen: LandingPage,
    navigationOptions: {
      header: null,
    },
  },
  PlayScreen: {
    screen: Play,
    navigationOptions: {
      header: null,
    },
  },
  Settings : {
    screen : Settings,
    navigationOptions : {
      header : null
    }
  }
});
const AppContainer = createAppContainer(StackNavigator);
