import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloProvider, InMemoryCache} from '@apollo/client';
//@ts-ignore
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/navigation/AppNavigator';
import {store} from './src/redux/store';
import {useCallback, useEffect, useState} from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {apolloClient} from './src/apollo/services/client';
import {persistCache, AsyncStorageWrapper} from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityIndicator from './src/components/spinners/ActivityIndicator';
import {useCart} from './src/hooks/cart/useCart';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {COLORS} from './src/constants';
import StackNavigator from './src/navigation/DrawerNavigator';


function App() {
  const [user, setUser] = useState(null);

  const [darkApp, setDarkApp] = useState(false);
  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  const [client, setClient] = useState<any>(null);

  const cache = new InMemoryCache();

  useEffect(() => {
       SplashScreen.hide();
  }, []);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
      trigger: 'background',
    })
      .then(() => {
        setClient(apolloClient);
      })
  }, []);

  if (!client) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer theme={appTheme}>
          {user ? <AppNavigator /> : <StackNavigator />}
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
