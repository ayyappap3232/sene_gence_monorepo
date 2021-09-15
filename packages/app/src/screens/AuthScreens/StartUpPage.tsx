import React, {useLayoutEffect, createRef, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
  FlatList,
  Animated,
} from 'react-native';
import {
  AppLogo,
  DownloadIcon,
  Globe,
  HamburgerMenu,
  PageUp,
  Search,
} from '../../../assets/svgs';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import HomeCarousel from '../../components/carousels/HomeCarousel';
import Header from '../../components/headers/Header';
import {
  asSeenInCarouselData,
  homeCarouselData,
} from '../../utils/data/CarouselData';
import OutlineButton from '../../components/buttons/OutlineButton';
import Spacer from '../../components/Spacer';
import Text from '../../components/text/Text';
import {
  featureProductsData,
  IFeatureProductsData,
} from '../../utils/data/FeatureProductsData';
import OutlineButtonWithIcon from '../../components/buttons/OutlineButtonWithIcon';
import {
  ITrendingOnSocialData,
  TrendingOnSocialData,
} from '../../utils/data/TrendingOnSocialData';
import PlainCarousel from '../../components/carousels/PlainCarousel';
import Footer from '../../components/footers/Footer';
import {useScrollToTop} from '@react-navigation/native';
import FAB from 'react-native-fab';

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

  const _renderSectionContent = (
    image: any,
    text1: string,
    text2: string,
    text3: string,
    buttonText: string,
    height: number,
  ) => {
    return (
      <>
        <Image
          source={image}
          style={{width: 334, height: height}}
          resizeMode="contain"
        />
        <Spacer mt={10} />
        <Text containerStyle={styles.shopSaveText1}>{text1}</Text>
        <Spacer mt={4} />
        <Text containerStyle={styles.shopSaveText2}>{text2}</Text>
        <Spacer mt={4} />
        <Text containerStyle={styles.shopSaveText3}>{text3}</Text>
        <Spacer mt={10} />
        <OutlineButton
          containerStyle={styles.shopSaveBtn}
          title={buttonText}
          textStyleContainer={styles.shopSaveBtnText}
          onPress={() => {}}
        />
      </>
    );
  };

  const _beautyBook = () => {
    return (
      <ImageBackground
        source={images.beautyBg}
        style={{width: 332, height: 421, marginLeft: 5}}>
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

  const _translucentLoosePowder = () => {
    return (
      <ImageBackground
        source={images.translucentLoosePowder}
        style={{
          width: 332,
          height: 284,
          marginLeft: 5,
          justifyContent: 'center',
        }}>
        <Image
          source={images.translucentLoosePowderInnerContent}
          style={{width: 334, height: 70}}
        />
      </ImageBackground>
    );
  };

  const _renderTrendingOnSocial = (item: ITrendingOnSocialData) => {
    return (
      <ImageBackground
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

  const _asSeenIn = () => {
    return (
      <>
        <Text
          containerStyle={{
            fontFamily: FONTS.BebasNeueRegular,
            fontSize: SIZES.h1,
            letterSpacing: 1.4,
            textAlign: 'center',
          }}>
          As Seen In
        </Text>
        <Spacer mt={20} />
        <PlainCarousel carouselData={asSeenInCarouselData} />
      </>
    );
  };

  const _goToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    })
  };

  const [showPageUp, setShowPageUp] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        onScroll={(e) => {         
          setShowPageUp(e.nativeEvent.contentOffset.y > 100 ? true: false)
        }}
        ref={scrollRef}
        contentContainerStyle={styles.scrollContainer}>
        <HomeCarousel carouselData={homeCarouselData} />
        <OutlineButton title={'SHOP & SAVE'} onPress={() => {}} />
        <Spacer mt={10} />
        <OutlineButton title={'BECOME A DISTRIBUTOR'} onPress={() => {}} />
        <Spacer mt={34} />
        <Image source={images.banner1} style={{width: 334, height: 214}} />
        <ImageBackground source={images.path} style={{width: 334, height: 214}}>
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
        {/* feature products */}
        <Spacer mt={40} />
        {_featureProducts()}
        <Spacer mt={71.5} />
        {_renderSectionContent(
          images.shopAndSaveGirl,
          'Shop & Save',
          'Kiss & tell preferred customer program',
          'Save 10% off on all your Favs! Collect Benefits Like Exclusive promos,free samples, and more.',
          'Become a preferred customer',
          179,
        )}
        <Spacer mt={40} />
        {_renderSectionContent(
          images.ownBusinessGirl,
          'Build Your Own Business',
          'Become a Distributor',
          'Sell SeneGence products while earning discounts, growing your network, and building a career on your own terms.',
          'START YOUR BUSINESS',
          233,
        )}
        <Spacer mt={40} />
        {_beautyBook()}
        <Spacer mt={43.6} />
        {_translucentLoosePowder()}
        <Spacer mt={36.4} />
        {_trendingOnSocial()}
        <Spacer mt={40.1} />
        {_asSeenIn()}
        <Spacer mt={40} />
        <Footer
          containerStyle={{
            marginLeft: -20,
            marginRight: -20,
            paddingHorizontal: 27,
            paddingTop: 28.6,
            backgroundColor: COLORS.footerColor,
          }}
        />
      </ScrollView>
      
        <FAB
          onClickAction={() => {
            _goToTop()
          }}
          
          visible={showPageUp}
          iconTextComponent={
            <PageUp style={{elevation: 2}}/>
          }
        />
    </SafeAreaView>
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
    position: 'absolute',
    marginTop: 45,
    marginLeft: -30,
  },
  shopSaveText1: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: FONTS.BebasNeueBold,
    letterSpacing: 2,
    color: COLORS.text,
    textAlign: 'center',
  },
  shopSaveText2: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: FONTS.AvenirMedium,
    letterSpacing: 1.6,
    color: COLORS.text,
    textAlign: 'center',
  },
  shopSaveText3: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: FONTS.AvenirBook,
    letterSpacing: 0.7,
    color: COLORS.text,
    textAlign: 'center',
  },
  shopSaveBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary2,
  },
  shopSaveBtnText: {
    color: COLORS.primary2,
    fontFamily: FONTS.AvenirHeavy,
    fontSize: 14,
    lineHeight: 26,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
});
