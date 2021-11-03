import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//User defined Imports
import UpdateCustomer from '../screens/customers/UpdateCustomer';
import CustomerProfile from '../screens/customers/CustomerProfile';
import HomePage from '../screens/AppScreens/HomePage';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="CustomerDetails" component={CustomerProfile} />
        <Stack.Screen name="UpdateCustomer" component={UpdateCustomer} />
      </Stack.Navigator>
  );
}

export default AppNavigator;