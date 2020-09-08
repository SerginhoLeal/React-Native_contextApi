import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {myHooksContext} from "./Context/authContext"

/*
  myHooksContext aqui pra que?
  para pegar o nome do usuário que realizou o login e salvar no Drawer(aquele trem de arrastar para o lado)
  como você pode ver na linha 12 estou importando e na linha 18 estou usando o nome do usuário logado
*/

const DrawerStyle = (props) => {//props para a mudança de pagina
  const { user } = myHooksContext();
  return(
    <View style={styles.body}>

      <View style={{padding:'15%',alignItems:'center'}}>
        <Image style={styles.img} source={{uri:'https://res.cloudinary.com/zasetrewsqw/image/upload/v1596385047/DreamJob/boa_gmlml8.png'}}/>
        <Text style={{fontSize:18, color:'#fff'}}>{user.name}</Text>
      </View>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Home')}}>
        {/* props para fazer a mudança de pagina */}
        <Text style={styles.txt}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        {/* <Icon name="briefcase" size={20} color="#fff" /> */}
        <Text style={styles.txt}>Settings</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#1c1c1c'
  },
  buttom:{
    height:50,
    width:'90%',
    marginTop:10,
    marginBottom:10,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:10,
    paddingHorizontal:10,
    // backgroundColor:'#1c1c1c',
  },
  txt:{
    fontSize:18,
    color:'#fff',
    left:10
  },
  img:{
    width:100,
    height:100,
    borderRadius:25,
    // alignItems:"center",
    // justifyContent:'center',
    backgroundColor:'rgba(52, 52, 52, 0.9)'
  }
})

export{
  DrawerStyle
};