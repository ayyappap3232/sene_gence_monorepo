import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { globalStyles } from '../../globalstyles/GlobalStyles'
import CircularBackgroundWithIcon from '../buttons/CloseButton'
import Text from '../text/Text'

interface IToast {
    backgroundColor: string;
    message: string;
    color?: string;
    onPress?: any;
    iconBgColor?: string;
    iconColor?: string;
    icon?: any;
}

export default function Toast({backgroundColor, message,icon ,color=COLORS.black, onPress, iconBgColor,iconColor}: IToast) {
    return (
        <View
            style={{
              backgroundColor: backgroundColor,
              height: 39,
              alignItems: 'center',
              flexDirection:'row'
            }}>
            {icon && <CircularBackgroundWithIcon icon={icon} onPress={onPress} containerStyle={{backgroundColor: iconBgColor, marginLeft: 10,width: 20,height: 20}} containerIconStyle={{tintColor: iconColor}}/> }   
            <Text
              containerStyle={[
                globalStyles.text_avenir_medium,
                {textAlign: 'left', paddingLeft: 20,fontSize: SIZES.body4, color: color},
              ]}>
              {message}
            </Text>
          </View>
    )
}

const styles = StyleSheet.create({})
