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

//User defined Imports
import {COLORS, FONTS, SIZES} from '../../constants';
import {carouselTypes} from 'utils/data/CarouselData';

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

  const _renderItem = ({item,index}: any) => {
    if (typeOfCarousel === carouselTypes.HorizontalTextWithIcon) {
      return (
        <View
        key={item.name+index}
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
      return <View key={item.name+index} style={[verticalTextImageContainerStyle]}>
        <Image source={item.image} style={[verticalImageStyle]}/>
        <Text style={[verticalMainText]}>{item.name}</Text>
        <Text style={[verticalSubText]}>{item.description}</Text>
      </View>
    } else if(typeOfCarousel === carouselTypes.VerticalTextWithImage) {
      return <View key={item.name+index} style={[verticalTextImageContainerStyle]}>
        <Image source={item.image} resizeMode="contain" style={[verticalImageStyle]}/>
        <Text style={[verticalMainText]}>{item.name}</Text>
      </View>
    }else {
      return (
        <React.Fragment key={index}>
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
        </React.Fragment>
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
        keyExtractor={(_,index) => index.toString()}
        onSnapToItem={index => setActiveSlide(index)}
        autoplay={autoplay}
        loop={loop}
        layout={'default'}
        containerCustomStyle={{flexGrow: 0, marginBottom: -10}}
        inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      />
      <Pagination
        dotsLength={carouselData?.length}
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
