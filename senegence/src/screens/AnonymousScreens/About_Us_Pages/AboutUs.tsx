import React from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, View} from 'react-native';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import OutlineButton from '../../../components/buttons/OutlineButton';
import CardWithImageTextAndButton from '../../../components/cards/CardWithImageTextAndButton';
import PlainCarousel from '../../../components/carousels/PlainCarousel';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import { aboutUsData } from '../../../utils/data/AboutUsData';
import {asSeenInCarouselData} from '../../../utils/data/CarouselData';

export default function AboutUs() {
  const _header = () => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={images.aboutusbanner}
        style={{
          width: 334,
          height: 278,
          marginVertical: 10,
          paddingVertical: 67,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text
            containerStyle={{
              fontSize: 70,
              lineHeight: 80,
              letterSpacing: 7,
              fontFamily: FONTS.BebasNeueBold,
              color: COLORS.white,
              textAlign: 'center',
            }}>
            ABOUT US
          </Text>
          <Spacer mt={10} />
          <Text
            containerStyle={{
              fontSize: SIZES.body4,
              letterSpacing: 0.7,
              color: COLORS.white,
            }}>
            SeneGence is a multi-faceted, international corporation that is
            committed to making a positive contribution to women everywhere.
          </Text>
        </View>
      </ImageBackground>
    );
  };

  const _ourStory = () => {
    return (
      <>
        <TextWithUnderLine title={'OUR STORY'} />
        <Spacer mt={9.5} />
        <View>
          <Text containerStyle={styles.ourStoryText}>
            Founded in 1999 by Joni Rogers-Kante, SeneGence entered the
            direct-selling scene with its premier product, LipSense®. This
            revolutionary lip color quickly became a hit among hard-working
            women. Things didn’t stop there! Our product line and global reach
            has expanded into new categories and markets, as we work to empower
            individuals to be successful business owners.
          </Text>
          <Spacer mt={20} />
          <Text containerStyle={styles.ourStoryText}>
            We pride ourselves on being on the cutting edge of anti-aging skin
            care, nourishing hair care, and long-lasting color technology with
            our proprietary formulations. Our products are formulated with no
            animal by-products, in compliance with FDA regulations, and made in
            the USA for strict quality control. Our Distributors strive to share
            these skin care systems and cosmetics with their Customers, who
            share the anticipation of each release.
          </Text>
          <Spacer mt={20} />
          <Text containerStyle={styles.ourStoryText}>
            Our vision is to offer superior products and an opportunity for
            individuals to be successful in business regardless of age,
            background, or education. We supply our Distributors with virtual
            trainings, events, business tools, and opportunities they need to
            build their businesses. Through hard work, dedication, and
            perseverance, our Distributors have earned gifts, built lifelong
            friendships, and traveled around the world.
          </Text>
          <Spacer mt={20} />
          <Text containerStyle={styles.ourStoryText}>
            SeneGence is committed to making a positive contribution to beauty
            enthusiasts everywhere. The new Kiss & Tell Preferred Customer
            program has opened the door for consumers who aren’t affiliated with
            a Distributor to try our products for themselves. This
            groundbreaking initiative allows SeneGence to reach all corners of
            the beauty market and share the love of our long-lasting color
            technology.
          </Text>
          <Spacer mt={20} />
          <Text containerStyle={styles.ourStoryText}>
            In 2020, SeneGence was named the Best Place to Work in Direct
            Selling by Direct Selling News. This incredible achievement is just
            one small glimpse into the positivity our culture stands upon.
          </Text>
          <Spacer mt={20} />
        </View>
      </>
    );
  };

  const _renderExecutiveTeam = ({item}: any) => {
      return <View style={{paddingHorizontal: 10}}><CardWithImageTextAndButton numberOfLinesOfDescription={2} numberOfLinesOfTitle={1} isEllipses={true} width={162} height={200} key={item.id} item={item} /></View>
  }

  const _meetOurExecutiveTeam = () => {
      return <>
        <View>
            <TextWithUnderLine title={'Meet Our Executive Team'}/>
            <Spacer mt={19.5}/>
            <FlatList contentContainerStyle={{paddingBottom: 20}} horizontal={true} data={aboutUsData} renderItem={_renderExecutiveTeam} keyExtractor={(_,index) => index.toString()}/>
        </View>
      </>
  }

  const _makingADifference = () => {
    return (
      <>
        <TextWithUnderLine title={'Making A Difference'} />
        <Text containerStyle={styles.ourStoryText}>
          The Make Sense Foundation (MSF), a nonprofit organization separate
          from SeneGence, was created by Joni Rogers-Kante in 2002 as part of
          the overall plan to give back to the community and support women and
          children in need. 
        </Text>
        <Spacer mt={20} />
        <Text containerStyle={styles.ourStoryText}>
          The MSF has donated time, services, creativity, and funds to a
          multitude of deserving organizations, including:
        </Text>
        {/* replace with the original carousel aboutus images */}
        <PlainCarousel carouselData={asSeenInCarouselData} />
        <Text containerStyle={styles.ourStoryText}>
          The proceeds from sales of select SeneGence products, including
          designated LipSense shades, go directly to The MSF to support
          operating expenses, while The MSF contributes 100% of the donations it
          receives to other deserving nonprofit organizations. SeneGence
          Independent Distributors can also contribute to the foundation by
          donating a portion of their commission checks and participating in
          various fundraising events and activities held throughout the year.
          <Text
            containerStyle={[
              styles.ourStoryText,
              {fontFamily: FONTS.AvenirMedium, color: COLORS.primary2},
            ]}>
            Learn More..
          </Text>
        </Text>
      </>
    );
  };

  const _contactUsCard = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: 334,
          height: 154,
          paddingVertical: 20,
          backgroundColor: COLORS.ligthGrey,
        }}>
        <Text
          containerStyle={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontFamily: FONTS.BebasNeueRegular,
            fontSize: SIZES.h3,
            color: COLORS.text,
            letterSpacing: 2
          }}>
          Contact Us
        </Text>
        <Spacer mt={4}/>
        <Text containerStyle={[styles.ourStoryText,{textAlign:'center'}]}>Have questions or need assistance? Our SeneCare Team is here to help.</Text>
        <Spacer mt={10}/>
          <Image source={images.dropusnow} style={{width: 170, height: 39, alignSelf:'center'}} />
      </View>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithOneLevelUp title={'About Us'} />
        <Spacer mb={10} />
        {_header()}
        <Spacer mt={30} />
        {_ourStory()}
        <Spacer mt={20} />
        {/* Youtube video to place */}
        {/* what is senegence slider */}
        {_meetOurExecutiveTeam()}
        <Spacer mt={40} />
        {_makingADifference()}
        <Spacer mt={20} />
        {_contactUsCard()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  ourStoryText: {
    fontSize: SIZES.body4,
    fontFamily: FONTS.AvenirBook,
    letterSpacing: 0.7,
    color: COLORS.text,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
