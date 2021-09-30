import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp'
import OutlineButton from '../../../components/buttons/OutlineButton'
import { ScrollToTopContainer } from '../../../components/ScrollToTopContainer'
import Spacer from '../../../components/Spacer'
import Text from '../../../components/text/Text'
import TextWithUnderLine from '../../../components/text/TextWithUnderLine'
import { COLORS, images } from '../../../constants'
import { useCart } from '../../../hooks/cart/useCart'

export default function MainShoppingCartBag() {

  const [existingCartId, setExistingCartId] = useState("")  
  const {cartId} = useCart();
        
  useEffect(() => {
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
            <View style={{flex: 1, paddingHorizontal: 22}}>
                <View>
                    <BreadCrumbWithOneLevelUp title={"Shopping Bag"}/>
                </View>
                <Spacer mt={21}/>
                <TextWithUnderLine title={"Shopping Bag"}/>
                <Spacer mt={29}/>
                <Text containerStyle={{textAlign:'center'}}>Cart is Empty</Text>
                <Spacer mt={40}/>
                <OutlineButton
                    textStyleContainer={{color: COLORS.white}}
                    containerStyle={{
                      backgroundColor: COLORS.footerColor,
                      borderColor: COLORS.footerColor,
                      alignSelf: 'center',
                      width: 238,
                    }}
                    title={'Proceed To Checkout'}
                    onPress={() => {}}
                  />
                <Spacer mt={40}/>
                <TextWithUnderLine title={"Items You May Like"}/>

            </View>
        </ScrollToTopContainer>
    )
}

const styles = StyleSheet.create({})
