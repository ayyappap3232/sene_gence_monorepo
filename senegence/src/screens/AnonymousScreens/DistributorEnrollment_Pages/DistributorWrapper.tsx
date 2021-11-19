import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../../constants';

export default function DistributorWrapper({children,mainContainerStyle={}, containerStyle={}, childContainerStyle={}}: any) {
  return (
    <View style={[{paddingTop: 20,flex: 1, backgroundColor: COLORS.white},mainContainerStyle]}>
      <View
        style={[{
          borderWidth: 20,
          borderColor: COLORS.ligthGrey,
        },containerStyle]}>
        <View
          style={[{
            backgroundColor: COLORS.white,
          },childContainerStyle]}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
