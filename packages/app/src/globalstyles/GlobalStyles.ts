import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export const globalStyles = StyleSheet.create({
    contactCard: {
        backgroundColor: COLORS.white,
        alignSelf: 'flex-start',
        marginBottom: 20,
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        width: 334,
      },
      bannerHeader: {
        fontFamily: FONTS.BebasNeueBold,
        fontSize: SIZES.veryLargeTitle,
        lineHeight: 80,
        letterSpacing: 7,
        color: COLORS.white,
        textAlign: 'center'
      },
      bannerBody: {
        fontFamily: FONTS.AvenirHeavy,
        fontSize: SIZES.body4,
        letterSpacing: 0.7,
        color: COLORS.white,
        textAlign: 'center'
      },
      text: {
        fontFamily: FONTS.AvenirBook,
        fontSize: SIZES.body4,
        letterSpacing: 0.7,
        color: COLORS.text,
        textAlign:'left'
      },
      text_bebas_regular: {
        fontFamily: FONTS.BebasNeueRegular,
        fontSize: 30,
        letterSpacing: 1.5,
        color: COLORS.text,
        textAlign: 'center'
      }
})