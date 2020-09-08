import React, {createContext, useState, useEffect, useContext} from 'react';

import AsyncStorage from '@react-native-community/async-storage'

import {server} from '../services'

const AuthContext = createContext({ signed: true, user: {}});

export const AuthProvider = ({children}) => {

    /*------------ Estados ------------*/
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [carregando, setCarregando] = useState(false)
    /*------------ Estados ------------*/

    useEffect(()=>{
        async function LoadStorageData(){
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');

            if(storageUser && storageToken){
                setUser(JSON.parse(storageUser));
                setLoading(false)
            }
        }
        LoadStorageData();
    },[])

    /************* Logar *************/
        async function signIn(nome, pass){
            setError(false)
            setCarregando(true)

            fetch(`${server}`,{
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name:nome,
                    password:pass
                })
            })
            .then(res => res.json())
            .then(async(res) =>{
                res.error != 'fail'
                    ?
                await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(res.user)) |
                await AsyncStorage.setItem('@RNAuth:token', res.token)|
                setCarregando(false)|
                setUser(res.user)
                    :
                setCarregando(false)
                setError(true)
            })
        }
    /************* Logar *************/

    /************* Deslogar *************/
        function signOut(){
            AsyncStorage.clear().then(()=>{
                setUser(null)
            })
        }
    /************* Deslogar *************/

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut, error ,carregando }}>
            {children}
        </AuthContext.Provider>
    )
};

// export default AuthContext;

export function myHooksContext(){
    const context = useContext(AuthContext)

    return context;
}