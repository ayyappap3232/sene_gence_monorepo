import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants';
import { ScreenNames } from '../../utils/screenNames'
import Text from '../text/Text'

export default function BreadCrumbWithOneLevelUp({title}: any) {
    const navigation = useNavigation<any>();
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.StartUpDrawer)}>
          <Text
            containerStyle={[
              styles.commonText,
              {fontFamily: FONTS.AvenirLight},
            ]}>
            Home
          </Text>
        </TouchableOpacity>
        <Text containerStyle={[styles.commonText, {marginHorizontal: 10}]}>
          /
        </Text>
        <Text
          containerStyle={[
            styles.commonText,
            {fontFamily: FONTS.AvenirMedium},
          ]}>
          {title}
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    commonText: {
        fontSize: SIZES.body4,
        letterSpacing: 0.7,
        color: COLORS.text,
        textTransform: 'uppercase',
      },
})
