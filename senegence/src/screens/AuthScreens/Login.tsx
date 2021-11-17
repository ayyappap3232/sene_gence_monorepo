import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {COLORS, images, SIZES} from '../../constants';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import Divider from 'components/dividers/Divider';
import OrderHistoryTable from 'components/tables/OrderHistoryTable';

export default function Login() {
  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <BreadCrumbWithOneLevelUp title={'User Login'} />
        <Spacer mt={30} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image source={images.loginUser} style={{width: 89, height: 91}} />
          {/* Todo: Need to change it with dynamic login user */}
          <View>
            <Text>Jalynn Schroeder</Text>
            <Text>Email: testmrcn@hotmail.com</Text>
            <Text>Distributor: Jane Smith</Text>
            <Text>Phone: +4562342334</Text>
          </View>
        </View>
        <Spacer mt={20} />
        <Divider
          width={SIZES.width - 40}
          height={1}
          backgroundColor={COLORS.border}
        />
        <Spacer mt={30} />
        <Text containerStyle={{fontSize: SIZES.h1 + 2}}>Order History</Text>
        <Spacer mt={10} />
        <OrderHistoryTable />
        <Spacer mt={30} />
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
