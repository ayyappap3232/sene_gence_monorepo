import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import { _beautyBook } from '../../../components/BeautyBook';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import SearchCategoryScreen from './SearchCategoryScreen';

export default function SearchScreen() {
  const route = useRoute();
  const {searchQuery,searchParam}: any = route?.params;

  useEffect(() => {}, [route]);


  return (
    <ScrollToTopContainer>
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 22}}>
        <BreadCrumbWithOneLevelUp
          title={`Search Results for: '${searchQuery}'`}
        />
        <Spacer mt={32.1} />
        <Text containerStyle={styles.searchTitle}>
          SEARCH RESULTS for:‘{searchQuery}’
        </Text>
        </View>
        
        <SearchCategoryScreen name={searchQuery} searchParam={searchParam}/>
        <Spacer mt={40} />
        {_beautyBook()}
        <Spacer mt={30.2} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  searchTitle: {
    fontSize: SIZES.h1,
    fontFamily: FONTS.BebasNeueBold,
    lineHeight: 60,
    letterSpacing: 3,
    color: COLORS.searchTitle,
    textAlign: 'left',
  },
});
