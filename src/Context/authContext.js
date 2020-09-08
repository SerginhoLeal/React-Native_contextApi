import React, {createContext, useState, useEffect, useContext} from 'react';

import AsyncStorage from '@react-native-community/async-storage'

const AuthContext = createContext({ signed: true, user: {}});

export const AuthProvider = ({children}) => {

    /*------------ Estados ------------*/
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [carregando, setCarregando] = useState(false)

    /*
        Criei dois estados(error e carregando) para que o usuário saiba se o login está em andamento e se deu algum erro.
        Para ver eles funcionando basta fazer isso{
            setError(false) na linha 42 e setError(true) na linha 65,
            setCarregando(true) na linha 43 e setCarregando(false) na linha 61 e 64,
        }
        Agora enviando o erro/carregando basta colocar os dois dentro do value do AuthContext na linha 84
        e você receberá os dois na página Client/SignIn.js
    */

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

            fetch('sua url',{
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

        /*
            Peguei o nome e o pass e joguei elas na linha 40 e 41.
            Esse res.error na linha 46 é o tipo de erro que configurei na minha api
        */

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