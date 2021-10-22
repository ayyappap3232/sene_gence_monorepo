import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Linking} from 'react-native';
import BreadCrumbWithTwoLevelUpWithoutNavigationParams from '../../../components/breadCrumbs/BreadCrumbWithTwoLevelUpWithoutNavigationParams';
import OutlineButton from '../../../components/buttons/OutlineButton';
import Overlay from '../../../components/overlays/Overlay';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import { meetTheFoundationDiveDeeper } from '../../../utils/data/links';
import {ScreenNames} from '../../../utils/screenNames';

export default function MeetTheFounder() {
  const _headerImageView = () => {
    return (
        <ImageBackground
          source={images.meetTheFounder}
          resizeMode="cover"
          style={{paddingLeft: 36, paddingRight: 36, width: 334, height: 262}}>
          <View style={{alignItems: 'center'}}>
            <Text containerStyle={styles.imageTextTitle}>Meet the Founder</Text>
            <Spacer mt={10} />
            <Text
              containerStyle={{
                fontFamily: FONTS.AvenirHeavy,
                fontSize: SIZES.body4,
                letterSpacing: 0.7,
                color: COLORS.white,
                textAlign: 'center',
              }}>
              Building SeneGence has been my privilege and passion for more than
              10 years now” – Joni Rogers-Kante
            </Text>
          </View>
          <Overlay />
        </ImageBackground>
    );
  };

  const _aboutFounder = () => {
    return (
      <>
        <Text containerStyle={styles.aboutFounderTitle}>
          Joni Rogers-Kante, Founder, CEO, and Chairwoman
        </Text>
        <Spacer mt={20} />
        <Text containerStyle={styles.aboutFounderDescription}>
          While juggling the responsibilities of single motherhood, Joni
          Rogers-Kante developed a business plan and set out to make her dream
          of an innovative cosmetics company a reality. In 1999, she founded
          SeneGence®, and the company has since become a globally recognized
          leader in the industry. To Joni, the commitment to high-quality
          products that bring value to consumers and their communities is just
          as important as a flourishing business.
        </Text>
        <Spacer mt={20} />
        <Text containerStyle={styles.aboutFounderDescription}>
          After Joni learned that cosmetic companies consistently use the same
          ingredients in different products that tout “unique” claims, she knew
          SeneGence had to stand out from the rest. She set off across the globe
          with a team of scientists and botanists to find exceptional
          ingredients for SeneGence’s product formulations.
        </Text>
        <Spacer mt={20} />
        <Text containerStyle={styles.aboutFounderDescription}>
          Today, these ingredients are used to help produce the amazing results
          SeneGence SkinCare and Cosmetics are known for. SeneGence products are
          on the cutting edge of technology with original, patented, and
          proprietary formulations that really work! 
        </Text>
        <Spacer mt={20} />
      </>
    );
  };

  const _whereItBegin = () => {
    return (
      <>
        <Text containerStyle={styles.aboutFounderTitle}>Where it begin</Text>
        <Spacer mt={20} />
        <Text containerStyle={styles.aboutFounderDescription}>
          In 1999, Joni partnered with an award-winning scientist to develop a
          patented, never-before-seen liquid lip color: LipSense®. Better than
          any lipstick or lip stain available, LipSense quickly skyrocketed in
          popularity for its long-lasting ability. With a simple three coat
          application, LipSense delivers gorgeous color that stays on for up to
          18 hours. And that was just the beginning of a long line of products
          that really work!
        </Text>
        <Spacer mt={20} />
        <Text containerStyle={styles.aboutFounderDescription}>
          Joni also wanted to offer one of the most lucrative compensation plans
          in the industry, designed for women who are serious about building
          their career from home. This business model of earning additional
          income by selling products that really work took off!
        </Text>
        <Spacer mt={20} />
        <Text containerStyle={styles.aboutFounderDescription}>
          Today, the SeneGence line of anti-aging skin care and long-lasting
          cosmetics includes over 300 products, sold by tens of thousands of
          Independent Distributors across the globe. SeneGence has core
          operations in the USA, Canada, Australia, Mexico, and Hong Kong, with
          products available in many other territories across the globe.
        </Text>
        <Spacer mt={20} />
        <Image
          source={images.lipsenseshadeaward}
          style={{width: 334, height: 289}}
        />
      </>
    );
  };

  const _imageTextTitleAndContentWrapper = (
    image,
    title,
    description,
    buttonTitle = '',
  ) => {
    return (
      <>
        <Spacer mt={40} />
        <Text containerStyle={styles.aboutFounderTitle}>{title}</Text>
        <Spacer mt={20} />

        <Text containerStyle={styles.aboutFounderDescription}>
          {description}
        </Text>
        <Spacer mt={20} />
        {!!buttonTitle && (
          <>
            <OutlineButton
              textStyleContainer={{
                color: COLORS.white,
                fontFamily: FONTS.AvenirHeavy,
                fontSize: SIZES.body3,
                lineHeight: 26,
                letterSpacing: 1.6,
                textTransform: 'uppercase',
              }}
              containerStyle={{
                backgroundColor: COLORS.footerColor,
                borderColor: COLORS.footerColor,
              }}
              title={buttonTitle}
              onPress={() => Linking.openURL(meetTheFoundationDiveDeeper)}
            />
            <Spacer mt={20} />
          </>
        )}
        {image && <Image source={image} style={{width: 334, height: 289}} />}
        <Spacer mt={20} />
      </>
    );
  };

  const _cardView = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: 334,
          paddingVertical: 20,
          backgroundColor: COLORS.ligthGrey,
        }}>
        <View style={{width: 279, alignSelf: 'center'}}>
          <Spacer mt={11} />
          <Text
            containerStyle={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontFamily: FONTS.BebasNeueRegular,
              fontSize: SIZES.h3,
              color: COLORS.text,
              letterSpacing: 2,
            }}>
            Senegence
          </Text>
          <Spacer mt={11} />
          <Text containerStyle={[{textAlign: 'center'}]}>
            SeneGence was created to provide an opportunity for Independent
            Distributors to build their very own business and the potential to
            earn additional income by selling products that really work, all
            from within their own communities.
          </Text>
        </View>
        <Spacer mt={30} />
        <OutlineButton
          title={'Learn More'}
          onPress={() => {}}
          containerStyle={{width: 299, alignSelf: 'center', backgroundColor: COLORS.footerColor,borderColor: COLORS.footerColor}}
          textStyleContainer={{color:COLORS.white}}
        />
      </View>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 30, alignSelf: 'center'}}>
        <BreadCrumbWithTwoLevelUpWithoutNavigationParams
          titleStyle={{fontFamily: FONTS.AvenirHeavy}}
          oneLevelTitle={'ABOUT US'}
          screenName={ScreenNames.AboutUs}
          title={'MEET THE FOUNDER'}
        />
        <Spacer mt={10} />
        {_headerImageView()}
        <Spacer mt={40} />
        {_aboutFounder()}
        <Spacer mt={20} />
        {/* Note: youtubevideo content goes here */}
        {_whereItBegin()}

        {_imageTextTitleAndContentWrapper(
          images.rogerskantefamily,
          'I make family a priority every day, and I think every woman should',
          'SeneGence is a family business. Joni is married to Chief Strategy Officer Ben Kante, who is responsible for developing, communicating, executing, and sustaining strategic initiatives. Her oldest son, Alan, is Chief Experience Officer. He oversees the company through its growth and changes. Her youngest son, William, looks forward to also joining the team one day, but in the meantime stays busy with his schoolwork, musical talents, and many other activities.',
        )}
        {_imageTextTitleAndContentWrapper(
          images.accloads,
          'Accolades',
          'Joni currently serves on the Direct Selling Association’s (DA) Board of Directors. In 2018, she received Direct Selling News’ Bravo Award and the Excellence in Entrepreneurship Award by Orange County Business Journal, Joni is an active member of the Orange and Creek County communities and is also the author of Million Dollar Lips',
        )}
        {_imageTextTitleAndContentWrapper(
          images.milliondollarlips,
          'Million Dollar Lips',
          'Million Dollar Lips is a testimonial to Joni’s journey as a businesswoman who built a company of her reams with others and with a strong sense of destiny. This book serves as a practical guide to help others succeed in direct sales using a nonsensical style based upon truth. She makes it evident that we all make choices in life and business and those choices determine all that we achieve. ',
          'Dive Deeper',
        )}
        <Spacer mt={40} />
        {_cardView()}
        <Spacer mt={40} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  imageTextTitle: {
    fontSize: 70,
    letterSpacing: 7,
    color: COLORS.white,
    marginTop: 18,
    fontFamily: FONTS.BebasNeueBold,
    lineHeight: 80,
    width: 334,
    textAlign:'center'
  },
  aboutFounderTitle: {
    fontFamily: FONTS.BebasNeueRegular,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 1,
    color: COLORS.assistColor,
  },
  aboutFounderDescription: {
    fontFamily: FONTS.AvenirBook,
    fontSize: SIZES.body4,
    lineHeight: 19,
    color: COLORS.text,
    paddingHorizontal: 0.5,
  },
});
