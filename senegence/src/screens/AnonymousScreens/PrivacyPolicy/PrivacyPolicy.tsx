import React from 'react';
import {StyleSheet, View} from 'react-native';

import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {globalStyles} from 'globalstyles/GlobalStyles';
import Divider from 'components/dividers/Divider';
import {COLORS, SIZES} from '../../../constants';
import OutlineButton from 'src/components/buttons/OutlineButton';

export default function PrivacyPolicy() {
  const divider = () => {
    return (
      <>
        <Spacer mt={20} />
        <Divider
          backgroundColor={COLORS.border}
          width={SIZES.width - 80}
          height={1}
        />
        <Spacer mt={20} />
      </>
    );
  };

  const _orderSummary = () => {
    return (
      <>
        <View>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Order Summary
          </Text>
        </View>
        <View>
          <View style={[globalStyles.row]}>
            <Text>Subtotal</Text>
            <Text>$100.00</Text>
          </View>
        </View>
        {divider()}
        <View>
          <View style={[globalStyles.row]}>
            <Text
              containerStyle={[
                globalStyles.text_avenir_heavy,
                {textTransform: 'uppercase'},
              ]}>
              Sub total
            </Text>
            <Text containerStyle={[globalStyles.text_avenir_heavy]}>
              $100 USD
            </Text>
          </View>
          <Spacer mt={10} />
          <View style={[globalStyles.row]}>
            <Text>Shipping</Text>
            <Text containerStyle={[globalStyles.text_avenir_heavy]}>
              $10.00
            </Text>
          </View>
        </View>
        {divider()}
      </>
    );
  };

  const _shippingAddress = () => {
    return (
      <>
        <View>
          <Text>SHIPPING ADDRESS</Text>
          <Spacer mt={10} />
          {divider()}
          <Spacer mt={20} />
          <Text>{`
            Michael M Smith
            4189 Still Pastures Drive
            Oakland, SC South Carolina 29150
            
            803-499-9553
            843-614-9601
            `}</Text>
        </View>
      </>
    );
  };

  const _billingAddress = () => {
    return (
      <>
        <View>
          <Text>BILLING ADDRESS</Text>
          <Spacer mt={10} />
          {divider()}
          <Spacer mt={20} />
          <Text>{`
          Michael M Smith
          4189 Still Pastures Drive
          Oakland, SC South Carolina 29150
          
          803-499-9553
          843-614-9601
          `}</Text>
        </View>
      </>
    );
  };

  return (
    <View>
      <View>Privacy Policy</View>
      <Spacer mt={20} />
      <Text>Status: Pending</Text>
      <Spacer mt={20} />
      <Text>Order NUMBER : 47631478</Text>
      <Spacer mt={20} />
      <Text>
        We’ll email you an orderconfirmation with details and tracking info.
      </Text>
      <Spacer mt={20} />
      {_orderSummary()}
      <Spacer mt={20} />
      {_shippingAddress()}
      <Spacer mt={20} />
      {_billingAddress()}
      <Spacer mt={20} />
      {/* //Todo pending to retrieve the existing order items */}
      <OutlineButton
        title={'DOWNLOAD INVOICE'}
        textStyleContainer={[globalStyles.bannerBtnTextWhite]}
        containerStyle={[
          globalStyles.bannerBtnBlueBackground,
          {alignSelf: 'center', width: 200},
        ]}
        onPress={() => {}}
      />
      <Spacer mt={10} />
      <OutlineButton
        title={'Buy Again'}
        textStyleContainer={[globalStyles.bannerBtnTextBlue]}
        containerStyle={[
          globalStyles.bannerBtnBlueOutline,
          {alignSelf: 'center', width: 150},
        ]}
        onPress={() => {}}
      />
      <Spacer mt={30} />
    </View>
  );
}

const styles = StyleSheet.create({});
