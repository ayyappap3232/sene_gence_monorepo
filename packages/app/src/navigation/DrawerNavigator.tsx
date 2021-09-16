import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StartUpPage from '../screens/AuthScreens/StartUpPage';
import CustomDrawerContent from './CustomDrawerContent';
import ActivityIndicator from '../components/spinners/ActivityIndicator';
import { useCategories } from '../apollo/controllers/getCategories.Controller';
import Footer from '../components/footers/Footer';
import CategoryScreen from '../screens/AnonymousScreens/PLP_Pages/CategoryScreen';

const Drawer = createDrawerNavigator();

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
            <Drawer.Screen name="StartUpDrawer" options={{drawerLabel: () => null, drawerIcon: undefined, title: undefined}} component={StartUpPage} />
            <Drawer.Screen name="CategoryItem" component={CategoryScreen} />
        </Drawer.Navigator>
  );
}

export default DrawerNavigator;