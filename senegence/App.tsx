
import * as React from 'react';
import { NavigationContainer , DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider, InMemoryCache } from '@apollo/client';
//@ts-ignore
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store';
import { useCallback, useEffect, useState } from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { apolloClient } from './src/apollo/services/client';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityIndicator from './src/components/spinners/ActivityIndicator';

const Stack = createNativeStackNavigator();

function App() {

  const [user, setUser] = useState(null);

  const [darkApp, setDarkApp] = useState(false)
  const appTheme = darkApp ? DarkTheme : DefaultTheme;

  const [client, setClient] = useState<any>(null);

  const cache = new InMemoryCache();

  useEffect(() => {
    persistCache({
      cache,
      storage:AsyncStorage,
      trigger: 'background'
    }).then(()=>{
      setClient(apolloClient)
    })
  }, [])


  if(!client){
    return <ActivityIndicator />
  }

  return (
    <Provider store = {store}>
      <ApolloProvider client={client}>
        <NavigationContainer theme={appTheme}>
          {user ? <AppNavigator /> : <DrawerNavigator />}
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;