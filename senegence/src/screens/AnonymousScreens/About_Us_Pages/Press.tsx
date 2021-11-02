import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

//User defined Imports
import AsSeenIn from 'components/AsSeenIn';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import CardWithImageTextAndReadMoreOrLessButton from 'components/cards/CardWithImageTextAndReadMoreOrLessButton';
import {_renderSectionContent} from 'components/cards/CardWithSectionContent';
import PlainCarousel from 'components/carousels/PlainCarousel';
import PressDrawer from 'components/drawers/PressDrawer';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import {COLORS, images, SIZES} from '../../../constants';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {carouselTypes} from 'utils/data/CarouselData';
import {pressData, pressDrawerContentData} from 'utils/data/PressData';

export default function Press() {
  const _menu = () => {
    return (
      <PressDrawer
        pressDrawerContentData={pressDrawerContentData}
        initialId={'PDCD1'}
      />
    );
  };

  const _pressBanner = () => {
    return (
      <Image
        source={images.pressbanner}
        style={{height: 335, width: SIZES.width - 40}}
      />
    );
  };

  const _recentFeatures = () => {
    return (
      <View>
        <TextWithUnderLine title={'Recent Features'} />
        <Spacer mt={30} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={
            'Shop the Best Makeup, Haircare, Skincare and Other Beauty Must-Haves for 2021'
          }
          image={images.VolumizingBrowGelLifestyle}
          headerTitle={'Us Weekly'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={'The 2021 Shape Beauty Awards: Best Makeup Products'}
          image={images.TranslucentPowders_Lifestyle}
          headerTitle={'Shape'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={'2021 InStyle Beauty Editors’ Pick'}
          image={images.Digital_Defense_4}
          headerTitle={'InStyle'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={
            '5 Products That’ll Instantly Upgrade Your Nighttime Skin Care Routine'
          }
          image={images.Digital_Defense}
          headerTitle={'Total Beauty'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={'Lip Mask & NeoTight in their Top 10 Beauty Picks'}
          image={images.Neotight_Lifestyle}
          headerTitle={'Gladys Magazine'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={'Facial Oils for any skin type - Nangai Oil'}
          image={images.Nangai_Oil}
          headerTitle={'FABFITFUN'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={
            '5 Reasons To Be Hopeful During Corona Crisis” by CEO Joni Rogers-Kante'
          }
          image={images.JoniDesk_White}
          headerTitle={'Authority Magazine'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <TextWithUnderLine title={'Awards'} />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={
            'Our Translucent Loose Powders were awarded the 2021 SHAPE Beauty Award for best powder! SHAPE says, “Just a light dusting of SeneGence Translucent Loose Powder soaks up post-workout sweat and excess shine, leaving your skin selfie ready.” Each winning beauty product has been tested by the SHAPE Squad, a group of fitness- and beauty-minded staffers, wellness pros, and dermatologists.'
          }
          image={images.winnershapebeautyaward}
          headerTitle={'2021 Shape Beauty Award – Best Powder'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={
            'LipSense color technology has received the Beauty 2020 “ICONS Award” by SHAPE. The winners were selected by editors and The Shape Squad, a group of fitness and beauty-minded staffers, pros, and dermatologists who tested and approved 77 products that not only work but also enhance your physical and mental states.'
          }
          image={images.winnershapebeautyaward_2}
          headerTitle={'LipSense Awarded Shape 2020 Beauty Award'}
          containerStyle={{alignItems: 'center', elevation: 0}}
          textContainerStyle={{textAlign: 'center'}}
        />
      </View>
    );
  };

  const _publications = () => {
    return (
      <View>
        <TextWithUnderLine title={'Publications'} />
        <Text
          containerStyle={[
            globalStyles.text_avenir_medium,
            {letterSpacing: 0.32},
          ]}>
          - By Joni Rogers (Author), Anthony Robbins (Foreword)
        </Text>
        <Spacer mt={20} />
        <View
          style={{backgroundColor: COLORS.backgroundGrayColor, padding: 20}}>
          <Image
            source={images.milliondollar}
            resizeMode="contain"
            style={{width: 330, height: 335.7, alignSelf: 'center'}}
          />
          <Spacer mt={10} />
          <Text
            containerStyle={[
              globalStyles.text_bebas_regular,
              {textAlign: 'left'},
            ]}>
            Million Dollar Lips: A Journey into the hearts women and business
          </Text>
          <Spacer mt={4} />
          <Text
            containerStyle={[
              globalStyles.text_avenir_medium,
              {
                letterSpacing: 0.32,
                textAlign: 'left',
                color: COLORS.swatch,
                textTransform: 'uppercase',
              },
            ]}>
            Kindle Edition
          </Text>
          <Spacer mt={4} />
          <Text containerStyle={globalStyles.text}>
            There is a process to achieve what you really want in life. Living a
            life of your dreams requires clarity about what you want, tools and
            strategies to get you there and personal alignment in your emotions,
            desires, and beliefs. SeneGence International® CEO & Founder, Joni
            Rogers-Kante has dedicated her life to molding and coaching women in
            the direct sales world, ultimately helping them to find their
            clarity. Million Dollar Lips is a testimonial to Joni’s journey as a
            businesswoman who built a company of her dreams with a strong sense
            of destiny. This book serves as a practical guide to help others
            succeed in direct sales using a nonsensical style based upon truth.
            She makes it evident that we all make choices in life and business,
            and those choices determine all that we achieve.
          </Text>
          <Spacer mt={20} />
          <Image
            source={images.purchaseebook}
            style={{width: 193, height: 39}}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  const _acclaim = () => {
    return (
      <View>
        <TextWithUnderLine title={'Acclaim'} />
        <PlainCarousel
          verticalMainText={[
            globalStyles.text_avenir_heavy,
            {paddingLeft: 5, paddingTop: 10},
          ]}
          verticalTextImageContainerStyle={[
            globalStyles.shadowEffect,
            {
              backgroundColor: COLORS.white,
              margin: 20,
              padding: 20,
              alignSelf: 'center',
            },
          ]}
          carouselData={pressData}
          verticalImageStyle={{width: 120, height: 160}}
          typeOfCarousel={carouselTypes.VerticalTextWithImage}
        />
      </View>
    );
  };

  return (
    <ScrollToTopContainer headerContainerStyle={globalStyles.shadowEffect}>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Spacer mt={20} />
        {_menu()}
        <Spacer mt={10} />
        <BreadCrumbWithOneLevelUp title={'Press'} />
        <Spacer mt={20} />
        {_pressBanner()}
        <Spacer mt={30} />
        <AsSeenIn />
        <Spacer mt={40} />
        {_recentFeatures()}
        <Spacer mt={20} />
        {_publications()}
        <Spacer mt={40} />
        {_acclaim()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
