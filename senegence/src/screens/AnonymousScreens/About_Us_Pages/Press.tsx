import React, { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AsSeenIn from '../../../components/AsSeenIn';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import CardWithImageTextAndButton from '../../../components/cards/CardWithImageTextAndButton';
import CardWithImageTextAndReadMoreOrLessButton from '../../../components/cards/CardWithImageTextAndReadMoreOrLessButton';
import {_renderSectionContent} from '../../../components/cards/CardWithSectionContent';
import PlainCarousel from '../../../components/carousels/PlainCarousel';
import PressDrawer from '../../../components/drawers/PressDrawer';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import ShowMoreLessText from '../../../components/text/ShowMoreLessText';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import {carouselTypes} from '../../../utils/data/CarouselData';
import {pressData, pressDrawerContentData} from '../../../utils/data/PressData';

export default function Press() {

  const _menu = () => {
    return (
      <PressDrawer pressDrawerContentData={pressDrawerContentData} initialId={"PDCD1"}/>
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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          image={images.VolumizingBrowGelLifestyle}
          headerTitle={'Us Weekly'}
        />
        <Spacer mt={20} />
        <CardWithImageTextAndReadMoreOrLessButton
          moreTitle={'Read Full Article'}
          lessTitle={'Read Less Article'}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
          image={images.EnchantedForest_ShadowSenseLifestyle}
          headerTitle={'Today'}
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
        <View style={{alignSelf: 'center'}}>
          {_renderSectionContent(
            images.shopAndSaveGirl,
            'Shop & Save',
            'Kiss & tell preferred customer program',
            'Save 10% off on all your Favs! Collect Benefits Like Exclusive promos,free samples, and more.',
            'Become a preferred customer',
            179,
          )}
        </View>
        <Spacer mt={50} />
        {_publications()}
        <Spacer mt={40} />
        {_acclaim()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
