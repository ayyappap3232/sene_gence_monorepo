import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const COLORS = {
    white: "#ffffff"
}

export const SIZES = {
    //global sizes
    base:8,
    font:14,
    radius:30,
    padding1: 10,
    padding2: 12,

    //fontsizes
    largeTitle:50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dimensions
    width,
    height
}

export const FONTS = {
    AvenirRegular: "Avenir Regular",
    BebasNeueBold: "BebasNeue-Bold",
    AvenirBook: "Avenir-Book",
    AvenirMedium:"Avenir-Medium",
    largeTitle : {fontFamily: "Avenir Regular", fontSize: SIZES.largeTitle, lineHeight: 55}
}

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;