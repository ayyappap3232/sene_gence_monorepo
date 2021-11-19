import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import Text from 'components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import DistributorWrapper from './DistributorWrapper';
import Spacer from 'components/Spacer';
import {globalStyles} from 'globalstyles/GlobalStyles';

export default function DTab6() {
  return (
    <>
      <DistributorWrapper
        containerStyle={{borderWidth: 0, borderColor: COLORS.white}}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          <View
            style={{
              borderWidth: 10,
              borderColor: COLORS.ligthGrey,
              padding: 20,
            }}>
            <Image
              source={images.approvedChecked}
              style={{width: 80, height: 80, alignSelf: 'center'}}
            />
            <Text containerStyle={styles.order_complete}>
              Your Order is Completed!
            </Text>
            <Spacer mt={27} />
            <Text containerStyle={{textAlign: 'center'}}>
              Thank you for your order! Order processing can take up to 72
              business hours before an order ships.
            </Text>
          </View>
          <Spacer mt={40} />
          <View>
            <Text>
              Woohoo! We’re so excited to have you join an organization that
              supports & empowers women of all walks of life to start a career
              on their own terms. Make sure to log into our Distributor Online
              Training System (DOTS) to get started on your journey to success.
            </Text>
            <Spacer mt={30} />
            <Text containerStyle={[globalStyles.text_avenir_heavy]}>
              ORDER: #1234567
            </Text>
            <Spacer mt={20} />
            <Text containerStyle={[globalStyles.text_avenir_heavy]}>
              ORDER DATE: 19/10/2021
            </Text>
            <Spacer mt={30} />
            <View
              style={[
                {
                  marginBottom: 40,
                },
              ]}>
              <View
                style={[
                  globalStyles.shadowEffect,
                  {
                    alignItems: 'center',
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    paddingVertical: 40,
                  },
                ]}>
                <Text>Welcome Intro</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primary3,
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                  }}>
                  <Image
                    source={images.rightChevron}
                    style={{width: 20, height: 20, tintColor: COLORS.white}}
                  />
                </View>
              </View>
              <Spacer mt={20} />
              <View
                style={[
                  globalStyles.shadowEffect,
                  {
                    alignItems: 'center',
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    paddingVertical: 40,
                  },
                ]}>
                <Text>Go to back office</Text>
                <Text>(Distributor Portal)</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primary3,
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                  }}>
                  <Image
                    source={images.rightChevron}
                    style={{width: 20, height: 20, tintColor: COLORS.white}}
                  />
                </View>
              </View>
              <Spacer mt={20} />
              <View
                style={[
                  globalStyles.shadowEffect,
                  {
                    alignItems: 'center',
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    paddingVertical: 40,
                  },
                ]}>
                <Text>Place First Order</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primary3,
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                  }}>
                  <Image
                    source={images.rightChevron}
                    style={{width: 20, height: 20, tintColor: COLORS.white}}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </DistributorWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  order_complete: {
    fontFamily: FONTS.BebasNeueBold,
    fontSize: SIZES.h1,
    letterSpacing: 3,
    color: COLORS.searchTitle,
    textAlign: 'center',
  },
});
