import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/categories/Categories';
import SearchProduct from '../screens/products/SearchProduct';
import CreateCustomer from '../screens/customers/CreateCustomer';
import UpdateCustomer from '../screens/customers/UpdateCustomer';
import LoginAsCustomer from '../screens/customers/LoginAsCustomer';
import CustomerProfile from '../screens/customers/CustomerProfile';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="LoginAsCustomer" component={LoginAsCustomer} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="CustomerDetails" component={CustomerProfile} />
        <Stack.Screen name="UpdateCustomer" component={UpdateCustomer} />
        <Stack.Screen name="CreateCustomer" component={CreateCustomer} />
        <Stack.Screen name="SearchProduct" component={SearchProduct} />
      </Stack.Navigator>
  );
}

export default Navigator;