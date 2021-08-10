import * as React from 'react';
import { NavigationContainer , DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
//@ts-ignore
import {apolloClient} from 'common/services/client'
import { Provider } from 'react-redux';

import Navigator from './src/navigation/Navigator';
import { store } from './src/redux/store';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

function App() {

  const [darkApp, setDarkApp] = useState(false)
  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  return (
    <Provider store = {store}>
      <ApolloProvider client={apolloClient}>
        <NavigationContainer theme={appTheme}>
          <Navigator />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;