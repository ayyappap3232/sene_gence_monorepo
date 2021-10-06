import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageWithTitleAndText from '../../../components/banners/ImageWithTitleAndText';
import {_beautyBook} from '../../../components/BeautyBook';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import {_buildYourBeautyBusiness} from '../../../components/BuildYourBeautyBusiness';
import RecentlyViewedProducts from '../../../components/RecentlyViewedProducts';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import TextWithUnderLine from '../../../components/text/TextWithUnderLine';
import {images} from '../../../constants';
import {allProducts} from '../../../utils/data/AllProducts';

export default function CategoryPage() {
  const navigation = useNavigation<any>();
  const _startShopping = () => {
    return (
      <View>
        <TextWithUnderLine title={'Start Shopping'} />
        <Spacer mt={9} />
        <Text containerStyle={{textAlign: 'center'}}>
          SeneGence® takes unique products formulations to a new level with
          their revolutionary lines of skin care and cosmetics, based on the
          SenePlex® anti-aging complex of ingredients and the latest in
          technologies.
        </Text>
      </View>
    );
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
              <React.Fragment key={item.id}>
                <ImageWithTitleAndText image={item.image} title={item.title} />
                <Spacer mt={11} />
              </React.Fragment>
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
