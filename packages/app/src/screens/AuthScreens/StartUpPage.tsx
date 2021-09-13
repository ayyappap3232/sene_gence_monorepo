import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity, Button} from 'react-native'
import { AppLogo, Globe, HamburgerMenu, Search } from '../../../assets/svgs';
import { COLORS } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import HomeCarousel from '../../components/carousels/HomeCarousel';
import Header from '../../components/headers/Header';
import { homeCarouselData } from '../../utils/data/CarouselData';

export default function StartUpPage() {

    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <HomeCarousel carouselData = {homeCarouselData}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    scrollContainer: {
        paddingHorizontal: 20
    }
})
