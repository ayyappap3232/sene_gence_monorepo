import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

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
})