import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../../constants';

export default function DistributorWrapper({children}: any) {
  return (
    <View style={{paddingTop: 20,flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          borderWidth: 20,
          borderColor: COLORS.ligthGrey,
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
          }}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
