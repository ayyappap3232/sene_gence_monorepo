import React from "react";
import { Image, View } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { globalStyles } from "../globalstyles/GlobalStyles";
import OutlineButton from "./buttons/OutlineButton";
import Spacer from "./Spacer";
import Text from "./text/Text";
import TextWithUnderLine from "./text/TextWithUnderLine";

export const _buildYourBeautyBusiness = () => {
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

