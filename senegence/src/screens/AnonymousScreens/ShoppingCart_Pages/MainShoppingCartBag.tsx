import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Image, LogBox, StyleSheet, TouchableOpacity, View } from 'react-native'
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp'
import OutlineButton from '../../../components/buttons/OutlineButton'
import Divider from '../../../components/dividers/Divider'
import { ScrollToTopContainer } from '../../../components/ScrollToTopContainer'
import Mainshoppingbag from '../../../components/shoppingcartbags/Mainshoppingbag'
import Spacer from '../../../components/Spacer'
import Text from '../../../components/text/Text'
import TextWithUnderLine from '../../../components/text/TextWithUnderLine'
import { COLORS, images } from '../../../constants'
import { useCart } from '../../../hooks/cart/useCart'

export default function MainShoppingCartBag() {

  const [existingCartId, setExistingCartId] = useState("")  
  const {cartId} = useCart();
        
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    AsyncStorage.getItem('cartId').then(value => {
      if(value != null){
        setExistingCartId(value);
        return;
      }else {
        AsyncStorage.setItem('cartId', cartId);
      }
    })
  }, [])


    return (
        <ScrollToTopContainer>
            <View style={{flex: 1, }}>
                <View style={{paddingHorizontal: 20}}>
                    <BreadCrumbWithOneLevelUp title={"Shopping Bag"}/>
                </View>
                <Spacer mt={21}/>
                <TextWithUnderLine title={"Shopping Bag"}/>
                <Mainshoppingbag />
                <Divider />
                <Spacer mt={40}/>
                <TextWithUnderLine title={"Items You May Like"}/>
            </View>
        </ScrollToTopContainer>
    )
}

const styles = StyleSheet.create({})
