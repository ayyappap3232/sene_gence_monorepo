import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

//User defined Imports
import { COLORS, FONTS, SIZES } from '../../constants';
import { ScreenNames } from 'utils/screenNames'
import Text from '../text/Text'

export default function BreadCrumbWithTwoLevelUp({oneLevelTitle, oneLevelUrlPath, title, isRoute=false}: any) {
    const navigation = useNavigation<any>();
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', flexWrap:'wrap'}}>
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
        {!!oneLevelTitle && <><TouchableOpacity
          onPress={() => navigation.navigate(isRoute ? oneLevelUrlPath : ScreenNames.CategoryItem,{categoryData: {name: oneLevelTitle, url_path: oneLevelUrlPath}})}>
            <Text
            containerStyle={[
                styles.commonText,
                {fontFamily: FONTS.AvenirLight},
            ]}>
            {oneLevelTitle}
            </Text>
        </TouchableOpacity>
        <Text containerStyle={[styles.commonText, {marginHorizontal: 10}]}>
          /
        </Text></>}
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
