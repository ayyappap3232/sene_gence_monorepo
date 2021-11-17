import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//User defined Imports
import StartUpPage from 'screens/AuthScreens/StartUpPage';
import CustomDrawerContent from './CustomDrawerContent';
import ActivityIndicator from 'components/spinners/ActivityIndicator';
import {useCategories} from 'apollo/controllers/getCategories.Controller';
import CategoryScreen from 'screens/AnonymousScreens/PLP_Pages/CategoryScreen';
import CategoryDetailsScreen from 'screens/AnonymousScreens/PDP_Pages/CategoryDetailsScreen';
import ExecutiveManagementTeam from 'screens/AnonymousScreens/About_Us_Pages/ExecutiveManagementTeam';
import {ScreenNames} from 'utils/screenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutUs from 'screens/AnonymousScreens/About_Us_Pages/AboutUs';
import MeetTheFounder from 'screens/AnonymousScreens/About_Us_Pages/MeetTheFounder';
import ContactUs from 'screens/AnonymousScreens/About_Us_Pages/ContactUs';
import SelectCountry from 'screens/AnonymousScreens/SelectYourCountryPages/SelectCountry';
import MakeSenseFoundation from 'screens/AnonymousScreens/MakeSenseFoundation/MakeSenseFoundation';
import FindADistributor from 'screens/AnonymousScreens/FindADistributor/FindADistributor';
import StartABusiness from 'screens/AnonymousScreens/StartABusiness/StartABusiness';
import SearchScreen from 'screens/AnonymousScreens/Search/SearchScreen';
import FilterDrawer from 'components/drawers/FilterDrawer';
import {COLORS} from '../constants';
import Press from 'screens/AnonymousScreens/About_Us_Pages/Press';
import TermsAndConditions from 'screens/AnonymousScreens/CopyRightScreens/TermsAndConditions';
import CopyrightDMCAPolicy from 'screens/AnonymousScreens/CopyRightScreens/CopyrightDMCAPolicy';
import MainShoppingCartBag from 'screens/AnonymousScreens/ShoppingCart_Pages/MainShoppingCartBag';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCart } from '../hooks/cart/useCart';
import { View } from 'react-native';
import Text from 'components/text/Text';
import OutlineButton from 'components/buttons/OutlineButton';
import FAQS from 'screens/AnonymousScreens/FreaquentlyAsked_Pages/FAQS';
import Careers from 'screens/AnonymousScreens/Careers/Careers';
import CategoryPage from 'screens/AnonymousScreens/Categories_Pages/CategoryPage';
import OrderConfirmationScreen from 'screens/AnonymousScreens/OrderConfirmation/OrderConfirmationScreen';
import Error_404 from 'screens/AnonymousScreens/Error_Pages/404_Screen';
import Error_503 from 'screens/AnonymousScreens/Error_Pages/503_Screen';
import Checkout_As_A_Guest from 'screens/AnonymousScreens/Checkout_Pages/Checkout_As_A_Guest';
import CategoryDetailsItemComponent from 'components/PLP/CategoryDetailsItemComponent';
import DistributorEnrollment_Page from 'screens/AnonymousScreens/DistributorEnrollment_Pages/DistributorEnrollment_Page';
import Login from 'screens/AuthScreens/Login';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

// const RootStack = () => {
//   return <Stack.Navigator>
//     <Stack.Group screenOptions={{presentation:"transparentModal", headerShown: false, gestureEnabled: true}}>
//       <Stack.Screen  name={ScreenNames.ShowCartScreen} component={ShowCartScreen}/>
//     </Stack.Group>
//   </Stack.Navigator>
// }

const DrawerNavigator = () => {
  const {getCategories, loading, error, categoryData} = useCategories({
    pageSize: 20,
  });

  useEffect(() => {
    getCategories();
  }, [getCategories]);


  const {cartId} = useCart();

  useEffect(() => {
    AsyncStorage.getItem('cartId').then(value => {
      if(value != null){
        return;
      }else {
        AsyncStorage.setItem('cartId', cartId);
      }
    })
  }, [])

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: COLORS.border,
        }}>
        <Text>OOPS!!!</Text>
        <Text>Network request failed</Text>
        <OutlineButton loading={loading} containerStyle={{ width: 234,borderColor: COLORS.red, alignSelf: 'center',backgroundColor:COLORS.red}} textStyleContainer={{color:COLORS.white}} title={"Try Again"} onPress={() => getCategories()}/>
      </View>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: 'front', drawerStyle: {width: 293}}}
      initialRouteName={ScreenNames.Login}
      drawerContent={props => (
        <CustomDrawerContent {...props} categoryData={categoryData} />
      )}>
        <Drawer.Group>
          <Drawer.Screen name={ScreenNames.Login} component={Login}/>
        </Drawer.Group>
      <Drawer.Group>
        <Drawer.Screen
          name={ScreenNames.StartUpDrawer}
          options={{
            drawerLabel: () => null,
            drawerIcon: undefined,
            title: undefined,
          }}
          component={StartUpPage}
        />
        <Drawer.Screen
          name={ScreenNames.DistributorEnrollment}
          component={DistributorEnrollment_Page}
        />
        <Drawer.Screen
          name={ScreenNames.CategoryItem}
          component={CategoryScreen}
        />
        <Drawer.Screen
          name={ScreenNames.CategoryDetails}
          component={CategoryDetailsItemComponent}
        />
        <Drawer.Screen
          name={ScreenNames.ExecutiveManagementTeam}
          component={ExecutiveManagementTeam}
        />
        <Drawer.Screen name={ScreenNames.AboutUs} component={AboutUs} />
        <Drawer.Screen
          name={ScreenNames.MeetTheFounder}
          component={MeetTheFounder}
        />
        <Drawer.Screen name={ScreenNames.ContactUs} component={ContactUs} />
        <Drawer.Screen
          name={ScreenNames.SelectYourCountry}
          component={SelectCountry}
        />
        <Drawer.Screen
          name={ScreenNames.MakeSenseFoundation}
          component={MakeSenseFoundation}
        />
        <Drawer.Screen
          name={ScreenNames.FindADistributor}
          component={FindADistributor}
        />
        <Drawer.Screen
          name={ScreenNames.StartABusiness}
          component={StartABusiness}
        />
        <Drawer.Screen
          name={ScreenNames.SearchScreen}
          component={SearchScreen}
        />
        <Drawer.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenNames.FilterDrawerItems}
          component={FilterDrawer}
        />
        <Drawer.Screen name={ScreenNames.Press} component={Press} />
        <Drawer.Screen
          name={ScreenNames.TermsAndConditions}
          component={TermsAndConditions}
        />
        <Drawer.Screen
          name={ScreenNames.CopyrightDMCAPolicy}
          component={CopyrightDMCAPolicy}
        />
        <Drawer.Screen
          name={ScreenNames.MainShoppingCartBag}
          component={MainShoppingCartBag}
        />
        <Drawer.Screen
          name={ScreenNames.FAQS}
          component={FAQS}
        />
        <Drawer.Screen
          name={ScreenNames.Careers}
          component={Careers}
        />
        <Drawer.Screen
          name={ScreenNames.AllProducts}
          component={CategoryPage}
        />
        <Drawer.Screen
          name={ScreenNames.OrderConfirmation}
          component={OrderConfirmationScreen}
        />
        <Drawer.Screen
          name={ScreenNames.Error_404}
          component={Error_404}
        />
        <Drawer.Screen
          name={ScreenNames.Error_503}
          component={Error_503}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name={ScreenNames.Checkout_As_A_Guest}
          component={Checkout_As_A_Guest}
        />

      </Drawer.Group>
      {/* <Drawer.Group screenOptions={{}}>
        <Drawer.Screen
        options={{headerShown: false}}
          name={ScreenNames.ListOfStacks}
          component={RootStack}
        />
      </Drawer.Group> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
