/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
// import StackRouter from './components/StackRouter';

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import AigcTabBar from '@/components/AigcTabBar';

import {theme} from '@/utils';
import {tabBars} from '@/utils/tabBar.config';
import StackRouter from '@/router/StackRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    // 'linear-gradient': require('expo-linear-gradient').LinearGradient,
    // For non expo projects
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

function App(): React.JSX.Element {
  return (
    //
    <>
      <NativeBaseProvider theme={theme} config={config}>
        <SafeAreaProvider>
          <StackRouter />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}

export default App;
