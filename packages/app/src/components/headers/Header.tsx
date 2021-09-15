import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity, Image, Platform} from 'react-native'
import { AppLogo, Globe, HamburgerMenu, Search } from '../../../assets/svgs';
import { COLORS, FONTS, images, SIZES } from '../../constants';

export default function Header() {
    const navigation = useNavigation<any>();

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => {
            return <SafeAreaView style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.openDrawer()}>
                        <HamburgerMenu width={23.7} height={18.6} style={styles.hamburgerMenu}/>
                    </TouchableOpacity>
                    <Image source={images.logo} resizeMode="contain" style={{width: 192.7, height: 44}}/>
                </View>
                <View style={styles.headerContent}>
                    <Search />
                    <View style={styles.globeWrapper}>
                        <Globe />
                        <Text style={styles.rightText}>USA</Text>
                    </View>
                </View>
            </SafeAreaView>
            },
            

        })
    }, [])

    return (
        <></>
    )
}

const styles = StyleSheet.create({
    header: {
        height: Platform.OS =="ios" ? 120 : 80,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.white,
    },
    headerContent:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 10

    },
    hamburgerMenu: {
        marginRight: 20
    },
    globeWrapper: {
        flexDirection: 'row',
        alignItems:'center'
    },
    rightText: {
        fontFamily: FONTS.AvenirMedium,
        letterSpacing: 1.6,
        fontSize: SIZES.body3,
        marginLeft: -5
    }
})
