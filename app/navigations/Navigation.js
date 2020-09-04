import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//-----------------------------------------------
//importando los Screents

import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import Search from '../screens/Search'
import TopRestaurants from '../screens/TopRestaurants'
import Account from '../screens/Account'

//createBottonTabNavigator es una funcion tenemos que convertirla a un componente

const Tab= createBottomTabNavigator();

/*
en el componente Navigation vamos a configurar nuestra barra de navegacion menu
donde llamaremos a que screen queremos ir
*/
export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name='restaurants'
                component={Restaurants}
                options={{title:"Restaurantes"}}
                 />

                 <Tab.Screen 
                 name='favorites'
                 component={Favorites}
                 options={{title:"Favoritos"}}
                 />

                 <Tab.Screen
                 name='search'
                 component={Search}
                 options={{title:"Buscar"}}
                  />

                <Tab.Screen
                name='top-restaurants'
                component={TopRestaurants}
                options={{title:"Top-5"}}
                 />

                <Tab.Screen
                name='accounts'
                component={Account}
                options={{title:"Cuenta"}}
                />


            </Tab.Navigator>
        </NavigationContainer>
    );
    
}

