import { useRoute } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

//User defined Imports
import { Item } from 'apollo/services/apollo/queries/categories/categoryList';
import CategoryDetailsItemComponent from 'components/PLP/CategoryDetailsItemComponent';
import { ScrollToTopContainer } from 'components/ScrollToTopContainer';
import {COLORS} from '../../../constants';

export default function CategoryDetailsScreen() {
    const route = useRoute();
    const item: Item = route?.params?.categoryDetail;
    const url_path: string = route?.params?.url_path;

  return (
    <ScrollToTopContainer>
        <View style={{flex: 1}}>
            <CategoryDetailsItemComponent url_path={url_path} categoryDetailsData = {item}/>
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
