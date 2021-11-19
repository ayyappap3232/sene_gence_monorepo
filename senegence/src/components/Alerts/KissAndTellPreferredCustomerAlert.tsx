import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {FONTS, SIZES} from '../../constants';
import OutlineButton from '../buttons/OutlineButton';

import Spacer from '../Spacer';
import Text from '../text/Text';
import TextWithUnderLine from '../text/TextWithUnderLine';

const data = [
  {
    content: '10% off every product purchase',
  },
  {
    content: 'FREE shipping on orders of $100+ USD',
  },
  {
    content: ' Kiss Kredits each time you shop to save on future purchases',
  },
  {
    content: ' FREE samples and Beauty Book with all orders.',
  },
];

export default function KissAndTellPreferredCustomerAlert() {
  return (
    <View>
      <Text>
        But wait! Looks like you have an account as a Customer, meaning you have
        exclusive perks like 10% off sitewide, Kiss Kredits, and more. Creating
        a Distributor account will deactivate your Customer account, so you can
        begin to EARN benefits like 20%-50% profits, qualify for exclusive
        trips, and more. Would you like to continue with creating a Distributor
        account?
      </Text>
      <Spacer mt={20} />
      <View style={{padding: 20}}>
        <TextWithUnderLine title={'Kiss & tell Preferred Customer'} />
        <Spacer mt={20} />
        {data.map(item => (
          <View style={{marginBottom: 5}}>
            <Text>&#10003; {item.content}</Text>
          </View>
        ))}
        <Spacer mt={10} />
        <OutlineButton
          title={'Yes, deactivate my Customer account'}
          containerStyle={[
            globalStyles.bannerBtnBlueOutline,
            {width: 293, height: 40, alignSelf: 'center'},
          ]}
          textStyleContainer={[globalStyles.bannerBtnTextBlue]}
          onPress={() => {}}
        />
        <Spacer mt={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
