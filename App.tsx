import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Home from './src/paginas/Home';
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Home />
      <StatusBar backgroundColor="#000" />
    </>
  );
}
