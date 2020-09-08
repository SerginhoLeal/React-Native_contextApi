import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerStyle} from '../StyledDrawer'

import Home from '../Pages/Home'
import Settings from '../Pages/Settings'

const routes = () => {

  const Drawer = createDrawerNavigator();
  const ReturnStack = createStackNavigator();

  return (
    <Drawer.Navigator
      drawerContent={skoa => <DrawerStyle {...skoa} />}//skoa para importa o estilo e o props
      /*
        drawerContent serve para você fazer a sua própria estilização,
        graças ao contextApi, podemos fazer a mudança de páginas sem passar os parametros,
        não seria impossível de fazer sem, mas eu achei mais legal fazer com o contextApi,
        então eu criei uma página chamada StyledDrawer para fazer a estilização e a mudança de páginas.
      */
      screenOptions={{headerShown:false}}
      /*
        serve para retirar o cabeçalho onde ficaria o nome da pagina
      */
    >

      <ReturnStack.Screen name="Home" component={Home} />
      <ReturnStack.Screen name="Settings" component={Settings} />

    </Drawer.Navigator>
  );
}

export default routes;