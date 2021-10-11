import React, {useEffect, useState} from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Close} from '../../../assets/svgs';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import {miniShoppingCartData} from '../../utils/data/MiniShoppingBagData';
import CircularBackgroundWithIcon from '../buttons/CloseButton';
import OutlineButton from '../buttons/OutlineButton';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import Text from '../text/Text';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import Toast from '../toasts/Toast';
import Modal from 'react-native-modal';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import {ScreenNames} from '../../utils/screenNames';
import {useNavigation} from '@react-navigation/native';

export default function Mainshoppingbag({navigation}: any) {
  const [shoppingCartData, setShoppingCartData] =
    useState(miniShoppingCartData);
  const totalPrice = shoppingCartData.reduce(
    (total, element) => (total += element.price * Number(element.qty)),
    0,
  );
  const [isError, setisError] = useState<string | null>(null);
  const [couponText, setCouponText] = useState<string>('');
  const [showCloseIconWhenClickOnApply, setShowCloseIconWhenClickOnApply] =
    useState(false);
  const [status, setStatus] = useState<any>("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();

  let couponCode = 'abc';

  useEffect(() => {
    setStatus("")
    setCouponText("")
  }, []);

  const _renderItem = ({item, i}: any) => {
    const _leftContent = () => {
      return (
        <View style={{flex: 0.3}}>
          <Image
            source={item.image}
            style={{width: 81, height: 126}}
            resizeMode="contain"
          />
        </View>
      );
    };

    const _rightContent = () => {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1.2, flexWrap: 'wrap'}}>
            <Text
              containerStyle={[
                globalStyles.text_avenir_heavy,
                {lineHeight: 26},
              ]}>
              {item.name}
            </Text>
            <Spacer mt={10} />
            <Text
              containerStyle={[
                globalStyles.text_avenir_medium,
                {textAlign: 'left'},
              ]}>
              Color: {item.color}
            </Text>
            <Spacer mt={10} />
            <Text
              containerStyle={[
                globalStyles.text_avenir_medium,
                {textAlign: 'left'},
              ]}>
              Size: {item.size}
            </Text>
            <Spacer mt={10} />
            <Text
              containerStyle={[
                globalStyles.text_avenir_heavy,
                {textAlign: 'left'},
              ]}>
              ${item.price * item.qty} USD
            </Text>
            <Spacer mt={20} />
          </View>
          <Spacer mt={20} />
          {_quantityAddAndDelete()}
        </View>
      );
    };

    const _quantityAddAndDelete = () => {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Text
              containerStyle={[
                globalStyles.text_avenir_heavy,
                {textAlign: 'center'},
              ]}>
              QTY
            </Text>
            <Spacer mt={10} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* //Todo Quantity add or delete dynamic */}
              <TouchableOpacity
                style={[styles.box, styles.leftBox]}
                onPress={() => _handleDecrementQuantity(item.id)}>
                <Image
                  source={images.minus}
                  style={{width: 9.4, height: 1.2, tintColor: COLORS.text}}
                />
              </TouchableOpacity>
              <OutlineTextInput
                editable={false}
                containerStyle={styles.quantityText}
                placeholder={''}
                value={item.qty.toString()}
              />
              <TouchableOpacity
                style={(styles.box, styles.rightBox)}
                onPress={() => _handleIncrementQuantity(item.id)}>
                <Image
                  source={images.plus}
                  style={{width: 10, height: 10, tintColor: COLORS.text}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };

    const _handleIncrementQuantity = (id: any) => {
      let updatedQuantity = shoppingCartData.map(currEn => {
        if (currEn.id === id && currEn.qty >= 1) {
          return {...currEn, qty: currEn.qty + 1};
        }
        return currEn;
      });

      setShoppingCartData(updatedQuantity);
    };

    const _handleDecrementQuantity = (id: any) => {
      let updatedQuantity = shoppingCartData.map(currEn => {
        if (currEn.id === id && currEn.qty !== 1) {
          return {...currEn, qty: currEn.qty - 1};
        }
        return currEn;
      });

      setShoppingCartData(updatedQuantity);
    };

    const handleDelete = (id: any) => {
      const updatedShoppingCartData = shoppingCartData.filter(
        el => el.id !== id,
      );
      setShoppingCartData(updatedShoppingCartData);
      setShowDeleteModal(false);
    };

    const _confirmationModal = () => {
      return (
        <DeleteConfirmationModal
          showModal={showDeleteModal}
          setShowModal={() => setShowDeleteModal(!showDeleteModal)}
          title={' Are you sure you want to'}
          subTitle={'remove this Item'}
          cancelModal={() => setShowDeleteModal(false)}
          handleDelete={() => handleDelete(deleteId)}
        />
      );
    };

    return (
      <React.Fragment key={item.id}>
        <View style={{flexDirection: 'row', paddingHorizontal: 22}}>
          {_leftContent()}
          <Spacer mr={20} />
          {_rightContent()}
        </View>
        <View style={[globalStyles.row, {justifyContent: 'flex-end'}]}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_medium,
              {textTransform: 'uppercase', fontWeight: 'bold'},
            ]}>
            Sub Total
          </Text>
          <Spacer ml={20} />
          <Text containerStyle={{fontWeight: 'bold'}}>
            ${item.price * item.qty}.00 USD
          </Text>
          <Spacer mr={20} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setShowDeleteModal(true), setDeleteId(item.id);
            }}>
            <Image source={images.deleteIcon} style={{width: 16, height: 16}} />
          </TouchableOpacity>
        </View>
        {deleteId && _confirmationModal()}
      </React.Fragment>
    );
  };

  const _orderSummary = () => {
    return (
      <View>
        <Text containerStyle={[globalStyles.text_avenir_heavy, styles.heading]}>
          Order Summary
        </Text>
        <Spacer mt={11} />
        <Text containerStyle={{textTransform: 'uppercase'}}>
          {shoppingCartData.length} Items in cart
        </Text>
      </View>
    );
  };

  const _estimatedShippingAndTax = () => {
    return (
      <View>
        <Text containerStyle={[globalStyles.text_avenir_heavy, styles.heading]}>
          Estimated shipping & tax
        </Text>
        <Spacer mt={11} />
        <View style={globalStyles.row}>
          <Text>Subtotal</Text>
          <Text>${totalPrice}.00</Text>
        </View>
        <Spacer mt={11} />
        <View style={globalStyles.row}>
          <Text>Shipping</Text>
          <Text>$10.00</Text>
        </View>
        <Spacer mt={11} />
      </View>
    );
  };

  const _subTotal = () => {
    return (
      <View style={globalStyles.row}>
        <Text
          containerStyle={[
            globalStyles.text_avenir_medium,
            {textTransform: 'uppercase', fontWeight: 'bold'},
          ]}>
          Sub Total
        </Text>
        <Text containerStyle={{fontWeight: 'bold'}}>${totalPrice}.00 USD</Text>
      </View>
    );
  };

  const _handleRedeem = () => {
    if (couponText.length === 0) {
      setisError('This is a required field.');
      setStatus(null);
      setShowCloseIconWhenClickOnApply(false);
      return;
    }
    console.log(couponCode, couponText)
    couponText === couponCode ? setStatus('success') : setStatus('error');
    setShowCloseIconWhenClickOnApply(true);
  };

  const handleCouponText = (text: string) => {
    if(text === ""){
      setCouponText("");
      setisError(null);
      setStatus("");
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
            value={couponText}
            autoCapitalize="none"
            onChangeText={(text: string) => handleCouponText(text)}
            containerStyle={[
              {
                backgroundColor: 'rgba(244, 244, 244, 0.5)',
                width: '100%',
                height: 40,
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

  const _proceedToCheckOut = () => {
    return (
      <>
        <Spacer mt={40} />
        <OutlineButton
          textStyleContainer={{color: COLORS.white}}
          containerStyle={{
            backgroundColor: COLORS.footerColor,
            borderColor: COLORS.footerColor,
            alignSelf: 'center',
            width: 238,
          }}
          title={'Proceed To Checkout'}
          onPress={() => {}}
        />
      </>
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

  const _proceedToCheckOutContainer = () => {
    return <>
    <View
          style={[
            globalStyles.shadowEffect,
            {
              backgroundColor: COLORS.white,
              paddingLeft: 20,
              paddingRight: 22,
              paddingBottom: 22,
              paddingTop: 20,
            },
          ]}>
          {_orderSummary()}
          <Spacer mt={20.5} />
          <Divider backgroundColor={COLORS.border} width={'100%'} height={1} />
          <Spacer mt={19.5} />

          {_estimatedShippingAndTax()}
          <Divider backgroundColor={COLORS.border} width={'100%'} height={1} />

          <Spacer mt={20.5} />
          {_subTotal()}
          <Spacer mt={19.5} />
          <Divider backgroundColor={COLORS.border} width={'100%'} height={1} />
          <Spacer mt={19.5} />
          {_couponCode()}
          {_proceedToCheckOut()}
        </View>
    </>
  }

  const _headerContent = () => {
    return shoppingCartData.length > 0 ? (
      <View>
        {_handleStatusToast()}
        <Spacer mt={19} />
        {_proceedToCheckOutContainer()}
        <Spacer mt={39.5} />

        <Divider
          backgroundColor={COLORS.border}
          width={SIZES.width - 40}
          height={1}
        />
        <Spacer mt={20} />
      </View>
    ) : null;
  };

  const _listEmptyComponent = () => {
    return (
      <>
        <Spacer mt={100} />
        <View>
        <Spacer mt={52} />

          <Text containerStyle={{textAlign: 'center'}}>
            You have no items in your shopping bag.
          </Text>
          <Spacer mt={24} />
          <OutlineButton
            title={'Continue Shopping'}
            containerStyle={{
              alignSelf: 'center',
              width: 214,
              backgroundColor: COLORS.footerColor,
              borderColor: COLORS.footerColor,
            }}
            textStyleContainer={{color: COLORS.white}}
            onPress={() => navigation.navigate(ScreenNames.StartUpDrawer)}
          />
        </View>
      </>
    );
  };

  return (
    <>
    <View style={{paddingHorizontal: 20}}>
      {_headerContent()}
    </View>
    <FlatList
      contentContainerStyle={{paddingHorizontal: 20}}
      data={shoppingCartData}
      ItemSeparatorComponent={() => (
        <>
          <Spacer mt={20} />
          <Divider
            backgroundColor={COLORS.border}
            width={SIZES.width - 40}
            height={1}
          />
          <Spacer mt={20} />
        </>
      )}
      ListEmptyComponent={() => _listEmptyComponent()}
      renderItem={_renderItem}
      keyExtractor={(item, index) => item.id}
    />
    </>
  );
}

const styles = StyleSheet.create({
  quantityText: {
    width: 49,
    height: 34,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.ligthGrey,
    textAlign: 'center',
  },
  box: {
    width: 32,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.ligthGrey,
  },
  leftBox: {
    borderLeftWidth: 1,
  },
  rightBox: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.ligthGrey,
    paddingVertical: 11,
    paddingHorizontal: 11.6,
  },
  heading: {lineHeight: 46, letterSpacing: 0.65, textTransform: 'uppercase'},
});
