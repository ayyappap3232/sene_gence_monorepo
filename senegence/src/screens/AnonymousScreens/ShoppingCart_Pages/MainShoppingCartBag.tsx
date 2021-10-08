import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, LogBox, StyleSheet, TouchableOpacity, View } from 'react-native'
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp'
import OutlineButton from '../../../components/buttons/OutlineButton'
import Divider from '../../../components/dividers/Divider'
import RedeemSection from '../../../components/redeem/RedeemSection'
import { ScrollToTopContainer } from '../../../components/ScrollToTopContainer'
import Mainshoppingbag from '../../../components/shoppingcartbags/Mainshoppingbag'
import Spacer from '../../../components/Spacer'
import Text from '../../../components/text/Text'
import TextWithUnderLine from '../../../components/text/TextWithUnderLine'
import { COLORS, images, SIZES } from '../../../constants'
import { useCart } from '../../../hooks/cart/useCart'

export default function MainShoppingCartBag({navigation}) {
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
        <ScrollToTopContainer showCart={true}>
            <View style={{flex: 1, }}>
                <View style={{paddingHorizontal: 20}}>
                    <BreadCrumbWithOneLevelUp title={"Shopping Bag"}/>
                </View>
                <Spacer mt={21}/>
                <TextWithUnderLine title={"Shopping Bag"}/>
                <Mainshoppingbag navigation={navigation}/>
                <Spacer mt={21}/>
                <Divider backgroundColor={COLORS.border} width={SIZES.width-40}  height={1}/>
                <Spacer mt={40}/>
                <TextWithUnderLine title={"REDEEM YOUR REWARDs"}/>
                <RedeemSection />
                <Spacer mt={40}/>
                <TextWithUnderLine title={"Items You May Like"}/>
            </View>
        </ScrollToTopContainer>
    )
}

const styles = StyleSheet.create({})
