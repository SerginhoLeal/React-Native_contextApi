import * as React from 'react';
import {StatusBar, ActivityIndicator, LogBox} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from './Context/authContext'

import Routes from './routes'

export default function App() {
  LogBox.ignoreAllLogs(true)

  return (
    <NavigationContainer>
      
      <StatusBar hidden={true}/> 
      
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </NavigationContainer>
  );
}
