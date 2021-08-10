// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setContext } from '@apollo/client/link/context';

// import { magentoConfig } from '../../../../common/services/magento.config';


// const httpLink = createHttpLink({
//   uri: `${magentoConfig.API_URL}/graphql`,
// });

// const authLink =  setContext(async (_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = await AsyncStorage.getItem("token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// // Initialize Apollo Client
// export const apolloClient = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });