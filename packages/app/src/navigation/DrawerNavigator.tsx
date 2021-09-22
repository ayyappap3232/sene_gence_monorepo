import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StartUpPage from '../screens/AuthScreens/StartUpPage';
import CustomDrawerContent from './CustomDrawerContent';
import ActivityIndicator from '../components/spinners/ActivityIndicator';
import { useCategories } from '../apollo/controllers/getCategories.Controller';
import Footer from '../components/footers/Footer';
import CategoryScreen from '../screens/AnonymousScreens/PLP_Pages/CategoryScreen';
import CategoryDetailsScreen from '../screens/AnonymousScreens/PDP_Pages/CategoryDetailsScreen';
import ExecutiveManagementTeam from '../screens/AnonymousScreens/About_Us_Pages/ExecutiveManagementTeam';
import { ScreenNames } from '../utils/screenNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReadMore from '../screens/AnonymousScreens/About_Us_Pages/ReadMore';
import AboutUs from '../screens/AnonymousScreens/About_Us_Pages/AboutUs';
import MeetTheFounder from '../screens/AnonymousScreens/About_Us_Pages/MeetTheFounder';
import ContactUs from '../screens/AnonymousScreens/About_Us_Pages/ContactUs';
import SelectCountry from '../screens/AnonymousScreens/SelectYourCountryPages/SelectCountry';
import MakeSenseFoundation from '../screens/AnonymousScreens/MakeSenseFoundation/MakeSenseFoundation';
import FindADistributor from '../screens/AnonymousScreens/FindADistributor/FindADistributor';
import StartABusiness from '../screens/AnonymousScreens/StartABusiness/StartABusiness';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();


const DrawerNavigator = ()  => {

  const {getCategories, loading, error, categoryData} = useCategories({
    pageSize: 20,
  });


  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
        <Drawer.Navigator screenOptions={{drawerType: 'front',drawerStyle:{width: 293}}} drawerContent={(props) => <CustomDrawerContent {...props} categoryData={categoryData} /> }>
              <Drawer.Screen name={ScreenNames.StartUpDrawer} options={{drawerLabel: () => null, drawerIcon: undefined, title: undefined}} component={StartUpPage} />
              <Drawer.Screen name={ScreenNames.CategoryItem} component={CategoryScreen} />
              <Drawer.Screen name={ScreenNames.CategoryDetails} component={CategoryDetailsScreen} />
              <Drawer.Screen name={ScreenNames.ExecutiveManagementTeam} component={ExecutiveManagementTeam} />            
              <Drawer.Screen name={ScreenNames.AboutUs} component={AboutUs} />            
              <Drawer.Screen name={ScreenNames.MeetTheFounder} component={MeetTheFounder} />            
              <Drawer.Screen name={ScreenNames.ContactUs} component={ContactUs} />            
              <Drawer.Screen name={ScreenNames.SelectYourCountry} component={SelectCountry} />            
              <Drawer.Screen name={ScreenNames.MakeSenseFoundation} component={MakeSenseFoundation} />            
              <Drawer.Screen name={ScreenNames.FindADistributor} component={FindADistributor} />            
              <Drawer.Screen name={ScreenNames.StartABusiness} component={StartABusiness} />            
        </Drawer.Navigator>
  );
}

export default DrawerNavigator;