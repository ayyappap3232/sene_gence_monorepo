import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {ScreenNames} from '../../utils/screenNames';
import Spacer from '../Spacer';
import Text from '../text/Text';

export const _breadCrumbs = (breadCrumbs: any, name: any, navigation: any) => {
  const _breadCrumbItem = (title: string, onPress: any) => {
    console.log('title',title);

    return (
      <>
        <TouchableOpacity onPress={title === "SHOP & SAVE" ? () => {navigation.navigate(ScreenNames.AllProducts)}: onPress}>
          <Text
            containerStyle={[
              styles.commonText,
              {fontFamily: FONTS.AvenirLight},
            ]}>
            {title}
          </Text>
        </TouchableOpacity>
        <Spacer ml={5} />
        <Text>/</Text>
        <Spacer mr={5} />
      </>
    );
  };

  return (
    <View
      style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
      {_breadCrumbItem('HOME', () =>
        navigation.navigate(ScreenNames.StartUpDrawer),
      )}
      {breadCrumbs &&
        breadCrumbs.map((item: any, index: any) => {
          return (
            <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
              {_breadCrumbItem(item.category_name, () =>
                navigation.navigate(ScreenNames.CategoryItem, {
                  categoryData: {
                    name: item.category_name,
                    url_path: item.category_url_path,
                  },
                }),
              )}
            </View>
          );
        })}
      <Text
        containerStyle={[styles.commonText, {fontFamily: FONTS.AvenirMedium}]}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commonText: {
    fontSize: SIZES.body4,
    letterSpacing: 0.7,
    color: COLORS.text,
    textTransform: 'uppercase',
  },
});
