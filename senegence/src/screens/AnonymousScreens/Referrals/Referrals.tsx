import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import {useRoute} from '@react-navigation/native';
import BreadCrumbWithTwoLevelUp from 'components/breadCrumbs/BreadCrumbWithTwoLevelUp';
import Spacer from 'components/Spacer';
import ImageWithTitleAndText from 'components/banners/ImageWithTitleAndText';
import {images} from '../../../constants';
import Text from 'components/text/Text';

export default function Referrals() {
  const route = useRoute();
  const _cardWithText = (image: any, title: string) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={image} style={{width: 120, height: 80}} />
        <Spacer mt={20} />
        <Text containerStyle={{textAlign: 'center'}}>{title}</Text>
        <Spacer mt={20} />
      </View>
    );
  };
  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithTwoLevelUp
          isRoute={true}
          oneLevelTitle={route.params?.title}
          oneLevelUrlPath={route.params?.screenName}
          title={'Referrals'}
        />
        <Spacer mt={10} />
        <ImageWithTitleAndText
          image={images.beautyGirls}
          title={'Refer a friend'}
          subTitle={
            'Shopping is better with friends! Share your love for SeneGence products and earn even more Kiss Kredits to save on future purchases!'
          }
        />
        <Spacer mt={30} />
        {_cardWithText(
          images.skincare,
          'Share your unique referral link with friends, family, and the beauty lovers in your life!',
        )}
        {_cardWithText(
          images.switzerland,
          'They place $125 CAD order in their first month',
        )}
        {_cardWithText(images.truck, 'You earn 19 Kiss Kredits')}
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
