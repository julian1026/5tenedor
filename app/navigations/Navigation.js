import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
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
            <Tab.Navigator
            initialRouteName='restaurants' // app inicie en el boton restaurants
            tabBarOptions={{   // se controla los colores del tabBar
                inactiveTintColor:'#646464',
                activeTintColor:'#00a680',
            }}

            // en esta parte cargo la funcion que me permitira cargar iconos
            screenOptions={({route})=>({
                tabBarIcon:({color})=>screenOptions(route, color),
            })}
            >
                
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

function screenOptions(route,color){
    let iconName;
    switch (route.name) {
        case 'restaurants':
            iconName='compass-outline'  
            break;

        case 'favorites':
            iconName='heart-outline'
            break;

        case 'search':
            iconName='magnify'
            break;

        case 'accounts':
            iconName='account-outline'
            break;

        case 'top-restaurants':
            iconName='star-outline'
            break;

        default:
            break;
    }
    return (
        <Icon type='material-community' name={iconName} size={22} color={color} />
    )
}
