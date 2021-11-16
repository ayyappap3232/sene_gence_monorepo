import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {globalStyles} from 'globalstyles/GlobalStyles';
import {icons, images} from '../../constants';
import OutlineButton from '../buttons/OutlineButton';
import Spacer from '../Spacer';
import Text from '../text/Text';

//The information provided on this page will be lost If you go back to previous page

export default function LostTheGoBackContentAlert() {
  return (
    <View>
      <Image
        source={images.close}
        style={{width: 20, height: 20, alignSelf: 'flex-end'}}
      />
      <Spacer mt={20} />
      <View style={{justifyContent: 'center'}}>
        <Text>
          The information provided on this page will be lost If you go back to
          previous page
        </Text>
        <View style={[globalStyles.row]}>
          <OutlineButton
            title={'Cancel'}
            containerStyle={[
              globalStyles.bannerBtnBlueOutline,
              {width: 76, height: 36, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextBlue]}
            onPress={() => {}}
          />
          <OutlineButton
            title={'Save & Continue'}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {width: 89, height: 36, alignSelf: 'flex-start'},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextWhite]}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
