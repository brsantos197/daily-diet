import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Routes } from './src/routes';

export default function App() {

  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}

