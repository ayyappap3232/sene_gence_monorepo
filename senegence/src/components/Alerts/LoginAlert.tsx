import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {globalStyles} from 'src/globalstyles/GlobalStyles';
import {COLORS, images, SIZES} from '../../constants';
import OutlineButton from '../buttons/OutlineButton';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import Text from '../text/Text';

export default function LoginAlert() {
  return (
    <View>
      <View style={[globalStyles.row]}>
        <Text>LOGIN</Text>
        <Image source={images.close} style={{width: 20, height: 20}} />
      </View>
      <Divider
        width={SIZES.width - 20}
        height={1}
        backgroundColor={COLORS.border}
      />
      <Spacer mt={15} />
      <View style={{alignSelf: 'center'}}>
        <Text>
          Looks like you already have a customer account with SeneGence, please
          login to proceed.
        </Text>
        <Spacer mt={20} />
        <OutlineButton
          title={'Login'}
          containerStyle={[
            globalStyles.bannerBtnBlueBackground,
            {width: 100, height: 36},
          ]}
          textStyleContainer={[globalStyles.bannerBtnTextWhite]}
          onPress={() => {}}
        />
        <Spacer mt={20} />
        <Text>
          <Text containerStyle={{fontStyle: 'italic'}}>Note:</Text> You will get
          navigated to SeneGence’s Identity server for login.
        </Text>
      </View>
      <Spacer mt={20} />
    </View>
  );
}

const styles = StyleSheet.create({});
