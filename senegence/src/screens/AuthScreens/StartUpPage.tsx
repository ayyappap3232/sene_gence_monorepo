import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  FlatList,
  Linking,
} from 'react-native';

//User defined Imports
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import HomeCarousel from 'components/carousels/HomeCarousel';
import {
  homeCarouselData,
} from 'utils/data/CarouselData';
import OutlineButton from 'components/buttons/OutlineButton';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {
  featureProductsData,
  IFeatureProductsData,
} from 'utils/data/FeatureProductsData';
import {
  ITrendingOnSocialData,
  TrendingOnSocialData,
} from 'utils/data/TrendingOnSocialData';
import { ScrollToTopContainer } from 'components/ScrollToTopContainer';
import AsSeenIn from 'components/AsSeenIn';
import { _renderSectionContent } from 'components/cards/CardWithSectionContent';
import { _beautyBook } from 'components/BeautyBook';
import { becomeAPreferredCustomer, distributorEnrollToday, shopAndSave, startYourOwnBusiness } from 'utils/data/links';

export default function StartUpPage() {
  const navigation = useNavigation<any>();
  const scrollRef = useRef<ScrollView>();


  const _renderProducts = (item: IFeatureProductsData) => {
    return (
      <ImageBackground
        key={item.id}
        source={item.image}
        style={{width: 162, height: 236, marginRight: 10}}>
        <Text containerStyle={styles.productsText1}>{item.name}</Text>
      </ImageBackground>
    );
  };

  const _featureProducts = () => {
    return (
      <View>
        <Text
          containerStyle={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: SIZES.h1,
            fontFamily: FONTS.BebasNeueRegular,
            letterSpacing: 1.5,
            color: COLORS.text,
          }}>
          Featured Products
        </Text>
        <Spacer mt={20.1} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={featureProductsData}
          renderItem={({item}) => _renderProducts(item)}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  };

  const _translucentLoosePowder = () => {
    return (
      <ImageBackground
        source={images.translucentLoosePowder}
        style={{
          width: SIZES.width - 62,
          height: 284,
          marginLeft: 5,
          justifyContent: 'center',
        }}>
        <Image
          source={images.translucentLoosePowderInnerContent}
          style={{width: SIZES.width - 60, height: 70}}
        />
      </ImageBackground>
    );
  };

  const _renderTrendingOnSocial = (item: ITrendingOnSocialData) => {
    return (
      <ImageBackground
      key={item.id}
        source={item.image}
        style={{
          width: 248,
          height: 216,
          marginRight: 10,
          justifyContent: 'flex-end',
          opacity: 0.7,
        }}>
        <Text
          containerStyle={{
            marginLeft: 14,
            fontSize: SIZES.h3,
            fontFamily: FONTS.BebasNeueRegular,
            letterSpacing: 2,
            color: COLORS.text,
          }}>
          {item.title}
        </Text>
        <Text
          containerStyle={{
            marginLeft: 14,
            fontSize: SIZES.body4,
            marginBottom: 10,
            fontFamily: FONTS.AvenirBook,
            letterSpacing: 0.7,
            color: COLORS.text,
          }}>
          {item.subTitle}
        </Text>
      </ImageBackground>
    );
  };

  const _trendingOnSocial = () => {
    return (
      <View>
        <Text
          containerStyle={{
            textAlign: 'center',
            fontFamily: FONTS.BebasNeueRegular,
            fontSize: SIZES.h1,
            letterSpacing: 1.5,
          }}>
          trending on social
        </Text>
        <Spacer mt={20} />
        <Text
          containerStyle={{
            fontFamily: FONTS.AvenirBook,
            fontSize: SIZES.body4,
            letterSpacing: 4.2,
            textTransform: 'uppercase',
          }}>
          follow #senegence
        </Text>
        <Spacer mt={11} />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => _renderTrendingOnSocial(item)}
          data={TrendingOnSocialData}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  };

  return (
    <>
    <ScrollToTopContainer showCart={true} isBannerShownOnInitialLoad={true}>
      <View style={{paddingHorizontal: 29}}>
        <HomeCarousel carouselData={homeCarouselData} />
        <OutlineButton containerStyle={{width: SIZES.width - 60}} title={'SHOP & SAVE'} onPress={() => Linking.openURL(shopAndSave)} />
        <Spacer mt={10} />
        <OutlineButton containerStyle={{width: SIZES.width - 60}} title={'BECOME A DISTRIBUTOR'} onPress={() => Linking.openURL(distributorEnrollToday)} />
        <Spacer mt={34} />
        <Image source={images.banner1} style={{width: SIZES.width - 60, height: 214}} />
        <ImageBackground source={images.path} style={{width: SIZES.width - 60, height: 214}}>
          <View
            style={{marginHorizontal: 20, marginTop: 23.6, marginBottom: 18.4}}>
            <Text
              containerStyle={{
                fontFamily: FONTS.BebasNeueBold,
                fontSize: SIZES.h3,
                letterSpacing: 2,
                color: COLORS.white,
              }}>
              BrowSense Volumizing Brow Gel
            </Text>
            <Spacer mt={4} />
            <Text
              containerStyle={{
                fontFamily: FONTS.AvenirBook,
                fontSize: SIZES.body4,
                letterSpacing: 0.7,
                color: COLORS.white,
              }}>
              <Text containerStyle={{color: '#00ffeb'}}>
                Volumizing Brow Gel
              </Text>{' '}
              not only tames, sets and defines the shape of brows with ease, it
              also does double duty as a brow treatment with clinically proven
              results to help volumize brows.
            </Text>
            <Spacer mt={10} />
            <OutlineButton
              onPress={() => {}}
              containerStyle={{
                width: 174,
                height: 39,
                backgroundColor: COLORS.white,
                borderWidth: 0,
              }}
              title={'SHOP BRO GEL'}
            />
          </View>
        </ImageBackground>
        <Spacer mt={40} />
        {_featureProducts()}
        <Spacer mt={71.5} />
        {_renderSectionContent(
          images.shopAndSaveGirl,
          'Shop & Save',
          'Kiss & tell preferred customer program',
          'Save 10% off on all your Favs! Collect Benefits Like Exclusive promos,free samples, and more.',
          'Become a preferred customer',
          () => Linking.openURL(becomeAPreferredCustomer),
          179,
        )}
        <Spacer mt={40} />
        {_renderSectionContent(
          images.ownBusinessGirl,
          'Build Your Own Business',
          'Become a Distributor',
          'Sell SeneGence products while earning discounts, growing your network, and building a career on your own terms.',
          'START YOUR BUSINESS',
          () => Linking.openURL(startYourOwnBusiness),
          233,
        )}
        <Spacer mt={40} />
        {_beautyBook()}
        <Spacer mt={43.6} />
        {_translucentLoosePowder()}
        <Spacer mt={36.4} />
        {_trendingOnSocial()}
        <Spacer mt={40.1} />
        <AsSeenIn />
        <Spacer mt={40} />
        </View>
    </ScrollToTopContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  scrollContainer: {
    paddingLeft: 21,
    paddingRight: 20,
  },
  productsText1: {
    fontFamily: FONTS.AvenirBook,
    letterSpacing: 1.6,
    fontSize: 16,
    color: COLORS.text,
    textTransform: 'uppercase',
    transform: [{rotate: '-90deg'}],
    right: 60,
    top: 40,
    textAlign:'left',

  },
  
});
