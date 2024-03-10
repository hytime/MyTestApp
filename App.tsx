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
import {NativeBaseProvider} from 'native-base';
import AigcTabBar from '@/components/AigcTabBar';

import {theme} from '@/utils';
import {tabBars} from '@/utils/tabBar.config';
import StackRouter from '@/components/StackRouter';
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
        <NavigationContainer>
          <StackRouter />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

export default App;
