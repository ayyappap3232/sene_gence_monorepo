import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

//userdefined imports
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import DistributorWrapper from './DistributorWrapper';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {images} from '../../../constants';

export default function DTab1() {
  return (
    <DistributorWrapper>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 10}}>
          <Spacer mt={20} />
          <TextWithUnderLine title={'SPONSOR INFORMATION'} />
          <Spacer mt={10} />
          <Text
            containerStyle={[
              globalStyles.text_avenir_medium,
              {textAlign: 'center'},
            ]}>
            All SeneGence Distributors must have a SeneGence Independent
            Distributor as a sponsor. This is the heart of the SeneGence career
            opportunity, women helping women build strong organizations and
            being rewarded for their successes.
          </Text>
          <Spacer mt={60} />
          <Text containerStyle={{textAlign: 'center'}}>
            Are you sure this information is correct?
          </Text>
          <Spacer mt={10} />
          <Image
            source={images.christopher}
            style={{width: 228, height: 209, alignSelf: 'center'}}
          />
        </View>
        <Spacer mt={20} />
      </ScrollView>
    </DistributorWrapper>
  );
}

const styles = StyleSheet.create({});
