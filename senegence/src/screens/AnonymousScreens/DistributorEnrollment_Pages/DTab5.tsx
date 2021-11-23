import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Spacer from 'components/Spacer';
import DistributorWrapper from './DistributorWrapper';
import {COLORS, icons, images, SIZES} from '../../../constants';
import {globalStyles} from 'globalstyles/GlobalStyles';
import OrderSummary from 'components/dummyComponents/OrderSummary';
import Text from 'components/text/Text';
import {_inputItem} from 'components/textInputs/InputItemWithAsterik';
import Select from 'components/select/Select';
import OutlineButton from 'components/buttons/OutlineButton';
import Divider from 'components/dividers/Divider';

export default function DTab5() {
  const [
    defaultShippingAndBillingAddress,
    setDefaultShippingAndBillingAddressShow,
  ] = useState({show: false, title: ''});

  const _addressCard = (title: string) => {
    return (
      <View
        style={[
          globalStyles.shadowEffect,
          {backgroundColor: COLORS.white, marginHorizontal: 5, padding: 10},
        ]}>
        <View style={[globalStyles.row]}>
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: COLORS.primary3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
            }}>
            <Image
              source={icons.Check}
              style={{width: 12, height: 12, tintColor: COLORS.white}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text containerStyle={{marginRight: 10}}>Edit</Text>
            <TouchableOpacity
              onPress={() => {
                setDefaultShippingAndBillingAddressShow({
                  show: true,
                  title: title,
                });
              }}>
              <Image
                source={images.editIcon}
                style={{width: 15, height: 15, tintColor: COLORS.border1}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Spacer mt={16} />
        <Text containerStyle={{marginLeft: 30}}>
          {`Michael M Smith
4189 Still Pastures Drive
Oakland, SC South Carolina 29150

803-499-9553
843-614-9601`}
        </Text>
        <Spacer mt={30} />
      </View>
    );
  };

  const _defaultShippingAndBillingAddress = (title: string) => {
    return (
      <>
        <Spacer mt={20} />
        <Text containerStyle={[globalStyles.text_avenir_heavy]}>
          Default {defaultShippingAndBillingAddress.title} Address
        </Text>
        <Spacer mt={20} />
        {_inputItem(
          'First Name',
          () => {},
          'Enter your first name...',
          true,
          false,
          '',
        )}
        {_inputItem(
          'Last Name',
          () => {},
          'Enter your last name...',
          true,
          false,
          '',
        )}
        {_inputItem(
          'Phone Number',
          () => {},
          '(555) - 555-5555',
          true,
          false,
          '',
        )}
        {_inputItem(
          'Address',
          () => {},
          'Enter your Address…',
          true,
          false,
          '',
        )}
        {_inputItem(
          'Address 2',
          () => {},
          'Enter second line…',
          true,
          false,
          '',
        )}
        <Select
          checked={false}
          data={['']}
          title={'Country'}
          isMandatory={true}
        />
        <Spacer mt={10} />
        <Select
          checked={false}
          data={['']}
          title={'State/Province'}
          isMandatory={true}
        />
        <Spacer mt={10} />
        <Select checked={false} data={['']} title={'City'} isMandatory={true} />
        <Spacer mt={10} />
        {_inputItem(
          'Zip Code',
          () => {},
          'Enter your zip code…',
          true,
          false,
          '',
        )}
        <Spacer mt={20} />
        <View style={[globalStyles.row, {justifyContent: 'flex-end'}]}>
          <OutlineButton
            title={'Cancel'}
            containerStyle={[
              globalStyles.bannerBtnBlueOutline,
              {width: 76, height: 36, marginRight: 20, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextBlue]}
            onPress={() => {}}
          />
          <OutlineButton
            title={'Save'}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {width: 89, height: 36, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextWhite]}
            onPress={() => {
              setDefaultShippingAndBillingAddressShow({
                show: false,
                title: defaultShippingAndBillingAddress.title,
              });
            }}
          />
        </View>
      </>
    );
  };

  const addressHeader = (title: string) => {
    return (
      <>
        <Text
          containerStyle={[
            globalStyles.text_avenir_heavy,
            {textTransform: 'uppercase'},
          ]}>
          {title}
        </Text>
        <Spacer mt={10} />
        <Divider
          width={SIZES.width - 40}
          height={1}
          backgroundColor={COLORS.border}
        />
        <Spacer mt={16} />
      </>
    );
  };

  const _shippingAddress = () => {
    return (
      <View>
        {addressHeader('Shipping Address')}
        {_addressCard('Shipping')}
        <Spacer mt={16} />
      </View>
    );
  };

  const _billingAddress = () => {
    return (
      <View>
        {addressHeader('Billing Address')}
        {_addressCard('Billing')}
        <Spacer mt={16} />
      </View>
    );
  };

  return (
    <DistributorWrapper borderWidth={0}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Text>Distributor Kit - Deep Neutrals</Text>
          </View>
          <View>
            <Text>Edit</Text>
            {/* edit icon */}
          </View>
        </View>
        <Spacer mt={20} />
        <Image
          source={images.featureProduct1}
          style={{width: SIZES.width - 40, height: 250}}
        />
        <Spacer mt={30} />
        <OrderSummary />
        <Spacer mt={30} />
        {_shippingAddress()}
        <Spacer mt={30} />
        {_billingAddress()}
        <Spacer mt={30} />
        <View>
          <Text>
            By submitting my order below, I confirm that I have read,
            understood, and agree to the terms of the SeneGence E-Signature
            Disclosure and Consent. Click here to view.
          </Text>
          <Spacer mt={20} />
          <Text>
            Clicking Submit Order will send your order to SeneGence
            International, and confirms that you agree to the Distributor
            Policies & Procedures, confirms that you have read and understood
            the Minimum Advertised Price Policy, and confirms that you agree to
            pay the amount of this transaction.
          </Text>
        </View>
        <Spacer mt={20} />
        <OutlineButton
          onPress={() => {}}
          textStyleContainer={{
            color: 'rgba(118,118,118,0.8)',
            textTransform: 'capitalize',
          }}
          containerStyle={{
            backgroundColor: COLORS.ligthGrey,
            width: SIZES.width - 40,
          }}
          title={'Distributor Policies & Procedures'}
        />
        <Spacer mt={20} />
        <OutlineButton
          onPress={() => {}}
          textStyleContainer={{
            color: 'rgba(118,118,118,0.8)',
            textTransform: 'capitalize',
          }}
          containerStyle={{
            backgroundColor: COLORS.ligthGrey,
            width: SIZES.width - 40,
          }}
          title={'Minimum Advertised Price Policy'}
        />
        <Spacer mt={30} />
        <View style={[globalStyles.row]}>
          <OutlineButton
            title={'Back'}
            onPress={() => {}}
            containerStyle={{borderColor: COLORS.primary3, width: 82}}
            textStyleContainer={{color: COLORS.primary3}}
          />
          <OutlineButton
            title={'Submit application'}
            onPress={() => {}}
            containerStyle={{backgroundColor: COLORS.primary3, width: 212}}
            textStyleContainer={{color: COLORS.white}}
          />
        </View>
      </ScrollView>
    </DistributorWrapper>
  );
}

const styles = StyleSheet.create({});
