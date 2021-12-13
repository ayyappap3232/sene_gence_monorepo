import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants';

export default function BulletText({containerStyle={},text}: any) {
  return (
    <View style={styles.row}>
      <View
        style={[{
          backgroundColor: COLORS.black,
          width: 10,
          height: 10,
          borderRadius: 40,
          marginRight: 10
        },containerStyle]}></View>
        <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems:'center'
    }
});
