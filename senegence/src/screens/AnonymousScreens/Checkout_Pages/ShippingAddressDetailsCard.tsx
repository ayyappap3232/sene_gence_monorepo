import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//User defined Imports
import Spacer from 'components/Spacer';
import {COLORS, icons, images} from '../../../constants';
import {globalStyles} from 'globalstyles/GlobalStyles';

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
        <View style={{borderWidth: 1, borderColor: COLORS.primary3, borderRadius: 100,padding: item.isSelected ? 3 : 10}}>
        {item.isSelected ? <Image
          source={icons.Check}
          style={{width: 15, height: 15, tintColor: COLORS.primary3}}
        /> : null }
        </View>
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

  return isViewAllDetails ? _renderItem(shippingAddressDetailsArray[0], 0) : shippingAddressDetailsArray.map((item: any, index: number) => {
    return (
        _renderItem(item, index)
    );
  });
}

const styles = StyleSheet.create({});
