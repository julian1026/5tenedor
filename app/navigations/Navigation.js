import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//-----------------------------------------------
//importando los Stack

import RestaurantStack from './RestaurantStack';
import FavoriteStack from './FavoriteStack';
import SearchStack from './SearchStack';
import TopRestaurantStack from './TopRestaurantStack'
import AccountStack from './AccountStack'

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
                component={RestaurantStack}
                options={{title:"Restaurantes"}}
                 />

                 <Tab.Screen 
                 name='favorites'
                 component={FavoriteStack}
                 options={{title:"Favoritos"}}
                 />

                 <Tab.Screen
                 name='search'
                 component={SearchStack}
                 options={{title:"Buscar"}}
                  />

                <Tab.Screen
                name='top-restaurants'
                component={TopRestaurantStack}
                options={{title:"Top-5"}}
                 />

                <Tab.Screen
                name='accounts'
                component={AccountStack}
                options={{title:"Cuenta"}}
                />


            </Tab.Navigator>
        </NavigationContainer>
    );
    
}

