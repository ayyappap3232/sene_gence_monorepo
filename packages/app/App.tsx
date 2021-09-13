
import * as React from 'react';
import { NavigationContainer , DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
//@ts-ignore
import {apolloClient} from 'common/services/client'
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store';
import { useState } from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const Stack = createNativeStackNavigator();

function App() {

  const [user, setUser] = useState(null);

  const [darkApp, setDarkApp] = useState(false)
  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  return (
    <Provider store = {store}>
      <ApolloProvider client={apolloClient}>
        <NavigationContainer theme={appTheme}>
          {user ? <AppNavigator /> : <DrawerNavigator />}
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;