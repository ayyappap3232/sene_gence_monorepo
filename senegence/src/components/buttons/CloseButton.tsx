import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, images} from '../../constants';

export default function CircularBackgroundWithIcon({containerIconStyle={},containerStyle={},onPress, icon}:any) {
  return (
    <TouchableOpacity style={[styles.closeWrapper, containerStyle]} onPress={onPress}>
      <Image source={icon} style={[styles.closeIcon,containerIconStyle]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeWrapper: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: COLORS.closeBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {width: 12, height: 12, tintColor: COLORS.white},
});
