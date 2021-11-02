import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

//User defined Imports
import OutlineButton from '../../../components/buttons/OutlineButton';
import Divider from '../../../components/dividers/Divider';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';

export default function OrderConfirmationScreen() {
  const _orderConfirmation = () => {
    return (
      <View style={{paddingHorizontal: 40, alignItems: 'center'}}>
        <Image
          source={images.approvedChecked}
          style={{width: 80, height: 80}}
        />
        <Text containerStyle={styles.order_complete}>
          Your Order is Completed!
        </Text>
        <Spacer mt={27} />
        <Text containerStyle={{textAlign: 'center'}}>
          Thank you for your order! Order processing can take up to 72 business
          hours before an order ships.
        </Text>
        <Spacer mt={25} />
        <OutlineButton
          title={'View Orders'}
          containerStyle={{
            width: 150,
            borderColor: COLORS.footerColor,
            backgroundColor: COLORS.footerColor,
          }}
          textStyleContainer={{
            color: COLORS.white,
          }}
          onPress={() => {}}
        />
        <Spacer mt={10} />
        <OutlineButton
          title={'Start your business'}
          onPress={() => {}}
          containerStyle={{
            width: 222,
            borderColor: COLORS.primary2,
          }}
          textStyleContainer={{
            color: COLORS.primary2,
          }}
        />
        <Spacer mt={40} />
      </View>
    );
  };

  const _orderSummary = () => {
      return  <View style={[globalStyles.shadowEffect,{backgroundColor: COLORS.white,padding: 10}]}>
            <Text containerStyle={{fontWeight: 'bold', textTransform:'uppercase'}}>Order Summary</Text>
            <Spacer mt={10} />
            
            <Text containerStyle={{textTransform:'uppercase'}}>Order Total</Text>
            <Spacer mt={20} />
            <View style={[globalStyles.row]}>
                <Text containerStyle={styles.text_order_items}> Sub Total 2) items</Text>
                <Text containerStyle={styles.text_order_items}>$100.00</Text>
            </View>
            <Spacer mt={19.5} />
            <Divider backgroundColor={COLORS.border} height={1} width={"100%"}/>
            <Spacer mt={9.5} />
            <View style={[globalStyles.row]}>
                <Text containerStyle={styles.text_order_items}> Subtotal</Text>
                <Text containerStyle={styles.text_order_items}>$100.00</Text>
            </View>
            <View style={[globalStyles.row]}>
                <Text containerStyle={styles.text_order_items}> Shipping</Text>
                <Text containerStyle={styles.text_order_items}>$10.00</Text>
            </View>
            <Spacer mt={9.5} />
            <Divider backgroundColor={COLORS.border} height={1} width={"100%"}/>
            <Spacer mt={29.5} />
            <View style={[globalStyles.row]}>
                <Text containerStyle={[globalStyles.text_avenir_medium,{textTransform:'uppercase'}]}> Order Total</Text>
                <Text containerStyle={[globalStyles.text_avenir_medium,{textTransform:'uppercase'}]}>$50.00 USD</Text>
            </View>
            <Spacer mt={29.5} />


      </View>
  }

  const _orderSummaryContainer = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.orderSummaryBackground,
          paddingVertical: 20,
          paddingHorizontal: 38,
        }}>
        <View>
          <Text
            containerStyle={[
              globalStyles.text_avenir_medium,
              {
                fontSize: SIZES.body4,
                backgroundColor: COLORS.white,
                alignSelf: 'flex-start',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                padding: 5,
                elevation: 0.4
              },
            ]}>
            Status: Pending
          </Text>
        <Spacer mt={4} />
        <Text containerStyle={[globalStyles.text_avenir_heavy,{textTransform:'uppercase'}]}>Order Number: 47631478</Text>
        <Text containerStyle={[{color:COLORS.orderSummaryBackground }]}>We’ll email you an orderconfirmation with details and tracking info.</Text>
        <Spacer mt={10} />
       {_orderSummary()}

        </View>
      </View>
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Spacer mt={40} />
        {_orderConfirmation()}
        {_orderSummaryContainer()}
        <Spacer mt={40} />
      </View>
    </ScrollToTopContainer>
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
  text_order_items:{
      color: COLORS.swatch
  }
});
