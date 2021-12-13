import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import Spacer from 'components/Spacer';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import Text from 'components/text/Text';
import {COLORS, SIZES} from '../../../constants';
import Divider from 'components/dividers/Divider';
import {globalStyles} from 'globalstyles/GlobalStyles';
import BulletText from 'components/text/BulletText';
import { _frequentlyAskedQuestions } from 'components/FrequentlyAskedQuestion';

export default function AccessibilityStatement() {
  const _feedback = () => {
    return (
      <View>
        <Text containerStyle={[globalStyles.text_avenir_heavy]}>Feedback</Text>
        <Spacer mt={10} />
        <Text>
          We welcome your feedback on the accessibility of SeneGence.com. Please
          let us know if you encounter accessibility barriers on SeneGence.com
        </Text>
        <Spacer mt={10} />
        <View style={{marginLeft: 10}}>
          <BulletText text={'Phone: (949) 860-1860'} />
          <Spacer mt={10} />
          <BulletText text={'E-mail: info@senegence.com'} />
          <Spacer mt={10} />
          <BulletText
            text={'Visitor Address: 19651 Alter, Foothill Ranch, CA 92610'}
          />
          <Spacer mt={10} />
          <BulletText
            text={'Postal Address: 19651 Alter, Foothill Ranch, CA 92610'}
          />
        </View>
        <Spacer mt={10} />
        <Text>We try to respond to feedback within 5 business days.</Text>
      </View>
    );
  };

  const _date = () => {
    return (
      <View>
        <Text containerStyle={[globalStyles.text_avenir_heavy]}>Date</Text>
        <Spacer mt={10} />
        <View>
          <Text>
          This statement was created on November 16, 2021 using the W3C
          Accessibility Statement Generator Tool.
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithOneLevelUp title={'Accessibility statement'} />
        <Spacer mt={30} />
        <TextWithUnderLine
          title={'Accessibility Statement for senegence.com'}
        />
        <Spacer mt={10} />
        <Text containerStyle={{color: COLORS.unCheckedColor}}>
          This is an accessibility statement from SGII, Inc. (SeneGence).
        </Text>
        <Spacer mt={10} />
        <Text>Conformance Status</Text>
        <Spacer mt={20} />
        <Text containerStyle={{textAlign: 'left', width: SIZES.width - 20}}>
          The 
          <Text containerStyle={{color: COLORS.primary3}}>
            Web Content Accessibility Guidelines (WCAG)
          </Text>
           defines requirements for designers and developers to improve
          accessibility for people with disabilities. It defines three levels of
          conformance: Level A, Level AA, and Level
          AAA. SeneGence.com is partially conformant  with WCAG 2.1 level
          AA. Partially conformant  means that some parts of the content do not
          fully conform to the accessibility standard.
        </Text>
        <Spacer mt={10} />
        <Divider width={SIZES.width - 40} backgroundColor={COLORS.ligthGrey} />
        <Spacer mt={10} />
        {_feedback()}
        <Spacer mt={10} />
        {_date()}
        <Spacer mt={30} />
        {_frequentlyAskedQuestions("Read More")}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
