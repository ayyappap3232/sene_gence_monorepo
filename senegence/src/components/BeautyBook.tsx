import React from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../constants';
import Spacer from './Spacer';
import Text from './text/Text';

export const _beautyBook = () => {
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
const styles = StyleSheet.create({})
