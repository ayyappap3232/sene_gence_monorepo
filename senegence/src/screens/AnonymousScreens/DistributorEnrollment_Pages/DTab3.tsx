import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import RadioButton from 'components/buttons/radioButtons/RadioButton';
import DistributorWrapper from './DistributorWrapper';
import {globalStyles} from 'globalstyles/GlobalStyles';
import Text from 'components/text/Text';
import {COLORS, images} from '../../../constants';
import Spacer from 'components/Spacer';
import Collapsible from 'react-native-collapsible';
import OutlineButton from 'components/buttons/OutlineButton';
import { _inputItem } from 'components/textInputs/InputItemWithAsterik';
import Checkbox from 'components/checkboxs/Checkbox';

export default function DTab3() {
  const [collapseAccountInformation, setAccountInformation] = useState(false);
  const [collapsePersonalInformation, setPersonalInformation] = useState(false);
  const [collapsePhysicalAddress, setPhysicalAddress] = useState(false);
  const [collapseShippingAddress, setShippingAddress] = useState(false);

  const accountInformation = () => {
    return (
      <>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black,
            height: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setAccountInformation(!collapseAccountInformation)}>
          <Text>Account Information</Text>
          <Image
            source={collapseAccountInformation ? images.minus : images.plus}
            style={
              collapseAccountInformation
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapseAccountInformation}>
          <Spacer mt={20} />
          {/* Make it dropdown */}
          {_inputItem("Country",() => {},"Select Your Country...",true,false,"")}
          <Spacer mt={10} />
          {_inputItem("Preferred Name",() => {},"Enter Preferred Name",false,false,"")}
          <Spacer mt={10} />
          {_inputItem("Email Address",() => {},"Enter Email Address",true,false,"")}
          <Spacer mt={10} />
          {_inputItem("Confirm Email Address",() => {},"Enter Email Address",true,false,"")}
          <Spacer mt={10} />
          {_inputItem("Phone",() => {},"Enter Phone Number",true,false,"")}
          <Spacer mt={10} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox />
            <Text containerStyle={{marginLeft: 10}}>I would like to receive text messages </Text>
          </View>
          <Spacer mt={20} />
          {/* Make it dropdown */}
          {_inputItem("Phone Type",() => {},"Choose",true,false,"")}
          <Spacer mt={10} />
          {_inputItem("Social Security Number",() => {},"Enter SSN Number",true,false,"")}
          <Spacer mt={10} />
          {_inputItem("How would you like to refer to your business with SeneGence?",() => {},"Kate’s LipSquad",true,false,"")}
          <Spacer mt={20} />
          <OutlineButton
            title={'Save'}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {width: 89,height: 36},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextWhite]}
            onPress={() => {}}
          />
          <Spacer mt={20} />
        </Collapsible>
      </>
    );
  };

  const personalInformation = () => {
    return (
      <>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black,
            height: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setPersonalInformation(!collapsePersonalInformation)}>
          <Text>Personal Information</Text>
          <Image
            source={collapsePersonalInformation ? images.minus : images.plus}
            style={
              collapsePersonalInformation
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapsePersonalInformation}>
          <Text>Information of personal info</Text>
        </Collapsible>
      </>
    );
  };

  const physicalAddress = () => {
    return (
      <>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black,
            height: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setPhysicalAddress(!collapsePhysicalAddress)}>
          <Text>Physical Address</Text>
          <Image
            source={collapsePhysicalAddress ? images.minus : images.plus}
            style={
              collapsePhysicalAddress
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapsePhysicalAddress}>
          <Text>Information of physical address</Text>
        </Collapsible>
      </>
    );
  };

  const shippingAddress = () => {
    return (
      <>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black,
            height: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setShippingAddress(!collapseShippingAddress)}>
          <Text>Shipping Address</Text>
          <Image
            source={collapseShippingAddress ? images.minus : images.plus}
            style={
              collapseShippingAddress
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapseShippingAddress}>
          <Text>Information of shipping address</Text>
        </Collapsible>
      </>
    );
  };

  const _formfillupContent = () => {
    return (
      <>
        {accountInformation()}
        <Spacer mt={10} />
        {personalInformation()}
        <Spacer mt={10} />
        {physicalAddress()}
        <Spacer mt={10} />
        {shippingAddress()}
        <Spacer mt={20} />
        <View style={[globalStyles.row]}>
          <OutlineButton
            title={'Back'}
            containerStyle={[
              globalStyles.bannerBtnBlueOutline,
              {width: 76,height: 36, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextBlue]}
            onPress={() => {}}
          />
          <OutlineButton
            title={'Continue'}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {width: 89,height: 36, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextWhite]}
            onPress={() => {}}
          />
        </View>
      </>
    );
  };

  return (
    <DistributorWrapper>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={{margin: 20}}>
        <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
          <TouchableOpacity onPress={() => {}}>
            <RadioButton checked={0} index={-1} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text containerStyle={{marginLeft: 10}}>Individual Account</Text>
            <View
              style={{
                backgroundColor: COLORS.black,
                padding: 5,
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                marginLeft: 10,
                borderRadius: 30,
              }}>
              <Text
                containerStyle={{color: COLORS.white, fontSize: 9, bottom: 0}}>
                ?
              </Text>
            </View>
          </View>
        </View>
        <Spacer mt={10} />
        <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
          <TouchableOpacity onPress={() => {}}>
            <RadioButton checked={0} index={-1} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text containerStyle={{marginLeft: 10}}>Business Account</Text>
            <View
              style={{
                backgroundColor: COLORS.black,
                padding: 5,
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                marginLeft: 10,
                borderRadius: 30,
              }}>
              <Text
                containerStyle={{color: COLORS.white, fontSize: 9, bottom: 0}}>
                ?
              </Text>
            </View>
          </View>
        </View>
        <Spacer mt={20} />
        {_formfillupContent()}
      </ScrollView>
    </DistributorWrapper>
  );
}

const styles = StyleSheet.create({});
