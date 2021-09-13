import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StartUpPage from '../screens/AuthScreens/StartUpPage';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()  => {
  return (
        <Drawer.Navigator screenOptions={{drawerType: 'front'}} drawerContent={(props) => <CustomDrawerContent {...props} /> }>
            <Drawer.Screen name="StartUpDrawer" component={StartUpPage} />
        </Drawer.Navigator>
  );
}

export default DrawerNavigator;