import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {COLORS, icons, images, SIZES} from '../../constants';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import Divider from 'components/dividers/Divider';
import OrderHistoryTable from 'components/tables/OrderHistoryTable';
import {globalStyles} from 'globalstyles/GlobalStyles';
import Collapsible from 'react-native-collapsible';
import KissKreditsTable from 'components/tables/KissKreditsTable';
import Switch from 'components/switches/Switch';
import OutlineButton from 'components/buttons/OutlineButton';

export default function UserProfile() {
  const [collapsePersonalInformation, setPersonalInformation] = useState(false);
  const [collapseAddress, setCollapseAddress] = useState(false);
  const [collapsePayment, setCollapsePayment] = useState(false);
  const [collapseBeautyProfile, setCollapseBeautyProfile] = useState(false);
  const [collapseKissKredits, setCollapseKissKredits] = useState(false);
  const [collapseTwoFactorAuthentication, setCollapseTwoFactorAuthentication] =
    useState(false);
  const [collapseNewsLetterInfo, setCollapseNewsLetterInfo] = useState(false);
  const [twoFactorSwitch, setTwoFactorSwitch] = useState(false);
  const [newsLetterSwitch, setNewsLetterSwitch] = useState(false);

  const _orderHistory = () => {
    return (
      <>
        <Text containerStyle={{fontSize: SIZES.h1 + 2}}>Order History</Text>
        <Spacer mt={10} />
        <OrderHistoryTable />
      </>
    );
  };

  const _memberShip = () => {
    return (
      <>
        <Text
          containerStyle={[
            globalStyles.text_avenir_heavy,
            {textTransform: 'uppercase'},
          ]}>
          Membership
        </Text>
        <Spacer mt={10} />
        <Divider
          width={SIZES.width - 40}
          height={1}
          backgroundColor={COLORS.border}
        />
        <Spacer mt={20} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Hi, Jalynn!
          </Text>
          <Spacer mt={10} />
          <Text>Kiss & Tell Preferred Customer Since: </Text>
          <Spacer mt={10} />
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            August 24, 2021
          </Text>
          <Spacer mt={10} />
          <Text>178 Kiss Kredits | 1 Referrals </Text>
          <Spacer mt={10} />
          <Text
            containerStyle={[
              globalStyles.text_avenir_medium,
              {fontSize: 12, letterSpacing: 0.3},
            ]}>
            Membership Expires in 07 days{' '}
            <Text containerStyle={{color: COLORS.primary3}}>Renew Now</Text>
          </Text>
        </View>
      </>
    );
  };

  const _personalInfoContent = (
    icon: any,
    text: string,
    width = 20,
    height = 20,
  ) => {
    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
        <Image
          source={icon}
          style={{
            width: width,
            height: height,
            marginRight: 10,
            resizeMode: 'contain',
          }}
        />
        <Text>{text}</Text>
      </View>
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
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Personal Information
          </Text>
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
          <Spacer mt={20} />
          <View style={[globalStyles.row]}>
            <Text>Jalynn Schroeder</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text containerStyle={{marginRight: 10}}>Edit</Text>
              <TouchableOpacity>
                <Image
                  source={images.editIcon}
                  style={{width: 15, height: 15, tintColor: COLORS.border1}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Spacer mt={20} />
          {_personalInfoContent(
            icons.email,
            'CONTACT EMAIL: katieenos2@demo.com',
          )}
          {_personalInfoContent(icons.phone, 'CONTACT: (480) 369-2370')}
          {_personalInfoContent(icons.email, 'LOGIN EMAIL: katieenos@demo.com')}
          {_personalInfoContent(icons.globe, 'WEBSITE: katieenos@demo.com  ')}
          {_personalInfoContent(icons.email, 'Birthday: 7/11/1990')}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Image
              source={icons.email}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                resizeMode: 'contain',
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <Text containerStyle={{marginRight: 10}}>PASSWORD:</Text>
              <TouchableOpacity>
                <Text containerStyle={{color: COLORS.primary4}}>
                  Change Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Collapsible>
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

  const _addressCard = () => {
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
            <TouchableOpacity>
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

  const _shippingAddress = () => {
    return (
      <View>
        {addressHeader('Shipping Address')}
        {_addressCard()}
        <Spacer mt={16} />
        <View style={[globalStyles.row, {marginHorizontal: 5}]}>
          <TouchableOpacity>
            <Text containerStyle={{color: COLORS.primary4}}>View All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text containerStyle={{color: COLORS.primary4}}>+ Add New</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _billingAddress = () => {
    return (
      <View>
        {addressHeader('Billing Address')}
        {_addressCard()}
        <Spacer mt={16} />
        <View style={[globalStyles.row, {marginHorizontal: 5}]}>
          <TouchableOpacity>
            <Text containerStyle={{color: COLORS.primary4}}>View All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text containerStyle={{color: COLORS.primary4}}>+ Add New</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _address = () => {
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
          onPress={() => setCollapseAddress(!collapseAddress)}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Address
          </Text>
          <Image
            source={collapseAddress ? images.minus : images.plus}
            style={
              collapseAddress ? {width: 15, height: 2} : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapseAddress}>
          <Spacer mt={20} />
          {_shippingAddress()}
          <Spacer mt={20} />
          {_billingAddress()}
        </Collapsible>
      </>
    );
  };

  const _payment = () => {
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
          onPress={() => setCollapsePayment(!collapsePayment)}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Payment
          </Text>
          <Image
            source={collapsePayment ? images.minus : images.plus}
            style={
              collapsePayment ? {width: 15, height: 2} : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapsePayment}>
          <Spacer mt={20} />
          <Text>Payment need to implement</Text>
        </Collapsible>
      </>
    );
  };

  const _beautyProfileItem = (name: string, value: string) => {
    return name ? (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
        <Text
          containerStyle={{
            marginRight: 10,
            textTransform: 'uppercase',
            color: COLORS.swatch,
          }}>
          {name}:
        </Text>
        <Text
          containerStyle={[
            globalStyles.text_avenir_heavy,
            {flexWrap: 'wrap', flex: 1},
          ]}>
          {value}
        </Text>
      </View>
    ) : null;
  };

  const _beautyProfile = () => {
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
          onPress={() => setCollapseBeautyProfile(!collapseBeautyProfile)}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Beauty Profile
          </Text>
          <Image
            source={collapseBeautyProfile ? images.minus : images.plus}
            style={
              collapseBeautyProfile
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapseBeautyProfile}>
          <Spacer mt={20} />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Text containerStyle={{marginRight: 10}}>Edit</Text>
              <TouchableOpacity>
                <Image
                  source={images.editIcon}
                  style={{width: 15, height: 15, tintColor: COLORS.border1}}
                />
              </TouchableOpacity>
            </View>
            {_beautyProfileItem('Skin type', 'Dry')}
            {_beautyProfileItem('Undertone', 'Warm')}
            {_beautyProfileItem('Foundation', 'Fair CCTM')}
            {_beautyProfileItem('Hair type', 'Curly')}
            {_beautyProfileItem(
              'Skin Concern',
              'Fine Line Wrinkles, Dark Spots',
            )}
            {_beautyProfileItem('Hair Concern', 'Damaged')}
          </View>
        </Collapsible>
      </>
    );
  };

  const _kissKredits = () => {
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
          onPress={() => setCollapseKissKredits(!collapseKissKredits)}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Kiss Kredits
          </Text>
          <Image
            source={collapseKissKredits ? images.minus : images.plus}
            style={
              collapseKissKredits
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapseKissKredits}>
          <Spacer mt={20} />
          <KissKreditsTable />
        </Collapsible>
      </>
    );
  };

  const _twoFactorAuthenticator = () => {
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
          onPress={() =>
            setCollapseTwoFactorAuthentication(!collapseTwoFactorAuthentication)
          }>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            Two-Factor Authentication(2FA)
          </Text>
          <Image
            source={
              collapseTwoFactorAuthentication ? images.minus : images.plus
            }
            style={
              collapseTwoFactorAuthentication
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapseTwoFactorAuthentication}>
          <Spacer mt={20} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 10,
            }}>
            <Text containerStyle={{flex: 1, flexWrap: 'wrap'}}>
              2 factor Authentication adds a layer of security to your account
            </Text>
            <Switch
              value={twoFactorSwitch}
              onValueChange={(val: any) => setTwoFactorSwitch(val)}
            />
          </View>
        </Collapsible>
      </>
    );
  };

  const _newsLetterInformation = () => {
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
          onPress={() => setCollapseNewsLetterInfo(!collapseNewsLetterInfo)}>
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            NewsLetter Information
          </Text>
          <Image
            source={collapseNewsLetterInfo ? images.minus : images.plus}
            style={
              collapseNewsLetterInfo
                ? {width: 15, height: 2}
                : {width: 15, height: 15}
            }
          />
        </TouchableOpacity>
        <Collapsible collapsed={!collapseNewsLetterInfo}>
          <Spacer mt={20} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 10,
            }}>
            <Text containerStyle={{flex: 1, flexWrap: 'wrap'}}>
              I would like to receive emails regarding Specials & Promotions
            </Text>
            <Switch
              value={newsLetterSwitch}
              onValueChange={(val: any) => setNewsLetterSwitch(val)}
            />
          </View>
        </Collapsible>
      </>
    );
  };

  const _referralSection = () => {
    return (
      <View style={{backgroundColor: COLORS.ligthGrey, padding: 20}}>
        <Image
          source={images.beautyGirls}
          style={{
            width: SIZES.width,
            height: 220,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Spacer mt={20} />
        <Text containerStyle={{fontSize: SIZES.h1}}>Kiss & Tell Referrals</Text>
        <Spacer mt={20} />
        <Text
          containerStyle={{
            textAlign: 'center',
          }}>{`Want to lock in even more savings? TELL someone about SeneGence® products and earn even more Kiss Kredits and SAVE on future purchases!
That’s right! When you refer someone to become a Kiss & Tell Preferred Customer with your unique referral link, you’ll receive an additional 15 Kiss Kredits in your account once they place $100 USD in cumulative retail orders within their first month of membership. You can then apply these Kiss Kredits to your future purchases!

Some say they never Kiss & Tell, but at SeneGence, that’s just not the case.

Tell someone today to begin earning Kiss Kredits and save, save, save!`}</Text>
        <Spacer mt={20} />
        <OutlineButton
          title={'Referrals'}
          onPress={() => {}}
          containerStyle={[
            globalStyles.bannerBtnBlueBackground,
            {width: 128, alignSelf: 'center'},
          ]}
          textStyleContainer={[globalStyles.bannerBtnTextWhite]}
        />
      </View>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithOneLevelUp title={'User Profile'} />
        <Spacer mt={30} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image source={images.loginUser} style={{width: 89, height: 91}} />
          {/* Todo: Need to change it with dynamic login user */}
          <View>
            <Text>Jalynn Schroeder</Text>
            <Text>Email: testmrcn@hotmail.com</Text>
            <Text>Distributor: Jane Smith</Text>
            <Text>Phone: +4562342334</Text>
          </View>
        </View>
        <Spacer mt={20} />
        <Divider
          width={SIZES.width - 40}
          height={1}
          backgroundColor={COLORS.border}
        />
        <Spacer mt={20} />
        {/* {_orderHistory()} */}
        {_memberShip()}
        <Spacer mt={20} />
        {personalInformation()}
        <Spacer mt={20} />
        {_address()}
        <Spacer mt={20} />
        {_payment()}
        <Spacer mt={20} />
        {_beautyProfile()}
        <Spacer mt={20} />
        {_kissKredits()}
        <Spacer mt={20} />
        {_twoFactorAuthenticator()}
        <Spacer mt={20} />
        {_newsLetterInformation()}
        <Spacer mt={20} />
        {_referralSection()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
