import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import DistributorEnroll_Tabs from './DistributorEnroll_Tabs';
import Spacer from 'components/Spacer';
import {COLORS, SIZES} from '../../../constants';

export default function DistributorEnrollment_Page() {
  return (
    <ScrollToTopContainer>
      <View style={{paddingHorizontal: 20, flexGrow: 1}}>
        <BreadCrumbWithOneLevelUp title="Distributor Enrollment" />
        <Spacer mt={40} />
        <View style={{ height: SIZES.height}}>
          <DistributorEnroll_Tabs />
        </View>
        <Spacer mt={40} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
