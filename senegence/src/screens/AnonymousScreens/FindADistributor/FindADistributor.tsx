import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import PlainCarousel from '../../../components/carousels/PlainCarousel';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import {carouselTypes} from '../../../utils/data/CarouselData';
import {findADistributorData} from '../../../utils/data/FindADistributor';
import DistributorTabSection from './DistributorTabSection';
import TabViewExample from './DistributorTabSection';

export default function FindADistributor() {
  const _headerImageView = () => {
    return (
      <ImageBackground
        source={images.findadistributor}
        style={{width: 335, height: 332}}>
        <Spacer mt={98} />
        <Text containerStyle={[globalStyles.bannerHeader, {letterSpacing: 3}]}>
          Find a
        </Text>
        <Text containerStyle={[globalStyles.bannerHeader, {letterSpacing: 3}]}>
          Distributor
        </Text>
      </ImageBackground>
    );
  };

  const _findADistributorSection = () => {
    return (
      <View style={{}}>
        <TextWithUnderLine title={'Find a Distributor'} />
        <Spacer mt={10} />
        

        <Text
          containerStyle={[
            globalStyles.text,
            {lineHeight: 19, textAlign: 'center'},
          ]}>
          All SeneGence® products are sold through SeneGence Independent
          Distributors. Please complete the information in one of the fields
          below to Find a Distributor near you, and start shopping.
        </Text>
      </View>
    );
  };

  const _meetOurExecutiveTeam = () => {
    return (
      <>
        
        <TextWithUnderLine title={'Meet Our Executive Team'} />
        <PlainCarousel
          carouselData={findADistributorData}
          verticalTextImageContainerStyle={globalStyles.verticalImageTextAndDescriptionWrapper}
          verticalImageStyle={{width: 120, height: 160,alignSelf: 'center',marginBottom: 20}}
          typeOfCarousel={
            carouselTypes.VerticalTitleAndDescriptionTextWithImage
          }
          verticalMainText = {[styles.commonCardText,{fontFamily:FONTS.AvenirHeavy}]}
          verticalSubText = {[styles.commonCardText,{fontFamily: FONTS.AvenirBook}]}
        />
      </>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={globalStyles.innerContainer}>
        <Spacer mt={7} />
        {_headerImageView()}
        <Spacer mt={30} />
        {_findADistributorSection()}
        <Spacer mt={40} />
        {/* //card section goes here */}
        <DistributorTabSection />
        <Spacer mt={40} />
        {_meetOurExecutiveTeam()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
    commonCardText: {
        fontSize: SIZES.body4,
        lineHeight: 20,
        letterSpacing: 0.28,
        textAlign: 'left',
        color: COLORS.text
    }
});
