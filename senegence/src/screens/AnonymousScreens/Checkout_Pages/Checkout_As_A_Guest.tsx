import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Checkbox} from 'react-native-paper';
import BreadCrumbWithTwoLevelUpWithoutNavigationParams from '../../../components/breadCrumbs/BreadCrumbWithTwoLevelUpWithoutNavigationParams';
import OutlineButton from '../../../components/buttons/OutlineButton';
import RadioButton from '../../../components/buttons/radioButtons/RadioButton';
import Divider from '../../../components/dividers/Divider';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {_inputItem} from '../../../components/textInputs/InputItemWithAsterik';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import {ScreenNames} from '../../../utils/screenNames';

export default function Checkout_As_A_Guest() {
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

  const _headerItem = (
    onPress: any,
    headerTitle: any,
    isCollapsed: boolean,
  ) => {
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
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
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: -5}}>
          <Checkbox
            color={COLORS.primary3}
            uncheckedColor={COLORS.primary3}
            status={isShippingAddressSame ? 'checked' : 'unchecked'}
            onPress={() => {
              setIsShippingAddressSame(!isShippingAddressSame);
            }}
          />
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
              <Text >$0.00 USD</Text>
            </TouchableOpacity>
          <Text containerStyle={{flexWrap: 'wrap',flex: 1}}>
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
            <Text >$15.00 USD</Text>
          </TouchableOpacity>
          <Text containerStyle={{flexWrap: 'wrap',flex: 1}}>
            Rush (2-3 business days)- Additional $15.00
          </Text>
        </View>
      </Collapsible>
    );
  };

  const _itemsYourMayLike = () => {
      return <View>
          <TextWithUnderLine title={"Items you may like"}/>
          <Text>Items you may like</Text>
      </View>
  }

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
});
