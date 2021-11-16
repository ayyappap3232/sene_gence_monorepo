import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {globalStyles} from 'src/globalstyles/GlobalStyles';
import {COLORS, icons, images, SIZES} from '../../constants';
import OutlineButton from '../buttons/OutlineButton';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import Text from '../text/Text';

export default function SponserAlert() {
  return (
    <View>
      <Image
        source={images.close}
        style={{width: 20, height: 20, alignSelf: 'flex-end'}}
      />
      <Spacer mt={20} />
      <Divider
        width={SIZES.width - 20}
        height={1}
        backgroundColor={COLORS.border}
      />
      <Spacer mt={20} />
      <View
        style={[
          globalStyles.shadowEffect,
          {backgroundColor: COLORS.white, padding: 20},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={images.ownBusinessGirl}
            style={{width: 200, height: 225}}
          />
          <View style={{justifyContent: 'center'}}>
            <View style={{alignSelf: 'center'}}>
              <Text>KATIE ENOS</Text>
              <Text containerStyle={{color: COLORS.swatch}}>
                Distributor ID : 189478
              </Text>
            </View>
            <Spacer mt={20} />
            <View style={{flexDirection: 'row'}}>
              <Image
                source={icons.globe}
                style={{width: 24, height: 24, marginRight: 10}}
              />
              <Text>katieenos@demo.com</Text>
            </View>
          </View>
        </View>
      </View>
      <Spacer mt={30} />
      <View style={{}}>
        <OutlineButton
          title={'Yes, I want to assign this sponsor'}
          containerStyle={[
            globalStyles.bannerBtnBlueOutline,
            {width: SIZES.width - 20, height: 36, alignSelf: 'flex-start'},
          ]}
          textStyleContainer={[globalStyles.bannerBtnTextBlue]}
          onPress={() => {}}
        />
        <OutlineButton
          title={'No, I want a Different sponsor'}
          containerStyle={[
            globalStyles.bannerBtnBlueBackground,
            {width: SIZES.width - 20, height: 36, alignSelf: 'flex-start'},
          ]}
          textStyleContainer={[globalStyles.bannerBtnTextWhite]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
