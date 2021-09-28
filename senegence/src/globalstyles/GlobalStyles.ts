import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export const globalStyles = StyleSheet.create({
    innerContainer: {flex: 1, alignSelf: 'center',paddingHorizontal: 22},
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
        letterSpacing: 0.7,
        fontSize: SIZES.body4,
        color: COLORS.text,
        textAlign:'left'
      },
      text_avenir_medium: {
        fontFamily: FONTS.AvenirMedium,
        letterSpacing: 1.6,
        fontSize: SIZES.body3,
        color: COLORS.text,
        textAlign:'center'
      },
      text_avenir_heavy: {
        fontFamily: FONTS.AvenirHeavy,
        letterSpacing: 0.28,
        fontSize: SIZES.body4,
        lineHeight: SIZES.h2,
        color: COLORS.text,
        textAlign:'left'
      },
      text_bebas_regular: {
        fontFamily: FONTS.BebasNeueRegular,
        fontSize: 30,
        letterSpacing: 1.5,
        color: COLORS.text,
        textAlign: 'center'
      },
      text_bebas_bold: {
        fontFamily: FONTS.BebasNeueBold,
        fontSize: 20,
        letterSpacing: 2,
        color: COLORS.text,
        textAlign: 'center'
      },
      verticalImageTextAndDescriptionWrapper: {
        width: 162,
        marginTop: 19.5,
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 20.5,
        paddingTop: 19.8,
        paddingRight: 3.6,
        paddingBottom: 20,
        paddingLeft: 9.4,
        elevation: 2,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
      },
      tabHeadingInCardView:{
        fontFamily: FONTS.BebasNeueRegular,
        fontSize: SIZES.h1,
        lineHeight: 40,
        letterSpacing: 3,
        color: COLORS.text,
        textAlign: 'center'
      },
      bannerBtnBlueOutline:{
        borderColor: COLORS.primary2,
        width: 152,
        alignSelf:'center'
      },
      bannerBtnTextBlue:{
        color: COLORS.primary2
      },
      bannerBtnWhiteBackground:{
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        width: 152,
        alignSelf:'center'
      },
      shadowEffect: {
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
      }
})