import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';

import {myHooksContext} from "../Context/authContext"

const Client = () => {
  const [nome, setNome] = React.useState('');
  const [pass, setPassword] = React.useState('');

  const { signIn, error, carregando } = myHooksContext();

  /*

    pegando o error/carregando la do context igual na linha 10.
    agora para você ver ela funcionando basta coloca-los dessa forma na linha 37 e 38

  */

  function handleSignIn(){
    Keyboard.dismiss();
    signIn(nome, pass);

    /*
      Estou pegando o nome e a senha do useState e enviando para o signIn dessa forma 
      signIn(nome,pass); na linha 21.
      Pegarei o nome e a senha(pass) e enviei para a página Context/authContext.js na linha 41
    */
  }

  return(
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.select({android:true, ios:true})}
      style={styles.body}
    >

      {carregando && (<Text style={{color: `#fff`}}>Carregando...</Text>)}
      {error && (<Text style={{color: `#fff`}}>Falha no login ou na senha</Text>)}

      <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholderTextColor='#1c1c1c' placeholder="Nome"/>
      <TextInput style={styles.input} onChangeText={setPassword} value={pass} placeholderTextColor='#1c1c1c' placeholder="Senha" secureTextEntry autoCapitalize='none'/>
      
      <TouchableOpacity onPress={handleSignIn} style={styles.buttonGo}>
        <Text style={{color:'#fff',fontSize:20}}>Login</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>  
  )
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
  },
  input:{
    width:250,
    padding:15,
    marginTop:5,
    color:'#1c1c1c',
    marginBottom:5,
    borderRadius:25,
    paddingHorizontal:30,
    backgroundColor:'#ffffffaa',
  },
  buttonGo:{
    padding:10,
    paddingHorizontal:50,
    backgroundColor:'#FC6E20',
    borderRadius:10
  },
})

export default Client;