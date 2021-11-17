import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'
import {Switch as RNSwitch} from 'react-native-switch';

export default function Switch({value, onValueChange}: any) {
    return (
        <RNSwitch
              value={value}
              onValueChange={onValueChange}
              disabled={false}
              activeText={'NO'}
              inActiveText={'YES'}
              backgroundActive={COLORS.border}
              backgroundInactive={COLORS.primary3}
              circleSize={30}
              barHeight={40}
              switchLeftPx={5}
              switchRightPx={5}
              switchWidthMultiplier={value ? 2.8 : 2.8}
              circleBorderWidth={0}
              circleActiveColor={COLORS.white}
              circleInActiveColor={COLORS.white}
            />
    )
}

const styles = StyleSheet.create({})
