import React from 'react';
import LoginRoutes from './login.routes';
import PagesRoutes from './pages.routes';

import {View, ActivityIndicator} from "react-native"

import {myHooksContext} from '../Context/authContext';

const routes = () => {
  const {signed, loading} = myHooksContext();

  if(loading){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="666" />
      </View>
    )
  }

  return signed ? <PagesRoutes /> : <LoginRoutes /> ;

}

export default routes;