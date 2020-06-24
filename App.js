import React from 'react';
import { AppLoading } from 'expo'

import {Raleway_400Regular, Raleway_700Bold, useFonts} from '@expo-google-fonts/raleway';

import Home from './src/pages/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Home />
  );
}
