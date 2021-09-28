import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import Divider from '../../../components/dividers/Divider';
import PressDrawer from '../../../components/drawers/PressDrawer';
import { _frequentlyAskedQuestions } from '../../../components/FrequentlyAskedQuestion';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import { termsAndConditionsDrawerContentData } from '../../../utils/data/TermsAndConditionsData';

export default function TermsAndConditions() {
  const _termsAndConditionsWrapper = () => {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'space-around'}}>
          <TextWithUnderLine title={'Terms and conditions'} />
          <Text
            containerStyle={[
              globalStyles.text,
              {color: COLORS.unCheckedColor},
            ]}>
            Last Modified: December 17, 2015
          </Text>
        </View>
        <PressDrawer pressDrawerContentData={termsAndConditionsDrawerContentData} initialId={"TC1"}/>
      </View>
    );
  };

  const _titleAndDescription = (title:string,description: string) => {
    return (
      <>
        <Text
          containerStyle={{
            fontFamily: FONTS.AvenirHeavy,
            fontSize: SIZES.body4,
            color: COLORS.text,
          }}>
          {title}
        </Text>
        <Spacer mt={10} />
        <Text containerStyle={globalStyles.text}>
          {description}
        </Text>
      </>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithOneLevelUp title={'Terms & conditions'} />
        <Spacer mt={30} />
        {_termsAndConditionsWrapper()}
        <Spacer mt={15} />
        <ScrollView>
            {_titleAndDescription("Changes the Terms of Use","These terms of use are entered into by and between you and SGII, Inc. d.b.a. SeneGence International® (“Company”, “we” or “us”). The following terms and conditions, together with any documents they expressly incorporate by These terms of use are entered into by and between you and SGII, Inc. d.b.a. SeneGence International® (“Company”, “we” or “us”). The following terms and conditions, together with any documents they expressly incorporate by")}
            <Spacer mt={9.5} />
            <Divider backgroundColor={COLORS.border} width={SIZES.width-40}/>
            <Spacer mt={9.5} />
            {_titleAndDescription("Intellectual Property Right","These terms of use are entered into by and between you and SGII, Inc. d.b.a. SeneGence International® (“Company”, “we” or “us”). The following terms and conditions, together with any documents they expressly incorporate by These terms of use are entered into by and between you and SGII, Inc. d.b.a. SeneGence International® (“Company”, “we” or “us”). The following terms and conditions, together with any documents they expressly incorporate by ")}
        </ScrollView>
        <Spacer mt={30} />
        {_frequentlyAskedQuestions()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
