import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import BreadCrumbWithTwoLevelUpWithoutNavigationParams from '../../../components/breadCrumbs/BreadCrumbWithTwoLevelUpWithoutNavigationParams';
import OutlineButton from '../../../components/buttons/OutlineButton';
import RadioButton from '../../../components/buttons/radioButtons/RadioButton';
import Divider from '../../../components/dividers/Divider';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {_inputItem} from '../../../components/textInputs/InputItemWithAsterik';
import {COLORS, FONTS, icons, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import {ScreenNames} from '../../../utils/screenNames';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import Checkbox from '../../../components/checkboxs/Checkbox';
import Select from '../../../components/select/Select';

export default function Checkout_As_A_Guest() {
  const navigation = useNavigation();
  const [isAccountCollapsed, setIsAccountCollapsed] = useState(false);
  const [isDistributorCollapsed, setIsDistributorCollapsed] = useState(false);
  const [isShippingAddressCollapsed, setIsShippingAddressCollapsed] =
    useState(false);
  const [isPersonalInformationCollapsed, setIsPersonalInformationCollapsed] =
    useState(false);
  const [isBillingAddressCollapsed, setIsBillingAddressCollapsed] =
    useState(false);
  const [isShippingMethodCollapsed, setIsShippingMethodCollapsed] =
    useState(false);

  const [isShippingAddressSame, setIsShippingAddressSame] = useState(false);
  const [checkedIndex, setCheckedIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [country, setCountry] = useState()
  const [state, setState] = useState()
  const [city, setCity] = useState()

  useEffect(() => {
    //setVisible(true)
  }, [navigation]);

  const _headerItem = (
    onPress: any,
    headerTitle: any,
    isCollapsed: boolean,
  ) => {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              containerStyle={[
                globalStyles.text_avenir_heavy,
                {letterSpacing: 0.7, textTransform: 'uppercase'},
              ]}>
              {headerTitle}
            </Text>
            {isCollapsed ? (
              <Image
                source={images.minus}
                style={{width: 12, height: 2, tintColor: COLORS.text}}
              />
            ) : (
              <Image
                source={images.plus}
                style={{width: 14, height: 14, tintColor: COLORS.text}}
              />
            )}
          </View>
          {divider()}
        </TouchableOpacity>
      </View>
    );
  };

  const divider = () => {
    return (
      <>
        <Spacer mt={9.5} />
        <Divider backgroundColor={COLORS.border} width={SIZES.width - 40} />
        <Spacer mt={19.5} />
      </>
    );
  };

  const button = (onPress: any, title: string, buttonStyle = {}) => {
    return (
      <OutlineButton
        onPress={onPress}
        title={title}
        containerStyle={[
          {
            alignSelf: 'flex-start',
            width: 82,
            borderColor: COLORS.primary3,
            borderWidth: 2,
          },
          buttonStyle,
        ]}
        textStyleContainer={[
          {
            color: COLORS.primary3,
            fontFamily: FONTS.AvenirHeavy,
            letterSpacing: 1.4,
            textTransform: 'uppercase',
            fontSize: SIZES.body4,
          },
        ]}
      />
    );
  };

  //Account Information Section
  const _accountInformation = () => {
    return (
      <Collapsible collapsed={!isAccountCollapsed}>
        {_inputItem('Email', () => {}, 'Janesmith@gmail.com', true)}
        <Spacer mt={20} />
        {button(() => {}, 'Next')}
        <Spacer mt={20} />
      </Collapsible>
    );
  };

  //Find Your Distributor Section
  const _findYourDistributor = () => {
    return (
      <Collapsible collapsed={!isDistributorCollapsed}>
        <Text
          containerStyle={[
            globalStyles.text_avenir_medium,
            {textAlign: 'left'},
          ]}>
          Search By
        </Text>
        <Spacer mt={20} />
        {_inputItem('First Name', () => {}, 'Enter First name...', true)}
        <Spacer mt={20} />
        {_inputItem('Last Name', () => {}, 'Enter Last name...', true)}
        <Spacer mt={20} />
        {button(() => {}, 'Search', {width: 102})}
        <Spacer mt={20} />
        {_inputItem('Zip Code', () => {}, 'Enter Zip Code...', true)}
        <Spacer mt={20} />
        {button(() => {}, 'Search', {width: 102})}
        <Spacer mt={20} />
        {_inputItem(
          'Distributor Id',
          () => {},
          'Enter Distributor Id...',
          true,
        )}
        <Spacer mt={20} />
        {button(() => {}, 'Search', {width: 102})}
        <Spacer mt={20} />
      </Collapsible>
    );
  };

  //Personal Information
  const _personalInformation = () => {
    return (
      <Collapsible collapsed={!isPersonalInformationCollapsed}>
        <Spacer mt={20} />
        {_inputItem('First Name', () => {}, 'Enter First name...', true)}
        <Spacer mt={20} />
        {_inputItem('Last Name', () => {}, 'Enter Last name...', true)}
        <Spacer mt={20} />
        {_inputItem('Phone (Mobile)', () => {}, '(555) - 555-5555...', true)}
        <Spacer mt={20} />
        {_inputItem('Phone (Home)', () => {}, '(555) - 555-5555...', false)}
        <Spacer mt={20} />
        {_inputItem('Email', () => {}, 'yourcompanyemail@gmail.com', true)}
        <Spacer mt={20} />
        {button(() => {}, 'Next')}
        <Spacer mt={20} />
      </Collapsible>
    );
  };

  //Shipping Address
  const _shippingAddress = () => {
    return (
      <Collapsible collapsed={!isShippingAddressCollapsed}>
        <Spacer mt={20} />
        {_inputItem('Address 1', () => {}, 'Enter your Address...', true)}
        <Spacer mt={20} />
        {_inputItem('Address 2', () => {}, 'Address second line...', true)}
        <Spacer mt={20} />
        {/* //Todo: convertion to dropdowns  */}
        <Select
          onPress={() => {
            setCurrentIndex(1);
          }}
          onChangeText={() => setCountry(country)}
          value={country}
          currentIndex={currentIndex}
          index={1}
          title={'Country'}
          placeholder={'Please Select…'}
          isMandatory={true}
        />
        <Spacer mt={20} />
        <Select
          onPress={() => {
            setCurrentIndex(2);
          }}
          onChangeText={() => setState(state)}
          value={state}
          currentIndex={currentIndex}
          index={2}
          title={'State'}
          placeholder={'Please Select…'}
          isMandatory={true}
        />
        <Spacer mt={20} />
        <Select
          onPress={() => {
            setCurrentIndex(3);
          }}
          onChangeText={() => setCity(city)}
          value={city}
          currentIndex={currentIndex}
          index={3}
          title={'City'}
          placeholder={'Please Select…'}
          isMandatory={true}
        />
        <Spacer mt={20} />
        {/* {_inputItem("Country",() => {},"(555) - 555-5555...",true)}
        <Spacer mt={20}/>
        {_inputItem("Phone (Home)",() => {},"(555) - 555-5555...",false)}
        <Spacer mt={20}/> */}
        {_inputItem('Zip Code', () => {}, 'Enter your zip code', true)}
        <Spacer mt={20} />
        {button(() => {}, 'Next')}
        <Spacer mt={20} />
      </Collapsible>
    );
  };

  //Billing Address
  const _billingAddress = () => {
    return (
      <Collapsible collapsed={!isBillingAddressCollapsed}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Checkbox
            color={COLORS.primary3}
            uncheckedColor={COLORS.primary3}
            status={isShippingAddressSame ? 'checked' : 'unchecked'}
            onPress={() => {
              setIsShippingAddressSame(!isShippingAddressSame);
            }}
          /> */}
          <Checkbox
            state={isShippingAddressSame}
            setState={setIsShippingAddressSame}
          />
          <Spacer mr={10} />
          <Text>Same as a shipping address</Text>
        </View>
        <Spacer mt={20} />
        {_inputItem('Address 1', () => {}, 'Enter your Address...', true)}
        <Spacer mt={20} />
        {_inputItem('Address 2', () => {}, 'Address second line...', true)}
        <Spacer mt={20} />
        {/* //Todo: convertion to dropdowns  */}
        {/* {_inputItem("Country",() => {},"(555) - 555-5555...",true)}
        <Spacer mt={20}/>
        {_inputItem("Phone (Home)",() => {},"(555) - 555-5555...",false)}
        <Spacer mt={20}/> */}
        {_inputItem('Zip Code', () => {}, 'Enter your zip code', true)}
        <Spacer mt={20} />
        {button(() => {}, 'Next')}
        <Spacer mt={20} />
      </Collapsible>
    );
  };

  //Shipping Method
  const _shippingMethod = () => {
    return (
      <Collapsible collapsed={!isShippingMethodCollapsed}>
        <View style={styles.shippingmethodwrapper}>
          <TouchableOpacity
            style={styles.radioBtnWrapper}
            activeOpacity={1}
            onPress={() => setCheckedIndex(0)}>
            <RadioButton
              checked={checkedIndex}
              index={0}
              innerContainerStyle={{backgroundColor: COLORS.primary3}}
              containerStyle={{borderColor: COLORS.primary3}}
            />
            <Spacer mr={10} />
            <Text>$0.00 USD</Text>
          </TouchableOpacity>
          <Text containerStyle={{flexWrap: 'wrap', flex: 1}}>
            Regular (5-7 business days)
          </Text>
        </View>
        <Spacer mt={10} />
        <View style={styles.shippingmethodwrapper}>
          <TouchableOpacity
            style={styles.radioBtnWrapper}
            activeOpacity={1}
            onPress={() => setCheckedIndex(1)}>
            <RadioButton
              checked={checkedIndex}
              index={1}
              innerContainerStyle={{backgroundColor: COLORS.primary3}}
              containerStyle={{borderColor: COLORS.primary3}}
            />
            <Spacer mr={10} />
            <Text>$15.00 USD</Text>
          </TouchableOpacity>
          <Text containerStyle={{flexWrap: 'wrap', flex: 1}}>
            Rush (2-3 business days)- Additional $15.00
          </Text>
        </View>
      </Collapsible>
    );
  };

  const _itemsYourMayLike = () => {
    return (
      <View>
        <TextWithUnderLine title={'Items you may like'} />
        <Text>Items you may like</Text>
      </View>
    );
  };

  const showModal = () => setVisible(false);

  const _offerTextWithCheckMark = (text: string) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={icons.Check} style={{width: 10.8, height: 8.7}} />
        <Spacer mr={10} />
        <Text>{text}</Text>
      </View>
    );
  };

  const _modalOfferAlert = () => {
    return (
      <Modal
        style={[globalStyles.shadowEffect, styles.modalWrapper]}
        supportedOrientations={['portrait']}
        backdropOpacity={0}
        presentationStyle="overFullScreen"
        animationOut="slideOutDown"
        isVisible={visible}
        animationIn="slideInUp">
        <View style={styles.modalContentWrapper}>
          <View style={{paddingLeft: 20, paddingTop: 5, marginBottom: 10}}>
            <TouchableOpacity onPress={() => showModal()}>
              <Image source={images.close} style={styles.modalClose} />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: 20}}
            showsVerticalScrollIndicator={false}>
            <TextWithUnderLine title={'shop, save, and collect'} />
            <Spacer mt={10} />
            <Text containerStyle={{textAlign: 'center'}}>
              Would you like to checkout as a Preferred Customer and receive
              exclusive offers like 10% off every order, free shipping, and
              more?
            </Text>
            <Spacer mt={20} />
            {/* //Todo: Need to add offer cart image */}
            <Spacer mt={20} />
            {_offerTextWithCheckMark(' You get 10% Off All Orders')}
            {_offerTextWithCheckMark(' Free Shipping on Items Over $xx')}
            {_offerTextWithCheckMark(
              ' Kiss Kredits with purchase, for just $10 a year!',
            )}
            <Spacer mt={23} />
            <Text
              containerStyle={[
                globalStyles.text_avenir_heavy,
                {fontSize: SIZES.h3, textAlign: 'center'},
              ]}>
              $10/Year
            </Text>
            <Spacer mt={23} />
            <OutlineButton
              title={'Become a K&T preferred customer'}
              containerStyle={[
                {
                  backgroundColor: COLORS.primary3,
                  borderColor: COLORS.primary3,
                },
              ]}
              textStyleContainer={[globalStyles.bannerBtnTextWhite]}
              onPress={() => {}}
            />
            <Spacer mt={10} />
            <Text
              containerStyle={[
                globalStyles.text_avenir_medium,
                {
                  textAlign: 'center',
                  letterSpacing: 0.7,
                  textDecorationLine: 'underline',
                  color: COLORS.primary3,
                },
              ]}>
              I don’t want exclusive offers
            </Text>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <ScrollToTopContainer showCart={true}>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithTwoLevelUpWithoutNavigationParams
          oneLevelTitle={'Shopping Cart'}
          screenName={ScreenNames.MainShoppingCartBag}
          title={'Checkout'}
        />
        <Spacer mt={20} />

        {_headerItem(
          () => {
            setIsAccountCollapsed(!isAccountCollapsed);
          },
          'Account Information',
          isAccountCollapsed,
        )}

        {_accountInformation()}

        {_headerItem(
          () => {
            setIsDistributorCollapsed(!isDistributorCollapsed);
          },
          'FIND YOUR DISTRIBUTOR',
          isDistributorCollapsed,
        )}
        {_findYourDistributor()}

        {_headerItem(
          () => {
            setIsPersonalInformationCollapsed(!isPersonalInformationCollapsed);
          },
          'Personal Information',
          isPersonalInformationCollapsed,
        )}
        {_personalInformation()}

        {_headerItem(
          () => {
            setIsShippingAddressCollapsed(!isShippingAddressCollapsed);
          },
          'shipping address',
          isShippingAddressCollapsed,
        )}
        {_shippingAddress()}

        {_headerItem(
          () => {
            setIsBillingAddressCollapsed(!isBillingAddressCollapsed);
          },
          'Billing address',
          isBillingAddressCollapsed,
        )}
        {_billingAddress()}

        {_headerItem(
          () => {
            setIsShippingMethodCollapsed(!isShippingMethodCollapsed);
          },
          'Shipping Method',
          isShippingMethodCollapsed,
        )}
        {_shippingMethod()}
        <Spacer mt={20} />
        {_itemsYourMayLike()}
        {_modalOfferAlert()}
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  shippingmethodwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioBtnWrapper: {
    flexDirection: 'row',
    width: '50%',
  },
  modalContentWrapper: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginTop: 10,
    height: SIZES.height / 2,
  },
  modalWrapper: {
    width: SIZES.width - 16,
    marginTop: 80,
    marginHorizontal: 8,
    backgroundColor: COLORS.white,
    flex: 0.7,
  },
  modalClose: {
    width: 24,
    height: 24,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
