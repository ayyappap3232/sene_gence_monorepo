import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Spacer from '../../../components/Spacer';
import {COLORS, images} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';

export default function ShippingAddressDetailsCard({isViewAllDetails, shippingAddressDetailsArray}: any) {
  

  const _renderItem = (item: any,index: number) => {
      return <View
      key={index}
      style={{
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <Image
          source={images.dot}
          style={{width: 15, height: 15, tintColor: COLORS.primary3}}
        />
        <Spacer mr={10} />
        <View style={{marginTop: -4}}>
          <Text>{item.name}</Text>
          <Text>{item.address1}</Text>
          <Text>{item.address2}</Text>
          <Text>{item.country}</Text>
          <Text>{item.state}</Text>
          <Text>{item.city}</Text>
          <Text>{item.zipcode}</Text>
          <Text>{item.phoneMobile}</Text>
          <Text>{item.phoneHome}</Text>
        </View>
      </View>
      <View style={[globalStyles.row, {alignItems: 'flex-start'}]}>
        <Text>Edit</Text>
        <Spacer mr={10} />
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Image source={images.editIcon} style={{width: 15, height: 15}} />
        </TouchableOpacity>
      </View>
    </View>
  }

  return isViewAllDetails ? _renderItem(shippingAddressDetailsArray[0], 0) : shippingAddressDetailsArray.map((item, index) => {
    return (
        _renderItem(item, index)
    );
  });
}

const styles = StyleSheet.create({});
