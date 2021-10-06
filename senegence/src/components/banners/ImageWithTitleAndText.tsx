import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { globalStyles } from '../../globalstyles/GlobalStyles'
import Text from '../text/Text'

export default function ImageWithTitleAndText({image, title=null, subTitle=null, onPress={}}: any) {
    return (
       <ImageBackground source={image} style={{width: 334, height: 278,justifyContent:'center',alignItems:'center'}}>
           <View>
               {title && <Text containerStyle={[globalStyles.bannerTitle]} >{title}</Text> }
               {subTitle && <Text containerStyle={[globalStyles.bannerBody]}>{subTitle}</Text>}
           </View>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({})
