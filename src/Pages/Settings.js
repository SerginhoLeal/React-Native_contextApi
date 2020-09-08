import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import {myHooksContext} from "../Context/authContext"

const src = () => {
  const { user } = myHooksContext();

  return (
    <>
      <StatusBar hidden={true}/>
      <View style={styles.body}>
        <Text style={styles.txt}>{user.name}, você está na página Settings</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#1c1c1c",
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    color:'#fff',
    fontSize:15,
    marginTop:3,
    marginBottom:3
  }
})

export default src;