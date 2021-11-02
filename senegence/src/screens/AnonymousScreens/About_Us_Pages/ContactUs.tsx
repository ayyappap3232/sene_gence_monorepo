import React from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, View} from 'react-native';

//User defined Imports
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import OutlineButton from 'components/buttons/OutlineButton';
import Divider from 'components/dividers/Divider';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import { globalStyles } from 'globalstyles/GlobalStyles';
import {contactUsData, IContactUsData} from 'utils/data/ContactUsData';
import ContactUsForm from './ContactUsForm';

export default function ContactUs() {
  const _headerImageView = () => {
    return (
      <>
        <ImageBackground
          source={images.contactusbanner}
          style={{width: SIZES.width-40, height: 278,marginHorizontal: 10,alignSelf:'center'}}>
          <View>
            <Spacer mt={65} />
            <Text
              containerStyle={{
                fontSize: SIZES.veryLargeTitle,
                fontFamily: FONTS.BebasNeueBold,
                letterSpacing: 7,
                lineHeight: 80,
                color: COLORS.white,
                textAlign: 'center',
              }}>
              Contact Us
            </Text>
            <Spacer mt={10} />
            <Text
              containerStyle={{
                fontSize: SIZES.body4,
                fontFamily: FONTS.AvenirHeavy,
                letterSpacing: 0.7,
                color: COLORS.white,
                textAlign: 'center',
              }}>
              Interested in reselling our products?
            </Text>
            <Spacer mt={10} />
            <OutlineButton
              activeOpacity={0.7}
              title={'Get in Touch'}
              containerStyle={{
                alignSelf: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.white,
                width: 156,
              }}
              onPress={() => {}}
            />
          </View>
        </ImageBackground>
      </>
    );
  };

  const _mapList = (mapArray: any) => {
    return mapArray
      ? mapArray?.map((childItem: any, index: number) => (
          <Text
            key={index}
            containerStyle={[
              styles.commonText,
              {
                fontFamily: FONTS.AvenirBook,
              },
            ]}>
            {childItem}
          </Text>
        ))
      : null;
  };

  const _countryNameAndFlag = (item: IContactUsData) => {
    return (
      <>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            containerStyle={{
              fontSize: SIZES.h3,
              fontFamily: FONTS.BebasNeueRegular,
              letterSpacing: 2,
              color: COLORS.text,
            }}>
            {item.name}
          </Text>
          <Image
            source={item.flag}
            style={{width: 24, height: 24, marginLeft: 5}}
          />
        </View>
        <Spacer mt={19.6} />
        {_mapList(item?.address)}
      </>
    );
  };

  const _senecareNumber = (item: IContactUsData) => {
    return (
      <>
        <Text
          containerStyle={[
            styles.commonText,
            {
              fontFamily: FONTS.AvenirHeavy,
            },
          ]}>
          SeneCare Number
        </Text>
        {_mapList(item?.senecareNumber)}
      </>
    );
  };

  const _email = (item: IContactUsData) => {
    return (
      <>
        <Text
          containerStyle={[
            styles.commonText,
            {
              fontFamily: FONTS.AvenirHeavy,
            },
          ]}>
          Email
        </Text>
        <Text
          containerStyle={[
            styles.commonText,
            {
              fontFamily: FONTS.AvenirBook,
            },
          ]}>
          {item.email}
        </Text>
      </>
    );
  };

  const _office = (item: IContactUsData) => {
    return (
      <>
        <Text
          containerStyle={[
            styles.commonText,
            {
              fontFamily: FONTS.AvenirHeavy,
            },
          ]}>
          Office
        </Text>
        {_mapList(item?.office)}
      </>
    );
  };

  const _hoursOfOperation = (item: IContactUsData) => {
    return (
      <>
        <Text
          containerStyle={[
            styles.commonText,
            {
              fontFamily: FONTS.AvenirHeavy,
            },
          ]}>
          Hours of Operation
        </Text>
        {_mapList(item?.hoursOfOperation)}
      </>
    );
  };

  const _contactCard = (item: any) => {
    return (
      <View style={[globalStyles.contactCard,{marginHorizontal:10}]}>
      <View>
        <Divider
          width={SIZES.width-40}
          height={7}
          containerStyle={{backgroundColor: COLORS.primary2}}
        />
        <View style={{alignItems: 'center'}}>
          <Spacer mt={37} />
          {_countryNameAndFlag(item)}
          <Spacer mt={19.9} />
          {_senecareNumber(item)}
          <Spacer mt={19.9} />
          {_email(item)}
          <Spacer mt={19.9} />
          {item?.office && (
            <>
              {_office(item)}
              <Spacer mt={19.9} />
            </>
          )}
          {item?.hoursOfOperation && <>{_hoursOfOperation(item)}</>}
        </View>
        <Spacer mt={26.6} />
      </View>
      </View>
    );
  };

  const _contactCardWithFlatList = () => {
    return (
      <FlatList
        data={contactUsData}
        renderItem={({item}) => _contactCard(item)}
        keyExtractor={(_, index) => index.toString()}
      />
    );
  };

  const _getInTouch = () => {
    return (
      <View style={[globalStyles.contactCard,{marginHorizontal: 10, paddingRight: 7}]}>
        <Spacer mt={23} />
        <TextWithUnderLine title={'Get In Touch'} />
        <Spacer mt={9.5} />
        <Text
          containerStyle={{
            fontFamily: FONTS.AvenirBook,
            letterSpacing: 0.7,
            fontSize: 14,
            color: COLORS.text,
            textAlign: 'center'
          }}>
          Leave your message and we will getback to you shortly
        </Text>
        <Spacer mt={19.9} />
        <ContactUsForm />
        <Spacer mt={34.1} />
      </View>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, }}>
        <Spacer mt={10} />
        <View style={{marginLeft:20}}>
        <BreadCrumbWithOneLevelUp title={'CONTACT US'} />
        </View>
        <Spacer mt={10} />
        {_headerImageView()}
        <Spacer mt={30} />
        {_contactCardWithFlatList()}
        <Spacer mt={37} />
        {_getInTouch()}
        <Spacer mt={40} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  commonText: {
    fontSize: SIZES.body3,
    lineHeight: 30,
    letterSpacing: 0.8,
    color: COLORS.text,
    textAlign: 'center',
    paddingHorizontal: 24,
    flexWrap: 'wrap',
  },
  
});
