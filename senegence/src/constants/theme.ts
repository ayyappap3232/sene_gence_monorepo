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
    swatch: "#787878",
    ligthGrey: "#f4f4f4",
    border1:"#6a5f41",
    dotBackground: "#0052d4",
    assistColor: "#333333",
    pureBlack: "#000000",
    mandatoryColor: "#ff3217",
    tabBottomColor: "#32a5e0",
    unselectedColor: "#838383",
    border2: "#dedede",
    backgroundGrayColor: "#f7f7f7",
    searchTitle: "#605f5f",
    unCheckedColor: "#707070"

}

export const SIZES = {
    //global sizes
    base:8,
    font:14,
    radius:30,
    padding1: 10,
    padding2: 12,

    //
    veryLargeTitle: 70,
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
    AvenirBlack: "AvenirLTStd-Black",
    largeTitle : {fontFamily: "Avenir Regular", fontSize: SIZES.largeTitle, lineHeight: 55}
}

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;