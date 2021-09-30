import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import {
  AppLogo,
  Close,
  Globe,
  HamburgerMenu,
  Search,
} from '../../../assets/svgs';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Spacer from '../Spacer';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import Collapsible from 'react-native-collapsible';
import {ScreenNames} from '../../utils/screenNames';
import Modal from 'react-native-modal';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import OutlineButton from '../buttons/OutlineButton';
import Text from '../text/Text';
import Divider from '../dividers/Divider';
import IntroBanner from '../banners/IntroBanner';

export default function Header({
  headerContainerStyle = {},
  showCart = false,
  isBannerShownOnInitialLoad = false,
}) {
  const navigation = useNavigation<any>();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');
  const [bannerShown, setBannerShown] = useState(isBannerShownOnInitialLoad);

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const onSearchHandler = () => {
    setIsSearchOpen(false);
    navigation.navigate(ScreenNames.SearchScreen, {searchQuery: searchText});
    setSearchText('');
  };

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(!visible);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <>
            {bannerShown && (
              <IntroBanner bannerShown={bannerShown} setBannerShown={setBannerShown}/>
            )}
            <SafeAreaView style={[styles.header, headerContainerStyle]}>
              <View style={styles.headerContent}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.openDrawer()}>
                  <HamburgerMenu
                    width={23.7}
                    height={18.6}
                    style={styles.hamburgerMenu}
                  />
                </TouchableOpacity>
                <Image
                  source={images.logo}
                  resizeMode="contain"
                  style={{width: 126.1, height: 28.8}}
                />
              </View>
              <View
                style={[styles.headerContent, showCart && {marginRight: 5}]}>
                <TouchableOpacity onPress={() => handleSearch()}>
                  <Image
                    source={images.search}
                    style={{width: 16, height: 16, marginHorizontal: 5}}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                {/* Replace with cart icon and count */}
                {showCart && (
                  <TouchableOpacity onPress={() => showModal()}>
                    <Image
                      source={images.shoppingbag}
                      style={{width: 16, height: 16, marginHorizontal: 5}}
                      resizeMode="contain"
                    />
                    <View style={{position:'absolute',bottom: 14,right:-5,justifyContent:'center',alignItems:'center',backgroundColor: COLORS.footerColor, width: 16, height: 16,borderRadius: 10}}>
                      <Text containerStyle={{fontSize: SIZES.body5,color: COLORS.white}}>2</Text>
                    </View>
                  </TouchableOpacity>
                )}
                <View
                  style={[styles.globeWrapper, !showCart && {marginLeft: 10}]}>
                  <Image
                    source={images.globe}
                    style={{width: 16, height: 16, marginRight: 3}}
                    resizeMode="contain"
                  />
                  <Text style={styles.rightText}>USA</Text>
                </View>
              </View>
            </SafeAreaView>
            <Collapsible collapsed={!isSearchOpen}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  height: 50,
                  marginTop: 10,
                  justifyContent: 'space-between',
                }}>
                <OutlineTextInput
                  value={searchText}
                  containerStyle={{
                    width: '100%',
                    borderRadius: 20,
                  }}
                  placeholder={'Search...'}
                  onChangeText={(text: string) => setSearchText(text)}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 10}}
                  onPress={() => onSearchHandler()}>
                  <Search width={30} height={30} />
                </TouchableOpacity>
              </View>
            </Collapsible>
            <Modal
              style={[
                globalStyles.shadowEffect,
                {
                  width: SIZES.width - 16,
                  marginTop: 80,
                  marginHorizontal: 8,
                  backgroundColor: COLORS.white,
                },
              ]}
              supportedOrientations={['portrait']}
              backdropOpacity={0}
              presentationStyle="overFullScreen"
              animationOut="slideOutDown"
              isVisible={visible}
              animationIn="slideInUp">
              <View style={styles.addToCartWrapper}>
                <View
                  style={{paddingLeft: 20, paddingTop: 5, marginBottom: 10}}>
                  <TouchableOpacity onPress={() => showModal()}>
                    <Image
                      source={images.close}
                      style={{
                        width: 24,
                        height: 24,
                        marginRight: 10,
                        alignSelf: 'flex-end',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <ScrollView
                  contentContainerStyle={{flex: 1, marginHorizontal: 20}}>
                  <Text
                    containerStyle={[
                      globalStyles.text,
                      {lineHeight: 50, textTransform: 'uppercase'},
                    ]}>
                    2 Items In Cart
                  </Text>
                </ScrollView>
                <Divider
                  backgroundColor={COLORS.border}
                  width={SIZES.width - 40}
                />
                <View style={{}}>
                  <View
                    style={{
                      width: 238,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignSelf: 'center',
                    }}>
                    <Text
                      containerStyle={[
                        globalStyles.text_avenir_medium,
                        {textTransform: 'uppercase'},
                      ]}>
                      Sub Total
                    </Text>
                    <Text containerStyle={[globalStyles.text_avenir_medium]}>
                      $50 USD
                    </Text>
                  </View>
                  <Spacer mt={20} />

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
                </View>
                <Spacer mt={20} />
              </View>
            </Modal>
          </>
        );
      },
    });
  }, [isSearchOpen, searchText, showCart, visible, bannerShown]);

  return (
    <>
      <Spacer mt={10} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: Platform.OS == 'ios' ? 70 : 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  hamburgerMenu: {
    marginRight: 20,
  },
  globeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rightText: {
    fontFamily: FONTS.AvenirMedium,
    letterSpacing: 1.6,
    fontSize: SIZES.body3,
    marginLeft: -5,
  },
  addToCartWrapper: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginTop: 10,
  },
});
