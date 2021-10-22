import React from 'react';
import {Image, ImageBackground, Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import OutlineButton from '../../../components/buttons/OutlineButton';
import PlainCarousel from '../../../components/carousels/PlainCarousel';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import { foundation } from '../../../utils/data/Foundation';
import { applyForGrant, makesensefoundation, nominateAnOrganization } from '../../../utils/data/links';

export default function MakeSenseFoundation() {
  const _headerImageView = () => {
    return (
      <ImageBackground
        source={images.makesensebanner}
        style={{width: 334, height: 369}}>
        <Spacer mt={20} />
        <View>
          <Text containerStyle={globalStyles.bannerHeader}>
            The Make Sense Foundation
          </Text>
          <Text
            containerStyle={[globalStyles.bannerBody, {paddingHorizontal: 2}]}>
            Long-Lasting Lip Colors, multiple formulas to choose from
          </Text>
          <Spacer mt={10} />
          <OutlineButton
            title={'Learn More'}
            onPress={() => Linking.openURL(makesensefoundation)}
            containerStyle={styles.bannerBtn}
            textStyleContainer={styles.commonBtnText}
          />
        </View>
      </ImageBackground>
    );
  };

  const _carrier = () => {
    return (
      <>
        <Image source={images.group} style={{width: 334, height: 217}} />
        <Spacer mt={20} />
        <Text
          containerStyle={{
            fontSize: SIZES.h1,
            fontFamily: FONTS.BebasNeueRegular,
            letterSpacing: 3,
            color: COLORS.text,
          }}>
          SeneGence is all about empowering women with a career that really
          works
        </Text>
        <Spacer mt={4} />
        <Text containerStyle={[globalStyles.text,{paddingHorizontal: 8}]}>
          SeneGence is all about empowering women with a career that really
          works and helping them to look and feel more beautiful with innovative
          skin care and cosmetics.
        </Text>
        <Spacer mt={20} />
        <Text containerStyle={globalStyles.text}>
          The Make Sense Foundation (MSF) was created by Joni Rogers-Kante in
          2002 as part of the overall plan to give back to the community. A
          nonprofit organization, it is a separate entity from SeneGence but is
          directly involved with SeneGence’s charitable initiatives.
        </Text>
        <Spacer mt={20} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 6,
              height: 66,
              backgroundColor: COLORS.primary,
              marginRight: 10,
            }}></View>
          <Text containerStyle={styles.carrierText}>
            THE MAKE SENSE FOUNDATION IS DEDICATED TO SUPPORTING WOMEN AND
            CHILDREN IN NEED.
          </Text>
        </View>
      </>
    );
  };

  const _nominateAnOrganization = () => {
    return (
      <View
        style={{
          width: 340.5,
          paddingVertical: 20,
          backgroundColor: COLORS.ligthGrey,
          paddingHorizontal: 5
        }}>
        <Text style={[globalStyles.text]}>
          The proceeds from the sale of select SeneGence products, including
          designated LipSense shades, go directly to The MSF to support
          operating expenses, while The MSF contributes 100% of the donations it
          receives to other deserving nonprofit organizations. SeneGence
          Independent Distributors can also contribute to the foundation by
          donating a portion of their commission checks and participating in
          various fundraising events and activities held throughout the year.
        </Text>
        <Spacer mt={20} />
        <Text style={globalStyles.text}>
          Distributors and communities can nominate an organization for donation
          consideration by contacting The MSF here:
        </Text>
        <Spacer mt={10} />
        <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(nominateAnOrganization)}>
        <Image
          source={images.nominateanorganization}
          style={{width: 329, height: 43, alignSelf: 'center'}}
        />
        </TouchableOpacity>
      </View>
    );
  };

  const _applyForGrant = () => {
    return (
      <View
        style={{
          width: 340.5,
          paddingVertical: 20,
          backgroundColor: COLORS.ligthGrey,
        }}>
        <Image
          source={images.msf}
          style={{width: 340.5, height: 261}}
          resizeMode="contain"
        />
        <Spacer mt={10} />
        <Text containerStyle={[globalStyles.text, {marginHorizontal: 11}]}>
          To date, The MSF has assisted organizations from coast to coast
          through the generosity of Distributors, community fundraisers, and
          donations. Much-needed funds will continue to directly benefit
          organizations that support women in children in crisis for years to
          come.
        </Text>
        <Spacer mt={10} />
        <OutlineButton
          title={'Apply for grant'}
          onPress={() => Linking.openURL(applyForGrant)}
          textStyleContainer={[styles.commonBtnText]}
          containerStyle={styles.applyForGrantBtn}
        />
      </View>
    );
  };

  const _ourPartners = () => {
      return <>
        <Text containerStyle={globalStyles.text_bebas_regular}>Our Partners</Text>
        <Spacer mt={20} />
        <PlainCarousel carouselData={foundation}/>
      </>
  }

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20, alignItems: 'center'}}>
        <Spacer mt={10} />
        {_headerImageView()}
        <Spacer mt={30.2} />
        {_carrier()}
        <Spacer mt={40} />
        {_nominateAnOrganization()}
        <Spacer mt={40} />
        {_applyForGrant()}
        <Spacer mt={40} />
        {_ourPartners()}
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  bannerBtn: {
    width: 144,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
  },
  commonBtnText: {
    fontFamily: FONTS.AvenirHeavy,
    letterSpacing: 1.4,
    color: COLORS.primary2,
    fontSize: SIZES.body4,
    lineHeight: 26,
    textTransform:'uppercase',
  },
  carrierText: {
    fontSize: SIZES.body3,
    letterSpacing: 0.32,
    color: COLORS.text,
    fontFamily: FONTS.AvenirMedium,
    textAlign: 'left',
    paddingRight: 40,
  },
  applyForGrantBtn:{
    marginHorizontal: 11,
    width: 188,
    borderColor: COLORS.primary2,
    borderWidth: 2,
  }
});
