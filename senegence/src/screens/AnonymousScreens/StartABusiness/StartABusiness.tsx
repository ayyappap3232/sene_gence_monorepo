import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import OutlineButton from '../../../components/buttons/OutlineButton';
import PlainCarousel from '../../../components/carousels/PlainCarousel';
import { _frequentlyAskedQuestions } from '../../../components/FrequentlyAskedQuestion';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import {carouselTypes} from '../../../utils/data/CarouselData';
import {findADistributorData} from '../../../utils/data/FindADistributor';
import {
  IStartABusinessData,
  startABusinessData,
} from '../../../utils/data/StartABusinessData';

export default function StartABusiness() {
  const _headerImageView = () => {
    return (
      <ImageBackground
        source={images.startabusiness}
        style={{width: 334, height: 388, alignSelf: 'center'}}>
        <Text containerStyle={[globalStyles.bannerHeader]}>
          Start Your Own Business
        </Text>
        <Spacer mt={10} />
        <Text containerStyle={[globalStyles.bannerBody]}>
        What if you could start earning while sharing the products you know and love? 
        </Text>
        <Spacer mt={10} />
        <OutlineButton
          textStyleContainer={[globalStyles.bannerBtnTextBlue]}
          containerStyle={[globalStyles.bannerBtnWhiteBackground]}
          title={'Shop Now'}
          onPress={() => {}}
        />
      </ImageBackground>
    );
  };

  const _becomeYourBoss = () => {
    return (
      <>
        <TextWithUnderLine title={'Become Your Own Boss Today!'} />
        <Spacer mt={9.5} />
        <Text containerStyle={[globalStyles.text, {textAlign: 'center'}]}>
          Build a career that really pays - on your terms! Join SeneGence as an
          Independent Distributor and start your own beauty business selling
          cutting-edge products – your own hours, anywhere you choose, and a
          competitive compensation plan. The potential to transform your life,
          career, family and lifestyle has arrived. Become what you inspire to
          be, a reality.
        </Text>
        <Spacer mt={20} />
        <OutlineButton
          title={'Start My Career'}
          textStyleContainer={[globalStyles.bannerBtnTextBlue]}
          containerStyle={[
            globalStyles.bannerBtnBlueOutline,
            {width: 186, borderWidth: 2},
          ]}
          onPress={() => {}}
        />
      </>
    );
  };

  const _endlessOpportunities = () => {
    return (
      <>
        <TextWithUnderLine title={'Endless Opportunities'} />
        <Spacer mt={9.5} />
        <Text containerStyle={[globalStyles.text, {textAlign: 'center'}]}>
          Getting paid to shop and share as an Independent Distributor comes
          with an abundance amount of opportunity. Get access to these exclusive
          benefits when you enroll:
        </Text>
      </>
    );
  };

  const _businessCardItem = (item: IStartABusinessData) => {
    return (
      <React.Fragment key={item.id}>
        <ImageBackground source={item.image} style={styles.imageWrapper}>
          <Spacer mt={80} />
          <Text containerStyle={styles.imageMainText}>{item.title}</Text>
          <Spacer mt={10} />
          <Text
            containerStyle={[
              globalStyles.text,
              {textAlign: 'center', marginHorizontal: 20},
            ]}>
            {item.description}
          </Text>
        </ImageBackground>
        <Spacer mt={20} />
      </React.Fragment>
    );
  };

  const _businessCards = () => {
    return startABusinessData.map((item, index) => {
      return _businessCardItem(item);
    });
  };

  const _buildYourBeautyBusiness = () => {
    return (
      <>
        <TextWithUnderLine title={'Build Your Beauty Business'} />
        <Text
          containerStyle={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.AvenirMedium,
            letterSpacing: 0.32,
            color: COLORS.text,
            textAlign: 'center',
          }}>
          Kiss & tell preferred customer program
        </Text>
        <Spacer mt={20} />
        <View
          style={{
            width: 334,
            backgroundColor: COLORS.backgroundGrayColor,
            alignSelf: 'center',
          }}>
          <Image
            source={images.distributorkit}
            style={{
              width: 271,
              height: 155,
              alignSelf: 'center',
              marginVertical: 20,
            }}
          />
          <Text
            containerStyle={[
              globalStyles.text_bebas_regular,
              {fontSize: SIZES.h3, letterSpacing: 2},
            ]}>
            New Distributor Kit
          </Text>
          <Spacer mt={4} />
          <Text
            containerStyle={[globalStyles.text, {marginHorizontal: SIZES.h3}]}>
            With just a $65 USD investment, you’ll receive a New Distributor Kit
            that’ll navigate your new opportunity with ease and start off
            strong! It’s full of business-building essentials, including a
            Checklist for Getting Started, Beauty Books, and testers of
            LipSense® shades in your choice of Deep Neutrals (Sheer Berry,
            Caramel Apple, and Bella) or Soft Neutrals (Luv It, Bombshell, and
            Dawn Rising). It also includes a free SeneSite, an e-commerce
            customizable site. Plus, business apps! Act now and enroll as a
            SeneGence Independent Distributor!{' '}
          </Text>
          <Spacer mt={20} />
          <OutlineButton
            containerStyle={[
              {
                backgroundColor: COLORS.footerColor,
                alignSelf: 'flex-start',
                marginLeft: 20,
                width: 244,
              },
            ]}
            textStyleContainer={{color: COLORS.white}}
            title={'Get Started'}
            onPress={() => {}}
          />
          <Spacer mt={10} />
          <OutlineButton
            containerStyle={[
              globalStyles.bannerBtnBlueOutline,
              {
                width: 244,
                alignSelf: 'flex-start',
                marginLeft: 20,
                borderWidth: 2,
              },
            ]}
            textStyleContainer={{color: COLORS.primary2}}
            title={'Connect w/ an expert'}
            onPress={() => {}}
          />
          <Spacer mt={20} />
        </View>
      </>
    );
  };

  const _whereYourJourneyBegins = () => {
    return (
      <>
        <Image
          source={images.whereyourjouneybegins}
          style={{width: 334, height: 233, alignSelf: 'center'}}
        />
        <Spacer mt={10} />
        <Text
          containerStyle={[
            globalStyles.text_bebas_regular,
            {fontSize: SIZES.h3, letterSpacing: 2},
          ]}>
          Where Your Journey Begins{' '}
        </Text>
        <Spacer mt={4} />
        <Text containerStyle={[globalStyles.text, {textAlign: 'center'}]}>
          Your first 90 days of your SeneGence Distributorship are crucial to
          establishing your business and starting your journey off right! We
          offer enticing programs specifically for those first 90 days as an
          Independent Distributor!{' '}
        </Text>
        <Spacer mt={10} />
        <OutlineButton
          containerStyle={[globalStyles.bannerBtnBlueOutline, {borderWidth: 2}]}
          textStyleContainer={globalStyles.bannerBtnTextBlue}
          title={'Learn More '}
          onPress={() => {}}
        />
      </>
    );
  };

  const _buildYourOwnBusiness = () => {
    return (
      <>
        <Image
          source={images.ownBusinessGirl}
          style={{width: 334, height: 233, alignSelf: 'center'}}
        />
        <Spacer mt={10} />
        <Text containerStyle={[globalStyles.text_bebas_bold]}>
          Build Your Own Business
        </Text>
        <Spacer mt={4} />
        <Text
          containerStyle={[
            globalStyles.text_avenir_medium,
            {textTransform: 'uppercase'},
          ]}>
          Become a Distributor
        </Text>
        <Spacer mt={4} />
        <Text containerStyle={[globalStyles.text, {textAlign: 'center'}]}>
          Sell SeneGence products while earning discounts, growing your network,
          and building a career on your own terms.
        </Text>
        <Spacer mt={10} />
        <OutlineButton
          containerStyle={[
            globalStyles.bannerBtnBlueOutline,
            {borderWidth: 2, width: 222},
          ]}
          textStyleContainer={globalStyles.bannerBtnTextBlue}
          title={'START YOUR BUSINESS'}
          onPress={() => {}}
        />
      </>
    );
  };

  const _meetOurExecutiveTeam = () => {
    return (
      <>
        <TextWithUnderLine title={'Meet Our Executive Team'} />
        <PlainCarousel
          carouselData={findADistributorData}
          verticalTextImageContainerStyle={
            globalStyles.verticalImageTextAndDescriptionWrapper
          }
          verticalImageStyle={{
            width: 120,
            height: 160,
            alignSelf: 'center',
            marginBottom: 20,
          }}
          typeOfCarousel={
            carouselTypes.VerticalTitleAndDescriptionTextWithImage
          }
          verticalMainText={[
            styles.commonCardText,
            {fontFamily: FONTS.AvenirHeavy},
          ]}
          verticalSubText={[
            styles.commonCardText,
            {fontFamily: FONTS.AvenirBook},
          ]}
        />
      </>
    );
  };

  

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 22}}>
        <BreadCrumbWithOneLevelUp title={'Distributor'} />
        <Spacer mt={10} />
        {_headerImageView()}
        <Spacer mt={30} />
        {_becomeYourBoss()}
        <Spacer mt={40} />
        {_endlessOpportunities()}
        <Spacer mt={20} />
        {_businessCards()}
        <Spacer mt={40} />
        {_buildYourBeautyBusiness()}
        <Spacer mt={40} />
        {_whereYourJourneyBegins()}
        <Spacer mt={40} />
        {_buildYourOwnBusiness()}
        <Spacer mt={40.2} />
        {_meetOurExecutiveTeam()}
        <Spacer mt={40} />
        {_frequentlyAskedQuestions()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: 334,
    height: 385,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMainText: {
    fontSize: SIZES.h3,
    fontFamily: FONTS.BebasNeueRegular,
    letterSpacing: 2,
    color: COLORS.text,
    textAlign: 'center',
  },
  commonCardText: {
    fontSize: SIZES.body4,
    lineHeight: 20,
    letterSpacing: 0.28,
    textAlign: 'left',
    color: COLORS.text,
  },
});
