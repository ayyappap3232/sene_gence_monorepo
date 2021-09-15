import React, {useState} from 'react';
import {
    Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { COLORS, FONTS, SIZES } from '../../constants';

export default function PlainCarousel({carouselData}: any) {
  const [activeSlide, setActiveSlide] = useState(0);
  const _renderItem = ({item}: any) => {
    return (
        <>
      <Image
        resizeMode="center"
        source={item.image}
        style={{width: 334, height: 70}} />
        
        </>
    );
  };

  return (
      <>
    <Carousel
      data={carouselData}
      renderItem={_renderItem}
      sliderWidth={353}
      itemWidth={363}
      onSnapToItem={index => setActiveSlide(index)}
      autoplay={false}
      loop={false}
    />
    <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={activeSlide}
        //   containerStyle={styles.pagination}
          dotColor={'blue'}
          inactiveDotColor={COLORS.white}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          dotStyle={{width: 14,height: 14, borderRadius: 10,borderWidth: 3,borderColor: COLORS.border}}
          dotContainerStyle={{width: 14,height: 14, borderRadius: 10, borderWidth: 2,borderColor: 'red'}}
        />
    </>
  );
}

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: 'transparent',
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  }
});
