import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

//User defined Imports
import CustomAccordian from 'components/accordians/Accordian';
import Astrick from 'components/Astrick';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import OutlineTextInput from 'components/textInputs/OutlineTextInput';
import OutlineTextInputMultiline from 'components/textInputs/OutlineTextInputMultiline';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {frequentlyAskedQuestionData} from 'utils/data/FAQSData';
import ContactUsForm from '../About_Us_Pages/ContactUsForm';

export default function FAQS() {
  const _headerImageView = () => {
    return (
      <ImageBackground
        source={images.faqbanner}
        style={{width: 334, height: 314, alignSelf: 'center'}}
        resizeMode="cover">
        <Spacer mt={28} />
        <Text containerStyle={[globalStyles.bannerTitle]}>
          How we can Help you?
        </Text>
        <Spacer mt={10} />
        <OutlineTextInput
          placeholder={'Type Keywords to find answers….'}
          containerStyle={{
            width: 272,
            alignSelf: 'center',
            borderRadius: 10,
            height: 39,
          }}
          onChangeText={() => {}}
        />
        <Spacer mt={20} />
        <Text
          containerStyle={[
            globalStyles.text,
            {
              fontFamily: FONTS.AvenirHeavy,
              textAlign: 'center',
              paddingHorizontal: 26,
              color: COLORS.white,
            },
          ]}>
          You can also browse the topics below to find what you are looking for.
        </Text>
      </ImageBackground>
    );
  };

  const _faqs = () => {
    return frequentlyAskedQuestionData.map((item, index) => {
      return (
        <View key={item.id} style={{marginBottom: 20, alignItems:'center'}}>
          <CustomAccordian
            titleContainerStyle={{
              width: 298,
              fontFamily: FONTS.AvenirMedium,
              fontSize: SIZES.body3,
              letterSpacing: 0.32,
            }}
            sectionContainerStyle={{marginTop: 10, marginBottom: 20}}
            noContentTextFound={'No Description Found!'}
            borderTopWidth={1}
            borderBottomWidth={1}
            marginHorizontal={5}
            collapsibleData={[{title: item.title, content: item.description}]}
          />
        </View>
      );
    });
  };

  const _inputItem = (
    title: string,
    onChangeText: any,
    placeholder: string,
    isMandatory?: boolean,
    multiline?: boolean,
  ) => {
    return (
      <>
        <Text>
          {title} {isMandatory && <Astrick />}
        </Text>
        <Spacer mt={4} />
        {multiline ? (
          <OutlineTextInputMultiline
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={() => {}}
            multiline={multiline}
          />
        ) : (
          <OutlineTextInput
            containerStyle={{
              backgroundColor: 'rgba(244, 244, 244, 0.5)',
              width: '100%',
            }}
            placeholder={placeholder}
            onChangeText={() => {}}
          />
        )}
        <Spacer mt={10} />
      </>
    );
  };

  const _getInTouchForm = () => {
    return (
      <View
        style={{
          borderWidth: 10,
          alignSelf: 'center',
          paddingHorizontal: 10,
          borderColor: COLORS.ligthGrey,
        }}>
        <Spacer mt={10} />
        <TextWithUnderLine title={'GET IN TOUCH'} />
        <Spacer mt={10} />
        <View style={{}}>
          <Text containerStyle={[globalStyles.text, {textAlign: 'center', textTransform: 'capitalize'}]}>
            Leave your message and we will get back to you shortly
          </Text>
          <Spacer mt={20} />
          <View style={{paddingHorizontal: 0}}>
          <ContactUsForm />
          </View>
          <Spacer mt={4} />
        </View>
      </View>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 2, alignSelf: 'center'}}>
        <BreadCrumbWithOneLevelUp title={'Frequently asked questions '} />
        <Spacer mt={10} />
        {_headerImageView()}
        <Spacer mt={30} />
        {_faqs()}
        <Spacer mt={40} />
        {_getInTouchForm()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
