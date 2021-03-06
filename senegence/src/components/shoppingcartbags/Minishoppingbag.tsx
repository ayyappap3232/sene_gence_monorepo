import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';

//User defined Imports
import {COLORS, images, SIZES} from '../../constants';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {ScreenNames} from 'utils/screenNames';
import OutlineButton from '../buttons/OutlineButton';
import Divider from '../dividers/Divider';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import Spacer from '../Spacer';
import Text from '../text/Text';
import OutlineTextInput from '../textInputs/OutlineTextInput';

export default function Minishoppingbag({
  miniShoppingCartData,
  setVisible,
}: any) {
  const navigation = useNavigation<any>();
  const [shoppingCartData, setShoppingCartData] =
    useState(miniShoppingCartData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [totalCost, setTotalCost] = useState<number>();
  const totalPrice = shoppingCartData?.reduce(
    (total, element) =>
      (total += element?.prices?.price?.value * Number(element.quantity)),
    0,
  );

  useEffect(() => {
    setTotalCost(totalPrice);
  }, []);

  const _renderItem = ({item}: any) => {
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
        <View style={{flex: 1}}>
          <Text
            containerStyle={[globalStyles.text_avenir_heavy, {lineHeight: 26}]}>
            {item?.product?.name}
          </Text>
          <Spacer mt={10} />
          {item.color ? (
            <>
              <Text
                containerStyle={[
                  globalStyles.text_avenir_medium,
                  {textAlign: 'left'},
                ]}>
                Color: {item.color}
              </Text>
              <Spacer mt={10} />
            </>
          ) : null}
          {item.size ? (
            <>
              <Text
                containerStyle={[
                  globalStyles.text_avenir_medium,
                  {textAlign: 'left'},
                ]}>
                Size: {item.size}
              </Text>
              <Spacer mt={10} />
            </>
          ) : null}
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textAlign: 'left'},
            ]}>
            ${item?.prices?.price?.value * item.quantity} USD
          </Text>
          <Spacer mt={20} />
          {_quantityAddAndDelete()}
        </View>
      );
    };

    // const _quantityAddAndDelete = () => {
    //   return (
    //     <View style={{flex: 1, flexDirection: 'row'}}>
    //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //         <Text>QTY</Text>
    //         {/* //Todo Quantity add or delete dynamic */}
    //         <OutlineTextInput
    //           containerStyle={styles.quantityText}
    //           placeholder={''}
    //           value={item.qty}
    //           onChangeText={() => {}}
    //         />
    //         <OutlineButton
    //           containerStyle={{
    //             width: 66,
    //             height: 32,
    //             backgroundColor: COLORS.footerColor,
    //             paddingVertical: 8,
    //             borderColor: COLORS.footerColor,
    //           }}
    //           textStyleContainer={[
    //             globalStyles.text_avenir_medium,
    //             {
    //               color: COLORS.white,
    //               fontSize: SIZES.body5,
    //               textTransform: 'uppercase',
    //             },
    //           ]}
    //           title={'Update'}
    //           onPress={() => {}}
    //         />
    //       </View>
    //       <Spacer mr={10} />
    //       {/* //Todo Implement Edit and Delete functionalities */}
    //       <View style={{alignItems: 'center', flexDirection: 'row'}}>
    //         <TouchableOpacity onPress={() => {}}>
    //           <Image source={images.editIcon} style={{width: 20, height: 20}} />
    //         </TouchableOpacity>
    //         <Spacer mr={10} />
    //         <TouchableOpacity onPress={() => {}}>
    //           <Image
    //             source={images.deleteIcon}
    //             style={{width: 20, height: 20, tintColor: COLORS.red}}
    //           />
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   );
    // };

    const _handleIncrementQuantity = (id: any) => {
      let updatedQuantity = shoppingCartData.map(currEn => {
        if (currEn.uid === id && currEn.quantity >= 1) {
          return {...currEn, quantity: currEn.quantity + 1};
        }
        return currEn;
      });

      setShoppingCartData(updatedQuantity);
    };

    const _handleDecrementQuantity = (id: any) => {
      let updatedQuantity = shoppingCartData.map(currEn => {
        if (currEn.uid === id && currEn.quantity !== 1) {
          return {...currEn, quantity: currEn.quantity - 1};
        }
        return currEn;
      });

      setShoppingCartData(updatedQuantity);
    };

    const handleDelete = (id: any) => {
      const updatedShoppingCartData = shoppingCartData.filter(
        el => el.uid !== id,
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

    const _quantityAddAndDelete = () => {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>QTY</Text>
            <Spacer mr={10} />
            {/* //Todo Quantity add or delete dynamic */}
            <TouchableOpacity
              style={[styles.box, styles.leftBox]}
              onPress={() => _handleDecrementQuantity(item.uid)}>
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
              onPress={() => _handleIncrementQuantity(item.uid)}>
              <Image
                source={images.plus}
                style={{width: 10, height: 10, tintColor: COLORS.text}}
              />
            </TouchableOpacity>
          </View>
          <Spacer mr={10} />
          {/* //Todo Implement Edit and Delete functionalities */}
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            {/* <TouchableOpacity onPress={() => {}}>
              <Image source={images.editIcon} style={{width: 20, height: 20}} />
            </TouchableOpacity>
            <Spacer mr={10} /> */}
            <TouchableOpacity
              onPress={() => {
                setShowDeleteModal(true), setDeleteId(item.uid);
              }}>
              <Image
                source={images.deleteIcon}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    return (
      <View style={{flexDirection: 'row'}}>
        {_leftContent()}
        <Spacer mr={20} />
        {_rightContent()}
        {deleteId && _confirmationModal()}
      </View>
    );
  };

  const _headerSection = () => {
    return (
      <View style={{flex: 1}}>
        <Text
          containerStyle={[
            globalStyles.text,
            {lineHeight: 50, textTransform: 'uppercase'},
          ]}>
          {shoppingCartData.length} Items In Cart
        </Text>
      </View>
    );
  };

  const _footerSection = () => {
    return (
      <>
        <Spacer mt={20} />
        <Divider backgroundColor={COLORS.border} width={SIZES.width - 40} />
        <Spacer mt={20} />
        <TouchableOpacity>
          <Text
            containerStyle={[
              globalStyles.text_avenir_medium,
              {color: COLORS.primary2, textAlign: 'center'},
            ]}>
            View And Edit Cart
          </Text>
        </TouchableOpacity>
        <Spacer mt={20} />

        <Divider backgroundColor={COLORS.border} width={SIZES.width - 40} />
        <Spacer mt={20} />

        <View style={{}}>
          <View
            style={{
              width: 238,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <Text
              containerStyle={[
                globalStyles.text_avenir_medium,
                {textTransform: 'uppercase'},
              ]}>
              Sub Total
            </Text>
            <Text containerStyle={[globalStyles.text_avenir_medium]}>
              ${totalPrice} USD
            </Text>
          </View>
          <Spacer mt={20} />
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
        </View>
        <Spacer mt={20} />
      </>
    );
  };

  const _listEmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: SIZES.height / 4,
        }}>
        <Text containerStyle={{textTransform: 'uppercase'}}>
          You have no items in your shopping bag.
        </Text>
        <Spacer mt={20} />
        <OutlineButton
          title={'Continue Shopping'}
          onPress={() => {
            setVisible(false), navigation.navigate(ScreenNames.StartUpDrawer);
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{paddingHorizontal: 20}}
      data={shoppingCartData}
      ItemSeparatorComponent={() => (
        <>
          <Spacer mt={20} />
          <Divider backgroundColor={COLORS.border} width={SIZES.width - 40} />
          <Spacer mt={20} />
        </>
      )}
      renderItem={_renderItem}
      ListEmptyComponent={_listEmptyComponent()}
      keyExtractor={(item, index) => item.uid}
      ListFooterComponent={() =>
        shoppingCartData.length > 0 ? _footerSection() : null
      }
      ListHeaderComponent={() =>
        shoppingCartData.length > 0 ? _headerSection() : null
      }
    />
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
});
