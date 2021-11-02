import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

//User defined Imports
import ImageWithTitleAndText from 'components/banners/ImageWithTitleAndText';
import {_beautyBook} from 'components/BeautyBook';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import {_buildYourBeautyBusiness} from 'components/BuildYourBeautyBusiness';
import RecentlyViewedProducts from 'components/RecentlyViewedProducts';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import {images} from '../../../constants';
import {allProducts} from 'utils/data/AllProducts';
import {ScreenNames} from 'utils/screenNames';

export default function CategoryPage({navigation}:any) {
  const _startShopping = () => {
    return (
      <View>
        <TextWithUnderLine title={'Start Shopping'} />
        <Spacer mt={9} />
        <Text containerStyle={{textAlign: 'center'}}>
          Build a career that really pays - on your terms! Join SeneGence as an
          Independent Distributor and start your own beauty business selling
          cutting-edge products – your own hours, anywhere you choose, and a
          competitive compensation plan. The potential to transform your life,
          career, family and lifestyle has arrived. Become what you inspire to
          be, a reality.
        </Text>
      </View>
    );
  };

  const handleOnPress = (item: any) => {
    navigation.navigate(ScreenNames.CategoryItem, {categoryData: item});
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithOneLevelUp title={'All Products'} />
        <Spacer mt={10} />
        <View style={{alignItems: 'center'}}>
          <ImageWithTitleAndText
            image={images.allproducts}
            title={'All Products'}
            subTitle={
              'When you join SeneGence as an Independent Distributor, you’ll enjoy these exclusive benefits'
            }
          />
          <Spacer mt={30} />
          {_startShopping()}
          <Spacer mt={20} />
          {allProducts.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                key={item.id}
                onPress={() => handleOnPress(item)}>
                <ImageWithTitleAndText image={item.image} title={item.title} />
                <Spacer mt={11} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Spacer mt={40} />
        <RecentlyViewedProducts navigation={navigation} />
        {_buildYourBeautyBusiness()}
        <Spacer mt={40} />
        {_beautyBook()}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
