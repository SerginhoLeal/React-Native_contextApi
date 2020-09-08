import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Client/SignIn'

const routes = () => {

  const LoginStack = createStackNavigator();

  return (
    <LoginStack.Navigator screenOptions={{headerShown:false}}>
      <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator>
  );
}

export default routes;