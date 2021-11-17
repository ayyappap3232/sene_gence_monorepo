import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollToTopContainer} from 'components/ScrollToTopContainer';
import {COLORS, images, SIZES} from '../../../constants';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import OrderHistoryTable from 'components/tables/OrderHistoryTable';
import BreadCrumbWithOneLevelUp from 'components/breadCrumbs/BreadCrumbWithOneLevelUp';
import Divider from 'components/dividers/Divider';

export default function UserOrders() {
  const _orderHistory = () => {
    return (
      <>
        <Spacer mt={10} />
        <BreadCrumbWithOneLevelUp title={'User Profile'} />
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
        <Spacer mt={20} />
        <Text containerStyle={{fontSize: SIZES.h1 + 2}}>Order History</Text>
        <OrderHistoryTable />
        <Spacer mt={20} />
      </>
    );
  };
  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>{_orderHistory()}</View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({});
