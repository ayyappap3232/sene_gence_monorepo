import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {ApolloProvider, InMemoryCache} from '@apollo/client';
import { useEffect, useState} from 'react';
//@ts-ignore
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {persistCache, AsyncStorageWrapper} from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// user defined imports
import AppNavigator from 'navigation/AppNavigator';
import DrawerNavigator from 'navigation/DrawerNavigator';
import {apolloClient} from 'apollo/services/client';
import ActivityIndicator from 'components/spinners/ActivityIndicator';
import { store } from './src/redux/store';


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
          {user ? <AppNavigator /> : <DrawerNavigator />}
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
