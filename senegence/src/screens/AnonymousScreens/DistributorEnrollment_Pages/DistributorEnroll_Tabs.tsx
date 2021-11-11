import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DTab1 from './DTab1';
import DTab2 from './DTab2';
import DTab3 from './DTab3';
import DTab4 from './DTab4';
import DTab5 from './DTab5';
import DTab6 from './DTab6';
import {COLORS, icons, SIZES} from '../../../constants';
import Svg, { Path } from 'react-native-svg'

const DistributorTabs = createMaterialTopTabNavigator();

export default function DistributorEnroll_Tabs() {
  const selectedDot = (leftPosition: number) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: 28,
          height: 28,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: -14,
          left: leftPosition,
        }}>
           
        <View
          style={{
            backgroundColor: COLORS.primary3,
            width: 14,
            height: 14,
            borderRadius: 50,
          }}></View>
      </View>
    );
  };

  const tabBarIcon = (icon: any, focused: any) => {
      return <Image
      source={icon}
      style={{
        width: 22,
        height: 22,
        tintColor: focused ? COLORS.white : COLORS.grey,
      }}
    />
  }

  return (
    <DistributorTabs.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: COLORS.primary3, height: 60},
        tabBarActiveTintColor: COLORS.white,
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        swipeEnabled: false,
      }}>
      <DistributorTabs.Screen
        options={{
          tabBarIndicator: () => selectedDot(15),
          tabBarIcon: ({focused, color}) => (
            tabBarIcon(icons.NounSearch, focused)
          ),
        }}
        name={'Identify'}
        component={DTab1}
      />
      <DistributorTabs.Screen
        options={{
          tabBarIndicator: () => selectedDot(75),
          tabBarIcon: ({focused, color}) => (
            tabBarIcon(icons.NounSearch, focused)
          ),
        }}
        name={'Sponser'}
        component={DTab2}
      />
      <DistributorTabs.Screen
        options={{
          tabBarIndicator: () => selectedDot(135),
          tabBarIcon: ({focused, color}) => (
            tabBarIcon(icons.NounSearch, focused)
          ),
        }}
        name={'YourAccount'}
        component={DTab3}
      />
      <DistributorTabs.Screen
        options={{
          tabBarIndicator: () => selectedDot(195),
          tabBarIcon: ({focused, color}) => (
            tabBarIcon(icons.NounSearch, focused)
          ),
        }}
        name={'DistributorKit'}
        component={DTab4}
      />
      <DistributorTabs.Screen
        options={{
          tabBarIndicator: () => selectedDot(255),
          tabBarIcon: ({focused, color}) => (
            tabBarIcon(icons.NounSearch, focused)
          ),
        }}
        name={'Review'}
        component={DTab5}
      />
      <DistributorTabs.Screen
        options={{
          tabBarIndicator: () => selectedDot(315),
          tabBarIcon: ({focused, color}) => (
            tabBarIcon(icons.Check, focused)
          ),
        }}
        name={'Complete'}
        component={DTab6}
      />
    </DistributorTabs.Navigator>
  );
}

const styles = StyleSheet.create({});
