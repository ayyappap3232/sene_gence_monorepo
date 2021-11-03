import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//User defined Imports
import {COLORS, icons} from '../../constants';

export default function Checkbox({
  tintColor=COLORS.primary3,
  status,
  state,
  setState,
  containerStyle = {},
  iconContainerStyle = {},
}: any) {
  return (
    <TouchableOpacity
    activeOpacity={0.9}
    onPress={setState}
      style={[
        {
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: COLORS.primary3,
          borderWidth: 1
        },
        containerStyle,
      ]}>
          {state && <Image source={icons.Check} style={{width: 12, height: 12, tintColor: tintColor}}/>}
      </TouchableOpacity>
    //     <Checkbox
    //     color={COLORS.primary3}
    //     uncheckedColor={COLORS.primary3}
    //     status={isShippingAddressSame ? 'checked' : 'unchecked'}
    //     onPress={() => {
    //       setIsShippingAddressSame(!isShippingAddressSame);
    //     }}
    //   />
  );
}

const styles = StyleSheet.create({});
