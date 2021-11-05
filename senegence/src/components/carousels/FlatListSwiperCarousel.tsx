import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {FlatListSlider} from 'react-native-flatlist-slider';
import { COLORS, FONTS, SIZES } from '../../constants';

export default function FlatListSwiperCarousel({carouselData}: any) {

    const [activeSlide, setActiveSlide] = useState(0);
  const _renderItem = ({item}: any) => {
    return (
      <Text>Hello</Text>
    );
  };

    return (
        <FlatListSlider
    data={carouselData}
    height={240}
    timer={5000}
    onPress={(item: any) => console.log('onPress')}
    contentContainerStyle={{paddingHorizontal: 16}}
    indicatorContainerStyle={{position:'absolute', bottom: 20}}
    indicatorActiveColor={'#8e44ad'}
    indicatorInActiveColor={'#ffffff'}
    indicatorActiveWidth={30}
    animation
  />
    )
}


const styles = StyleSheet.create({
    carouselInnerContent: {
      alignContent:'center',
      textAlignVertical: 'center',
      marginTop: 95,
      marginBottom: 94,
      marginHorizontal: 10,
      padding: 10,
      width: SIZES.width-80,
      height: 174
    },
    title: {
        letterSpacing: 2,
        fontSize: SIZES.h3,
        fontFamily: FONTS.BebasNeueBold,
        marginBottom: 4
    },
    subTitle: {
        letterSpacing: 0.7,
        fontFamily: FONTS.AvenirBook,
        fontSize: SIZES.body4
    },
    button: {
        marginTop: 10,
        height: 39,
        width: 134,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        elevation: 2,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: {width: 10,height: 10}
    },
    pagination: {
      backgroundColor: 'transparent',
      width: 24,
      height: 14,
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
    }
  });
