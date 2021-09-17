import { useRoute } from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FAB from 'react-native-fab';
import {PageUp} from '../../../../assets/svgs';
import { Item } from '../../../apollo/services/apollo/queries/categories/categoryList';
import Footer from '../../../components/footers/Footer';
import Header from '../../../components/headers/Header';
import CategoryDetailsItemComponent from '../../../components/PLP/CategoryDetailsItemComponent';
import { ScrollToTopContainer } from '../../../components/ScrollToTopContainer';
import {COLORS} from '../../../constants';

export default function CategoryDetailsScreen() {
    const route = useRoute();
    const item: Item = route?.params?.categoryDetail;
    console.log('routes in categoryDetails Screen',route?.params?.url_path)
    const url_path: string = route?.params?.url_path;


  return (
    <ScrollToTopContainer>
        <View style={{flex: 1}}>
            <CategoryDetailsItemComponent url_path={url_path} categoryDetailsData = {item} />
        </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
