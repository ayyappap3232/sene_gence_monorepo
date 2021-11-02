import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

//User defined Imports
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import OutlineButton from 'components/buttons/OutlineButton';
import CardWithImageTextAndButton from 'components/cards/CardWithImageTextAndButton';
import PlainCarousel from 'components/carousels/PlainCarousel';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import { globalStyles } from 'globalstyles/GlobalStyles';
import {aboutUsData, IAboutUsData} from 'utils/data/AboutUsData';
import {
  advisoryBoardData,
  carouselTypes,
} from 'utils/data/CarouselData';
import {ScreenNames} from 'utils/screenNames';
import { COLORS, FONTS, images, SIZES } from '../../../constants';

export default function ExecutiveManagementTeam() {
  const navigation = useNavigation<any>();

  const _imageView = () => {
    return (
      <Image
        source={images.executiveManagementTeam}
        style={{
          width: 334,
          height: 317,
          marginTop: 5,
          marginRight: 10.5,
          marginBottom: 30,
        }}
        resizeMode="contain"
      />
    );
  };

  const _needAssistance = () => {
    return (
      <View style={styles.assistance}>
        <Text
          containerStyle={{
            fontFamily: FONTS.BebasNeueRegular,
            fontSize: SIZES.h1,
            lineHeight: 40,
            letterSpacing: 3,
            color: COLORS.assistColor,
          }}>
          NEED ASSISTANCE?
        </Text>
        <Spacer mb={20}/>
        <Text containerStyle={{
            fontFamily: FONTS.AvenirBook,
            fontSize: SIZES.body4,
            lineHeight: 24,
            letterSpacing: 0.7,
            color: COLORS.text,
          }}>
          Connect with our SeneGence® Customer Service team or find one of our
          experienced Distributors to answer all your questions and get started
          on your future career today. For more information visit our contact
          page.
        </Text>
        <Spacer mb={50}/>
        <OutlineButton
          textStyleContainer={{color: COLORS.white}}
          title={'Get In Touch'}
          containerStyle={{
            backgroundColor: COLORS.footerColor,
            width: 162,
            height: 43,
            borderWidth: 2,
            borderColor: COLORS.footerColor,
          }}
          onPress={() => navigation.navigate(ScreenNames.ContactUs)}
        />
      </View>
    );
  };

  const _meetOurExecutiveTeam = () => {
    return (
      <>
        <TextWithUnderLine title={'Meet Our Executive Team'} />
        <Spacer mb={19.5} />
        {aboutUsData.map((item: IAboutUsData, index) => {
          return (
            <View key={item.id} style={{alignSelf:'center'}}>
              <CardWithImageTextAndButton   item={item} />
              <Spacer mb={30} />
            </View>
          );
        })}
        <Spacer mb={39.8} />
        <TextWithUnderLine title={'ADVISORY BOARD'} />
        <PlainCarousel
          autoplay={false}
          verticalMainText={[
            styles.commonTitleAndDescription,
            {fontFamily: FONTS.AvenirHeavy},
          ]}
          verticalSubText={[
            styles.commonTitleAndDescription,
            {fontFamily: FONTS.AvenirBook},
          ]}
          verticalTextImageContainerStyle={globalStyles.verticalImageTextAndDescriptionWrapper}
          verticalImageStyle={styles.advisoryImage}
          carouselData={advisoryBoardData}
          typeOfCarousel={
            carouselTypes.VerticalTitleAndDescriptionTextWithImage
          }
        />
        {_needAssistance()}
      </>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithOneLevelUp title={"Executive Management Team"}/>
        {_imageView()}
        {_meetOurExecutiveTeam()}
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  
  advisoryImage: {
    width: 142.2,
    height: 165,
    marginRight: 6.8,
    marginBottom: 15.2,
    opacity: 0.9,
  },
  commonTitleAndDescription: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: COLORS.text,
  },
  assistance: {
    width: 334,
    height: 392,
    marginTop: 30,
    marginRight: 10,
    marginBottom: 30,
    paddingTop: 60,
    paddingRight: 28,
    paddingBottom: 49,
    paddingLeft: 31,
    backgroundColor: COLORS.ligthGrey,
    alignSelf:'center'
  },
});
