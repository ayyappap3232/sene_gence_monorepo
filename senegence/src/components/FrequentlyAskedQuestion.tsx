import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../constants";
import { globalStyles } from "../globalstyles/GlobalStyles";
import OutlineButton from "./buttons/OutlineButton";
import Spacer from "./Spacer";
import Text from "./text/Text";

export const _frequentlyAskedQuestions = () => {
    return (
      <View style={{backgroundColor: COLORS.ligthGrey, alignItems: 'center'}}>
        <Spacer mt={20} />
        <Text
          containerStyle={[
            globalStyles.text_bebas_regular,
            {fontSize: SIZES.h3},
          ]}>
          Frequently Asked Questions?
        </Text>
        <Spacer mt={4} />
        <Text containerStyle={[globalStyles.text, {marginHorizontal: 6}]}>
          Join us as an Independent Distributor and enjoy fantastic products
          that really work, and a career that really works to meet your unique
          needs and goals.
        </Text>
        <Spacer mt={4} />
        <OutlineButton textStyleContainer={{color: COLORS.white}} containerStyle={[globalStyles.bannerBtnWhiteBackground,{backgroundColor:COLORS.footerColor}]} title={'View More'} onPress={() => {}} />
        <Spacer mt={20} />
      
      </View>
    );
  };