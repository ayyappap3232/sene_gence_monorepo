import React from "react";
import { Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import OutlineButton from "../buttons/OutlineButton";
import Spacer from "../Spacer";
import Text from "../text/Text";

export const _renderSectionContent = (
    image: any,
    text1: string,
    text2: string,
    text3: string,
    buttonText: string,
    buttonOnPress:() => void,
    height: number,
  ) => {
    return (
      <>
        <Image
          source={image}
          style={{width: SIZES.width - 60, height: height}}
          resizeMode="contain"
        />
        <Spacer mt={10} />
        <Text containerStyle={styles.shopSaveText1}>{text1}</Text>
        <Spacer mt={4} />
        <Text containerStyle={styles.shopSaveText2}>{text2}</Text>
        <Spacer mt={4} />
        <Text containerStyle={styles.shopSaveText3}>{text3}</Text>
        <Spacer mt={10} />
        <OutlineButton
          containerStyle={styles.shopSaveBtn}
          title={buttonText}
          textStyleContainer={styles.shopSaveBtnText}
          onPress={buttonOnPress}
        />
      </>
    );
  };

  const styles = StyleSheet.create({
    shopSaveText1: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontFamily: FONTS.BebasNeueBold,
        letterSpacing: 2,
        color: COLORS.text,
        textAlign: 'center',
      },
      shopSaveText2: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: FONTS.AvenirMedium,
        letterSpacing: 1.6,
        color: COLORS.text,
        textAlign: 'center',
      },
      shopSaveText3: {
        textTransform: 'uppercase',
        fontSize: 14,
        fontFamily: FONTS.AvenirBook,
        letterSpacing: 0.7,
        color: COLORS.text,
        textAlign: 'center',
      },
      shopSaveBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: COLORS.primary2,
        width: SIZES.width - 60
      },
      shopSaveBtnText: {
        color: COLORS.primary2,
        fontFamily: FONTS.AvenirHeavy,
        fontSize: 14,
        lineHeight: 26,
        letterSpacing: 1.4,
        textTransform: 'uppercase',
      },
  })