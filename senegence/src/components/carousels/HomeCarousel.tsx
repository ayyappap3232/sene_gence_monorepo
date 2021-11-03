import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

//User defined Imports
import { COLORS, FONTS, SIZES } from '../../constants';

export default function HomeCarousel({carouselData}: any) {
  const [activeSlide, setActiveSlide] = useState(0);
  const _renderItem = ({item}: any) => {
    return (
      <ImageBackground
        key={item.id}
        resizeMode="cover"
        source={item.image}
        style={{width: SIZES.width-60, height: 363}}>
        <View
          style={[
            styles.carouselInnerContent,
            {backgroundColor: item.overlayColor},
          ]}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text>{item.buttonText}</Text>
          </TouchableOpacity>
        </View>
        <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.pagination}
          dotColor={'blue'}
          inactiveDotColor={COLORS.white}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          dotStyle={{width: 14,height: 14, borderRadius: 10,borderWidth: 3,borderColor: COLORS.border}}
          dotContainerStyle={{width: 14,height: 14, borderRadius: 10, borderWidth: 2,borderColor: 'red'}}
        />
      </ImageBackground>
    );
  };

  return (
    <Carousel
      data={carouselData}
      renderItem={_renderItem}
      sliderWidth={353}
      itemWidth={363}
      onSnapToItem={index => setActiveSlide(index)}
      autoplay={true}
      autoplayInterval={200}
    />
  );
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
