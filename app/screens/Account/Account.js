import React, {useState, useEffect} from 'react';
import  {View, Text  } from 'react-native';

//------------------------------
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

import * as firebase from 'firebase';

export default function Account(){

    const [Login, setLogin]=useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            !user?setLogin(false):setLogin(true);
        }); 
    }, []);

    if(Login===null) return <Text>cargando...</Text>

    return Login? <UserLogged />:<UserGuest />

    

}