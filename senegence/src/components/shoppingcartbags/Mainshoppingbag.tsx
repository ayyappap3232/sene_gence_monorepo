import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

//User defined imports
import {COLORS, icons, images, SIZES} from '../../constants';
import {globalStyles} from 'globalstyles/GlobalStyles';
import OutlineButton from '../buttons/OutlineButton';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import Text from '../text/Text';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import Toast from '../toasts/Toast';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import {ScreenNames} from 'utils/screenNames';
import OrderSummaryCard from '../screenComponents/OrderSummaryCard';
import {useUpdateCartItems} from 'apollo/controllers/updateCartItems.Controller';
import {useRemoveItemFromACart} from 'apollo/controllers/removeItemFromCart.Controller';
import {useDispatch} from 'react-redux';
import { cartCount } from '../../redux/cartItems';
import { useCart } from '../../hooks/cart/useCart';

export default function Mainshoppingbag({navigation}: any) {
  const route = useRoute();

  const dispatch = useDispatch();

  const shoppingCartItems = route?.params?.shoppingCartData;
  const cart_Id = route?.params?.cart_Id;

  const [cart_item_uid, setCartItemUid] = useState('');
  const [qty, setQty] = useState<any>({id: '', quantity: 0});
  const [shoppingCartData, setShoppingCartData] = useState(route?.params?.shoppingCartData);

  const totalPrice = shoppingCartData?.reduce(
    (total: any, element: any) =>
      (total += element?.prices?.price?.value * element.quantity),
    0,
  );

  const [couponText, setCouponText] = useState<string>('');
  const [status, setStatus] = useState<any>('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const {updateCartItems, updateProductLoading, deleteCartItem, deleteProductLoading} = useCart()

  let couponCode = 'abc';

  useEffect(() => {
    setStatus('');
    setCouponText('');
    setShoppingCartData(shoppingCartItems)
  }, [route]);

  //Increment cart item quantity Logic
  const _handleIncrementQuantity = (id: any, quantity: number) => {
    setQty({id: id, quantity: quantity + 1});

    let updatedQuantity = shoppingCartData.map(currEn => {
      if (currEn.id === id && currEn.quantity >= 1) {
        return {...currEn, quantity: currEn.quantity + 1};
      }
      return currEn;
    });

    updateCartItems(Number(id), qty.id == cart_item_uid && qty.quantity);

    setShoppingCartData(updatedQuantity);
  };

  //Decrement cart item quantity Logic
  const _handleDecrementQuantity = (id: any, quantity: number) => {
    setQty({id: id, quantity: quantity - 1});

    let updatedQuantity = shoppingCartData.map(currEn => {
      if (currEn.id === id && currEn.quantity !== 1) {
        return {...currEn, quantity: currEn.quantity - 1};
      }
      return currEn;
    });

    updateCartItems(Number(id), qty.id == cart_item_uid && qty.quantity);
    setShoppingCartData(updatedQuantity);
  };

  //Removing the Items from cart
  // const {removeItemFromCart,removeItemFromCarterror} = useRemoveItemFromACart({
  //   cart_id: cart_Id,
  //   cart_item_id: Number(deleteId),
  // });

   const handleDelete = (id: any) => {
      const updatedShoppingCartData = shoppingCartData.filter(
        el => el.id !== id,
      );
      setShoppingCartData(updatedShoppingCartData);
      deleteCartItem(Number(id));
      const shoppingCartDataCount = shoppingCartData?.length > 0 && shoppingCartData?.length - 1
      dispatch(cartCount(shoppingCartDataCount))
      setShowDeleteModal(false);
    };


  const _renderItem = ({item, i}: any) => {
    const _leftContent = () => {
      return (
        <View style={{flex: 0.3}}>
          <Image
            source={{uri: item?.product?.image?.url}}
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
                {
                  lineHeight: 26,
                  flex: 1,
                  width: SIZES.width / 2,
                  flexWrap: 'wrap',
                  marginBottom: 10,
                },
              ]}>
              {item?.product?.name}
            </Text>
            <Spacer mt={10} />
            {item?.color ? (
              <>
                <Text
                  containerStyle={[
                    globalStyles.text_avenir_medium,
                    {textAlign: 'left'},
                  ]}>
                  Color: {item?.color}
                </Text>
                <Spacer mt={10} />{' '}
              </>
            ) : null}
            {item?.size ? (
              <>
                <Text
                  containerStyle={[
                    globalStyles.text_avenir_medium,
                    {textAlign: 'left'},
                  ]}>
                  Size: {item?.size}
                </Text>
                <Spacer mt={10} />
              </>
            ) : null}
            <Text
              containerStyle={[
                globalStyles.text_avenir_heavy,
                {textAlign: 'left'},
              ]}>
              ${item?.prices?.price?.value} {item?.prices?.price?.currency}
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
                onPress={() =>
                  _handleDecrementQuantity(item?.id, item.quantity)
                }>
                <Image
                  source={images.minus}
                  style={{width: 9.4, height: 1.2, tintColor: COLORS.text}}
                />
              </TouchableOpacity>
              <OutlineTextInput
                editable={false}
                containerStyle={styles.quantityText}
                placeholder={''}
                value={item?.quantity.toString()}
              />
              <TouchableOpacity
                style={(styles.box, styles.rightBox)}
                onPress={() =>
                  _handleIncrementQuantity(item?.id, item.quantity)
                }>
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
            ${item?.prices?.price?.value * item?.quantity}.00 USD
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

  const _headerContent = () => {
    return shoppingCartData?.length > 0 ? (
      <View>
        {_handleStatusToast()}
        <Spacer mt={19} />
        <OrderSummaryCard
          cartItemCount={shoppingCartData?.length}
          subTotal={totalPrice}
          shippingAmount={10}
          buttonText={'Proceed To Checkout'}
          onPress={() =>
            navigation.navigate(ScreenNames.Checkout_As_A_Guest, {
              cartItemCount: shoppingCartData?.length,
              subTotal: totalPrice,
              shippingAmount: '',
              shoppingCartData: shoppingCartData,
            })
          }
        />
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
      <View style={{paddingHorizontal: 20}}>{_headerContent()}</View>
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
