import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated } from 'react-native'
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

export default function AnimatedToast({backgroundColor, message,icon ,color=COLORS.black, onPress, iconBgColor,iconColor}: IToast) {
  const opacity= useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity,{
        toValue: 1,
        duration:500,
        useNativeDriver:true
      }),
      Animated.delay(2000),
      Animated.timing(opacity,{
        toValue: 0,
        duration:500,
        useNativeDriver:true
      })
    ]).start();
  }, []);

    return (
        <Animated.View
            style={{
              opacity,
              transform:[
                {
                  translateY: opacity.interpolate({
                    inputRange:[0,1],
                    outputRange:[-20,0]
                  })
                }
              ],
              backgroundColor: backgroundColor,
              height: opacity? 39 : 0,
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
          </Animated.View>
    )
}

const styles = StyleSheet.create({})
