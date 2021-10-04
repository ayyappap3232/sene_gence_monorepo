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
  Alert,
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
import minishoppingbag from '../shoppingcartbags/Minishoppingbag';
import Minishoppingbag from '../shoppingcartbags/Minishoppingbag';
import {miniShoppingCartData} from '../../utils/data/MiniShoppingBagData';

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
    if(searchText){
      setIsSearchOpen(false);
      navigation.navigate(ScreenNames.SearchScreen, {searchQuery: searchText});
      setSearchText('');
    }else{
      Alert.alert("Please enter keywords to search","e.g. lips, wallets")
    }
  };

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(!visible);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <>
            {bannerShown && (
              <SafeAreaView>
                <IntroBanner
                  bannerShown={bannerShown}
                  setBannerShown={setBannerShown}
                />
              </SafeAreaView>
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
                {showCart && (
                  <TouchableOpacity onPress={() => showModal()}>
                    <Image
                      source={images.shoppingbag}
                      style={{width: 16, height: 16, marginHorizontal: 5}}
                      resizeMode="contain"
                    />
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 14,
                        right: -5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.footerColor,
                        width: 16,
                        height: 16,
                        borderRadius: 10,
                      }}>
                      <Text
                        containerStyle={{
                          fontSize: SIZES.body5,
                          color: COLORS.white,
                        }}>
                        {miniShoppingCartData?.length}
                      </Text>
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
            {isSearchOpen &&
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
                style={{position: 'absolute',width: 16,right: 0,top:0, bottom:10, left: "92%",alignItems:'flex-end',justifyContent:'center'}}
                onPress={() => onSearchHandler()}>
                <Image source={images.search} style={{width: 16, height: 16}}/>
              </TouchableOpacity>
            </View>
              }
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

                <Minishoppingbag miniShoppingCartData={miniShoppingCartData} />
              </View>
            </Modal>
          </>
        );
      },
    });
  }, [isSearchOpen, searchText, showCart, visible, bannerShown,navigation]);

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
