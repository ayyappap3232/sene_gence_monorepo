import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

//userdefined imports
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import DistributorWrapper from './DistributorWrapper';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {COLORS, icons, images, SIZES} from '../../../constants';
import OutlineButton from 'components/buttons/OutlineButton';

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
          <View
            style={[
              globalStyles.shadowEffect,
              {
                backgroundColor: COLORS.white,
                padding: 10,
                marginHorizontal: 20,
              },
            ]}>
            <Image
              source={images.christopher}
              style={{width: 228, height: 209, alignSelf: 'center'}}
            />
            <Spacer mt={10} />
            <Text>Katie Enos</Text>
            <Spacer mt={10} />
            <Text>Distributor ID: 189417</Text>
            <Spacer mt={10} />
            <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
              <Image
                source={icons.email}
                style={{width: 21, height: 16, marginRight: 10}}
              />
              <Text>katieenos@demo.com </Text>
            </View>
            <Spacer mt={10} />
            <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
              <Image
                source={icons.phone}
                style={{width: 18, height: 19, marginRight: 10}}
              />
              <Text>(480)369-2370 </Text>
            </View>
            <Spacer mt={10} />
            <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
              <Image
                source={icons.globe}
                style={{width: 18, height: 18, marginRight: 10}}
              />
              <Text>www.katieenosweb.com </Text>
            </View>
          </View>
          <Spacer mt={30} />
          <OutlineButton
            title={'Yes, I confirm this information is correct'}
            containerStyle={{
              width: 289,
              height: 60,
              borderColor: COLORS.primary3,
            }}
            textStyleContainer={{
              paddingHorizontal: 10,
              textAlign: 'center',
              color: COLORS.primary3,
            }}
            onPress={() => {}}
          />
          <Spacer mt={20} />
          <OutlineButton
            title={'No, I want to change the distributor'}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {
                width: 289,
                height: 60,
              },
            ]}
            textStyleContainer={[
              globalStyles.bannerBtnTextWhite,
              {
                paddingHorizontal: 10,
                textAlign: 'center',
              },
            ]}
            onPress={() => {}}
          />
          <Spacer mt={30} />
          <Text containerStyle={{textAlign: 'center'}}>
            <Text containerStyle={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Note:
            </Text>{' '}
            Changing your sponsor is not allowed at anytime later on.
          </Text>
        </View>
        <Spacer mt={20} />
      </ScrollView>
    </DistributorWrapper>
  );
}

const styles = StyleSheet.create({});
