import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCustomer from '../screens/customers/CreateCustomer';
import LoginAsCustomer from '../screens/customers/LoginAsCustomer';
import StartUpPage from '../screens/AuthScreens/StartUpPage';
import { View } from 'react-native';
import Text from '../components/text/Text';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen options={{
            headerShown: true,
        }} name="StartUpPage" component= {StartUpPage}/>
        <Stack.Screen name="LoginAsCustomer" component={LoginAsCustomer} />
        <Stack.Screen name="CreateCustomer" component={CreateCustomer} />
      </Stack.Navigator>
  );
}

export default AuthNavigator;