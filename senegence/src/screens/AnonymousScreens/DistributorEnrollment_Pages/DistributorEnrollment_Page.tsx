import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp'
import { ScrollToTopContainer } from 'components/ScrollToTopContainer'
import DistributorEnroll_Tabs from './DistributorEnroll_Tabs'
import Spacer from 'components/Spacer'
import { COLORS } from '../../../constants'

export default function DistributorEnrollment_Page() {
    return (
        <ScrollToTopContainer>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
                <BreadCrumbWithOneLevelUp title="Distributor Enrollment" />
                <Spacer mt={40} />
                <DistributorEnroll_Tabs />
                <Spacer mt={40} />

            </View>
        </ScrollToTopContainer>
    )
}

const styles = StyleSheet.create({})
