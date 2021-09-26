import React from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants';

export default function PaginationDots({data, position}) {
    return (
        <View
          style={{
            flexDirection:'row',justifyContent:'center'
          }}>
          {data?.map(
            (_: any, i: number) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.1, 1, 0.1],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    height: 14,
                    width: 14,
                    backgroundColor: COLORS.dotBackground,
                    borderColor: COLORS.border,
                    borderWidth: 2,
                    margin: 8,
                    borderRadius: 10,
                  }}
                />
              );
            },
          )}
        </View>
    )
}

const styles = StyleSheet.create({})
