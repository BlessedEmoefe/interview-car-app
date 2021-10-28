import React, {useMemo, useEffect, useReducer, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/home/home.screen';
import CarDetails from '../../screens/carDetails/carDetails.screen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};