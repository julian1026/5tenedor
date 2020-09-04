import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import screen
import TopRestaurants from '../screens/TopRestaurants'

const Stack=createStackNavigator();

export default function TopRestaurantStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Top-Restaurants'
                component={TopRestaurants}
                options={{title:'Nuestros Top-5'}}
             />
        </Stack.Navigator>
    );
}

