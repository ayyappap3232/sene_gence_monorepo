import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";

import { magentoConfig } from './magento.config';


const httpLink = createHttpLink({
  uri: `${magentoConfig.API_URL}/graphql`,
  fetchOptions: {
    mode: 'no-cors'
  },
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if(graphQLErrors){
    graphQLErrors.map(({message, locations, path}) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );

      if(message.includes("not authenticated")){
        console.log('not authenticated')
      }else {
        console.log("authenticated");
      }
    });
    if(networkError){
      console.log(`[Network error]: ${networkError}`)
    }
  }
})

const authLink =  setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    }
  }
});

// Initialize Apollo Client
export const apolloClient = new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });