import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import Text from '../text/Text'

export default function IntroBanner({bannerShown, setBannerShown}:any) {
    return (
        <Collapsible collapsed={!bannerShown}>
                <View
                  style={{
                    backgroundColor: COLORS.footerColor,
                    height: 39,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1, marginLeft: 10,marginRight: 10}}>
                    <Text containerStyle={{color: COLORS.white}} numberOfLines={1}>
                    Fooops!® SenseCosmetics® Dual Phase Color Remover, Remove long-lasting SenseCosmetics® quickly and easily with this unique, easy-to-use formula that activates when shaken.
                    </Text>
                  </View>
                  <View>
                    <Text
                      containerStyle={[
                        {
                          fontFamily: FONTS.AvenirBlack,
                          letterSpacing: 1.2,
                          lineHeight: 24,
                          fontSize: SIZES.body5,
                          textTransform: 'uppercase',
                          color: COLORS.white,
                          fontWeight: 'bold',
                        },
                      ]}>
                      Shop Now &gt;
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setBannerShown(false)}>
                    <Image
                      source={images.close}
                      style={{
                        width: 24,
                        height: 24,
                        tintColor: COLORS.white,
                        marginRight: 5,
                      }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              </Collapsible>
    )
}

const styles = StyleSheet.create({})
