import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp'
import { ScrollToTopContainer } from '../../../components/ScrollToTopContainer'
import Spacer from '../../../components/Spacer'
import { images } from '../../../constants'

export default function StartABusiness() {

    const _headerImageView = () => {
        return <ImageBackground source={images.startabusiness} style={{width: 334, height: 388}}>

        </ImageBackground>
    }

    return (
        <ScrollToTopContainer>
            <View style={{flex: 1,paddingHorizontal: 22}}>
                <BreadCrumbWithOneLevelUp title={"Distributor"}/>
                <Spacer mt={10}/>
                {_headerImageView()}
            </View>
        </ScrollToTopContainer>
    )
}

const styles = StyleSheet.create({})
