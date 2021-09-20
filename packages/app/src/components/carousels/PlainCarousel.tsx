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
import {COLORS, FONTS, SIZES} from '../../constants';
import {carouselTypes} from '../../utils/data/CarouselData';

export default function PlainCarousel({
  carouselData,
  uri = false,
  sliderWidth = 353,
  itemWidth = 363,
  autoplay=true,
  loop = true,
  width = 334,
  height = 70,
  borderColor = COLORS.white,
  borderWidth = 0,
  typeOfCarousel = null,
  verticalTextImageContainerStyle = {},
  verticalImageStyle={},
  verticalMainText={},
  verticalSubText={}
}: any) {
  const [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({item}: any) => {
    if (typeOfCarousel === carouselTypes.HorizontalTextWithIcon) {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image
              resizeMode="contain"
              source={item.icon}
              style={{width: width, height: height}}
            />
          <Text>{item.name}</Text>
        </View>
      );
    }else if (typeOfCarousel === carouselTypes.VerticalTitleAndDescriptionTextWithImage){
      return <View style={[verticalTextImageContainerStyle]}>
        <Image source={item.image} style={[verticalImageStyle]}/>
        <Text style={[verticalMainText]}>{item.name}</Text>
        <Text style={[verticalSubText]}>{item.description}</Text>
      </View>
    } else {
      return (
        <>
          {!uri ? (
            <Image
              resizeMode="center"
              source={item.image}
              style={{width: width, height: height}}
            />
          ) : (
            <Image
              resizeMode="center"
              source={{uri: item.url}}
              style={{
                width: width,
                height: height,
                borderColor: borderColor,
                borderWidth: borderWidth,
              }}
            />
          )}
        </>
      );
    }
  };

  return (
    <>
      <Carousel
        data={carouselData}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={index => setActiveSlide(index)}
        autoplay={autoplay}
        loop={loop}
        layout={'default'}
        containerCustomStyle={{flexGrow: 0, marginBottom: -10}}
      />
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        //   containerStyle={styles.pagination}
        dotColor={'blue'}
        inactiveDotColor={COLORS.white}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
        dotStyle={{
          width: 14,
          height: 14,
          borderRadius: 10,
          borderWidth: 3,
          borderColor: COLORS.border,
        }}
        dotContainerStyle={{
          width: 14,
          height: 14,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'red',
        }}
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
  },
});
