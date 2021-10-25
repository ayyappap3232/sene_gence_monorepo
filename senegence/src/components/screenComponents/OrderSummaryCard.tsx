import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import CircularBackgroundWithIcon from '../buttons/CloseButton';
import OutlineButton from '../buttons/OutlineButton';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import Text from '../text/Text';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import Toast from '../toasts/Toast';

export default function OrderSummaryCard({
  cartItemCount = 1,
  subTotal = '100.00',
  shippingAmount = "",
  onPress=() =>{},
  buttonText=""
}: any) {
  const [isError, setisError] = useState<string | null>(null);
  const [couponText, setCouponText] = useState<string>('');
  const [showCloseIconWhenClickOnApply, setShowCloseIconWhenClickOnApply] =
    useState(false);
  const [status, setStatus] = useState<any>('');
  let couponCode = 'abc';

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

  const handleCouponText = (text: string) => {
    if (text === '') {
      setCouponText('');
      setisError(null);
      setStatus('');
      setShowCloseIconWhenClickOnApply(false);
    }
    setCouponText(text);
    setisError(null);
  };

  const handleCloseIcon = () => {
    setShowCloseIconWhenClickOnApply(false);
    setCouponText('');
    setStatus('removed');
  };

  const _handleRedeem = () => {
    if (couponText.length === 0) {
      setisError('This is a required field.');
      setStatus(null);
      setShowCloseIconWhenClickOnApply(false);
      return;
    }
    couponText === couponCode ? setStatus('success') : setStatus('error');
    setShowCloseIconWhenClickOnApply(true);
  };

  const _couponCode = () => {
    return (
      <View>
        <Text
          containerStyle={[
            globalStyles.text_avenir_medium,
            {textAlign: 'left', color: COLORS.text},
          ]}>
          Coupon Code
        </Text>
        <Spacer mt={4} />
        <View>
          <OutlineTextInput
            placeholder={'Enter your coupon code ...'}
            placeholderTextColor={COLORS.swatch}
            value={couponText}
            autoCapitalize="none"
            onChangeText={(text: string) => handleCouponText(text)}      
            containerStyle={[
              {
                backgroundColor: 'rgba(244, 244, 244, 0.5)',
                width: '100%',
                height: 40,
                color: COLORS.swatch
              },
              isError && {borderColor: COLORS.error, borderWidth: 1},
            ]}
          />
          {showCloseIconWhenClickOnApply && (
            <CircularBackgroundWithIcon
              icon={images.close}
              containerStyle={{
                position: 'absolute',
                top: 10,
                right: 10,
                bottom: 0,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              onPress={() => handleCloseIcon()}
            />
          )}
        </View>
        <Spacer mt={4} />
        <View style={isError ? globalStyles.row : {}}>
          {isError && (
            <Text
              containerStyle={[
                globalStyles.text_avenir_medium,
                {textAlign: 'left', color: COLORS.error},
              ]}>
              {isError}
            </Text>
          )}
          <TouchableOpacity activeOpacity={0.7} onPress={() => _handleRedeem()}>
            <Text
              containerStyle={[
                globalStyles.text,
                {
                  fontFamily: FONTS.AvenirBlack,
                  color: COLORS.footerColor,
                  textAlign: 'right',
                },
              ]}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _toastNotification = (status: string) => {
    switch (status) {
      case 'success':
        return (
          <Toast
            icon={icons.Check}
            iconBgColor={COLORS.success}
            iconColor={COLORS.white}
            backgroundColor={COLORS.successBackground}
            color={COLORS.success}
            message={'Coupon was successfully applied'}
          />
        );
      case 'error':
        return (
          <Toast
            icon={images.close}
            iconBgColor={COLORS.errorIconBackground}
            iconColor={COLORS.white}
            backgroundColor={COLORS.errorBackground}
            color={COLORS.white}
            message={'Coupon code is not valid'}
          />
        );
      case 'removed':
        return (
          <Toast
            backgroundColor={COLORS.removedBackground}
            message={'Coupon code was removed'}
          />
        );
      default:
        return;
    }
  };

  const _handleStatusToast = () => {
    return _toastNotification(status);
  };

  const _proceedToCheckOut = () => {
    return (
      <>
        <Spacer mt={40} />
        <OutlineButton
          textStyleContainer={{color: COLORS.white}}
          containerStyle={{
            backgroundColor: COLORS.primary3,
            borderColor: COLORS.primary3,
            alignSelf: 'center',
            width: 238,
          }}
          title={buttonText}
          onPress={onPress}
        />
      </>
    );
  };

  return (
    <>
      {_handleStatusToast()}
      <Spacer mt={10} />
      <View
        style={[
          globalStyles.shadowEffect,
          {backgroundColor: COLORS.white, padding: 20},
        ]}>
        <TouchableOpacity style={{}}>
          <Image
            source={images.close}
            style={{
              width: 24,
              height: 24,
              resizeMode: 'cover',
              alignSelf: 'flex-end',
              right: 0,
            }}
          />
        </TouchableOpacity>
        <Spacer mt={10} />

        <View>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Order Summary
          </Text>
          <Spacer mt={10}/>
          <Text containerStyle={{textTransform:'uppercase'}}>{cartItemCount} Items in cart</Text>
        </View>
        {divider()}
        <View>
          <View style={[globalStyles.row]}>
            <Text>Subtotal</Text>
            <Text>${subTotal}</Text>
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
              ${subTotal} USD
            </Text>
          </View>
          <Spacer mt={10}/>
          {shippingAmount !== "" && <View style={[globalStyles.row]}>
            <Text
              >
              Shipping
            </Text>
            <Text containerStyle={[globalStyles.text_avenir_heavy]}>
              ${shippingAmount}
            </Text>
          </View>}
        </View>
        {divider()}
        {_couponCode()}
        {_proceedToCheckOut()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
