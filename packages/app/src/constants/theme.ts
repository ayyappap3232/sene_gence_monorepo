import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const COLORS = {
    white: "#ffffff",
    primary: "#497ec7",
    text: "#00002d",
    border: '#d2d7e2',
    primary2: "#0052d2",
    footerColor: "#4387d6",
    black: "#00002d",
    red: "#e84646",
    swatch: "#787878"
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
    BebasNeueRegular:"BebasNeue-Regular",
    AvenirLight:"AvenirLight",
    AvenirHeavy: "AvenirLTProHeavy",
    AvenirBold: "AvenirBold",
    largeTitle : {fontFamily: "Avenir Regular", fontSize: SIZES.largeTitle, lineHeight: 55}
}

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;