import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import {COLORS, FONTS, icons, images, SIZES} from '../../../constants';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import OrderHistoryTable from 'components/tables/OrderHistoryTable';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import Divider from 'components/dividers/Divider';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {_inputItem} from 'components/textInputs/InputItemWithAsterik';
import Checkbox from 'components/checkboxs/Checkbox';
import OutlineButton from 'components/buttons/OutlineButton';

export default function ContactDistributor() {
  const _cardContent = () => {
    return (
      <View
        style={[
          globalStyles.shadowEffect,
          {
            backgroundColor: COLORS.white,
            padding: 10,
            marginHorizontal: 20,
          },
        ]}>
        <Image
          source={images.christopher}
          style={{width: 228, height: 209, alignSelf: 'center'}}
        />
        <Spacer mt={10} />
        <View style={{marginLeft: 20}}>
          <Text containerStyle={[globalStyles.text_avenir_heavy]}>
            Katie Enos
          </Text>
          <Spacer mt={10} />
          <Text>Distributor ID: 189417</Text>
          <Spacer mt={10} />
          <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
            <Image
              source={icons.email}
              style={{width: 21, height: 16, marginRight: 10}}
            />
            <Text>katieenos@demo.com </Text>
          </View>
          <Spacer mt={10} />
          <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
            <Image
              source={icons.phone}
              style={{width: 18, height: 19, marginRight: 10}}
            />
            <Text>(480)369-2370 </Text>
          </View>
          <Spacer mt={10} />
          <View style={[globalStyles.row, {justifyContent: 'flex-start'}]}>
            <Image
              source={icons.globe}
              style={{width: 18, height: 18, marginRight: 10}}
            />
            <Text>www.katieenosweb.com </Text>
          </View>
        </View>
      </View>
    );
  };

  const _contactDistributor = () => {
    return (
      <>
        <Spacer mt={10} />
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
        <Text
          containerStyle={{
            fontSize: SIZES.h1 + 2,
            textTransform: 'uppercase',
            fontFamily: FONTS.BebasNeueRegular,
          }}>
          Contact Distributor
        </Text>
        <Spacer mt={20} />
        <Text
          containerStyle={{
            fontSize: SIZES.body4,
            textTransform: 'uppercase',
            fontFamily: FONTS.AvenirHeavy,
          }}>
          Distributor Information
        </Text>
        <Spacer mt={10} />
        <Divider
          width={SIZES.width - 40}
          height={1}
          backgroundColor={COLORS.border}
        />
        <Spacer mt={20} />
        {_cardContent()}
        <Spacer mt={20} />
        <View style={{marginLeft: 20}}>
          {_inputItem(
            'Your Message',
            () => {},
            'Please enter your message...',
            false,
            true,
            '',
            'default',
            {},
            256,
          )}
        </View>
        <Spacer mt={20} />
        <View style={{flexDirection: 'row',alignItems:'center',alignSelf:'flex-end'}}>
            <Checkbox />
            <Text containerStyle={{marginLeft: 10}}>Email Me a Copy</Text>
        </View>
        <Spacer mt={20} />
        <OutlineButton
            title={'Send Message'}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {width: 166, height: 39, alignSelf: 'flex-end'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextWhite]}
            onPress={() => {
              
            }}
          />
        <Spacer mt={20} />
      </>
    );
  };
  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        {_contactDistributor()}
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
