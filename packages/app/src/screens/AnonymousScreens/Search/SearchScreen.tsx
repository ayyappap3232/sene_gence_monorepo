import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import SearchCategoryScreen from './SearchCategoryScreen';

export default function SearchScreen() {
  const route = useRoute();
  const {searchQuery}: any = route?.params;

  useEffect(() => {}, [route]);

  const _beautyBook = () => {
    return (
      <ImageBackground
        source={images.beautyBg}
        style={{width: 332, height: 421, marginLeft: 5, alignSelf: 'center'}}>
        <Image
          source={images.beautyGirls}
          style={{width: 308, height: 233, margin: 12}}
        />
        <Spacer mt={10} />
        <View style={{marginHorizontal: 7}}>
          <Text
            containerStyle={{
              textAlign: 'center',
              fontSize: SIZES.h3,
              fontFamily: FONTS.BebasNeueBold,
              letterSpacing: 2,
              color: COLORS.text,
            }}>
            Beauty Book
          </Text>
          <Spacer mt={4} />
          <Text
            containerStyle={{
              textAlign: 'center',
              fontSize: SIZES.body4,
              fontFamily: FONTS.AvenirBook,
              letterSpacing: 0.7,
              color: COLORS.text,
            }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </Text>
          <Spacer mt={10} />
          <Image
            source={images.viewnow}
            style={{width: 151.9, height: 39, alignSelf: 'center'}}
          />
        </View>
      </ImageBackground>
    );
  };

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
        
        <SearchCategoryScreen name={searchQuery}/>
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
