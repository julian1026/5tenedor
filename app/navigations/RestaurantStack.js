import React from 'react';

import { createStackNavigator} from '@react-navigation/stack';

//importando el screen
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator();
export default function RestaurantStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='restaurants'
            component={Restaurants}
            options={{title:'Los Restaurantes'}}
             />
        </Stack.Navigator>
    );
}