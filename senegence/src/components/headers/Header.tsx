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
  LogBox,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Modal from 'react-native-modal';

//User defined Imports
import {HamburgerMenu} from '../../../assets/svgs';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Spacer from '../Spacer';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import {ScreenNames} from 'utils/screenNames';
import {globalStyles} from 'globalstyles/GlobalStyles';
import Text from '../text/Text';
import IntroBanner from '../banners/IntroBanner';
import Minishoppingbag from '../shoppingcartbags/Minishoppingbag';
import {miniShoppingCartData} from 'utils/data/MiniShoppingBagData';
import {
  useSearchProductCount,
  useSearchProductNameWithCount,
} from '../../apollo/controllers/getSearchCategoryList.Controller';
import {useCart} from '../../hooks/cart/useCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetCartItems} from 'apollo/controllers/getCart.Controller';
import { useSelector } from 'react-redux';
import { getCartItemsCount, getProductsInCart, success } from '../../redux/cartItems';
import { getCartId } from '../../redux/cart';

export default function Header({
  headerContainerStyle = {},
  showCart = true,
  isBannerShownOnInitialLoad = false,
  showPageUp = false,
}:any) {
  const navigation = useNavigation<any>();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');
  const [relatedSearchItems, setRelatedSearchItems] = useState([]);
  const [bannerShown, setBannerShown] = useState(isBannerShownOnInitialLoad);
  const [productName, setProductName] = useState('');
  const [correspondingProductItemCount, setCorrespondingProductItemCount] =
    useState<Array<any>>([]);
  const [showClearButton, setShowClearButton] = useState(false);

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  let cartItemCount = useSelector(getCartItemsCount)
  let productData = useSelector(getProductsInCart)

  // ! Start of Get Cart Items

  const cartId = useSelector(getCartId);



  // ! End of get cart items


  //handle search operation when click on search icon
  const onSearchHandler = (name = '') => {
    setSearchText(name);
    if (searchText) {
      setIsSearchOpen(false);
      navigation.navigate(ScreenNames.SearchScreen, {
        searchQuery: name || searchText,
        searchParam: '',
      });
      // setSearchText('');
      setRelatedSearchItems([]);
    } else {
      Alert.alert('Please enter keywords to search', 'e.g. lips, wallets');
    }
  };

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(!visible);

  const {
    getSearchProductNameWithCount,
    loading,
    error,
    searchProductNameWithCount,
  } = useSearchProductNameWithCount({
    name: searchText,
    pageSize: 5,
  });

  //Get Product Name along with Total Count
  useEffect(() => {
    if (searchText) {
      setShowClearButton(true);
      getSearchProductNameWithCount();
      setRelatedSearchItems(searchProductNameWithCount?.products?.items);
    } else {
      setShowClearButton(false);
    }
  }, [searchText, correspondingProductItemCount]);

  const handleSearchDebounce = (text: string) => {
    if (text === '') {
      setRelatedSearchItems([]);
      setCorrespondingProductItemCount([]);
    }
    setSearchText(text);
  };

  const {getSearchProductCount, searchProductCount} = useSearchProductCount({
    name: productName,
  });

  //Get Product Count and Corresponding Product Count Item
  useEffect(() => {
    if (productName) {
      getSearchProductCount();
      setCorrespondingProductItemCount([
        ...correspondingProductItemCount,
        {name: productName, count: searchProductCount?.products?.total_count},
      ]);
    }
  }, [productName]);

  

  const _getRelatedProductItemCount = (name: string) => {
    setProductName(name);
  };

  //Start of Clear Button Logic
  const _onSearchClear = () => {
    setSearchText('');
    setRelatedSearchItems([]);
  };

  const _clearButton = () => {
    return (
      showClearButton && (
        <TouchableOpacity
          style={[
            styles.commonSearchIcons,
            {
              right: 10,
              left: '85%',
            },
          ]}
          onPress={() => _onSearchClear()}>
          <Image source={images.close} style={{width: 16, height: 16}} />
        </TouchableOpacity>
      )
    );
  };
  //End of Clear Button Logic

  const _searchButton = () => {
    return (
      <TouchableOpacity
        style={[
          styles.commonSearchIcons,
          {
            right: 0,
            left: '92%',
          },
        ]}
        onPress={() => onSearchHandler()}>
        <Image source={images.search} style={{width: 16, height: 16}} />
      </TouchableOpacity>
    );
  };

  const _shoppingCartModal = () => {
    return (
      <Modal
        style={[globalStyles.shadowEffect, styles.modalWrapper]}
        supportedOrientations={['portrait']}
        backdropOpacity={0}
        presentationStyle="overFullScreen"
        animationOut="slideOutDown"
        isVisible={visible}
        animationIn="slideInUp">
        <View style={styles.addToCartWrapper}>
          <View style={{paddingLeft: 20, paddingTop: 5, marginBottom: 10}}>
            <TouchableOpacity onPress={() => showModal()}>
              <Image source={images.close} style={styles.modalClose} />
            </TouchableOpacity>
          </View>

          <Minishoppingbag
            miniShoppingCartData={productData}
            setVisible={setVisible}
          />
        </View>
      </Modal>
    );
  };

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
            <SafeAreaView
              style={[
                styles.header,
                headerContainerStyle,
                showPageUp && globalStyles.shadowEffect,
              ]}>
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
              <View style={[styles.headerContent, {marginRight: 5}]}>
                <TouchableOpacity onPress={() => handleSearch()}>
                  <Image
                    source={images.search}
                    style={{width: 16, height: 16, marginHorizontal: 5}}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                {
                  <TouchableOpacity
                    onPress={() => {
                      //showModal()
                      navigation.navigate(ScreenNames.MainShoppingCartBag, {
                        shoppingCartData: productData,
                        cart_Id: cartId,
                      });
                    }}>
                    <Image
                      source={images.shoppingbag}
                      style={{width: 16, height: 16, marginHorizontal: 5}}
                      resizeMode="contain"
                    />
                    <View
                      style={[
                        styles.miniShoppingCartIcon,
                        cartItemCount > 0 && {
                          backgroundColor: COLORS.footerColor,
                          width: 16,
                          height: 16,
                          borderRadius: 10,
                        },
                      ]}>
                      <Text
                        containerStyle={{
                          fontSize: SIZES.body5,
                          color: COLORS.white,
                        }}>
                        {cartItemCount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                }
                <View style={{height: 26, padding: 4, borderRadius: 100,marginLeft: 8, borderWidth: 1, borderColor: COLORS.primary3}}>
                  <Image source={images.loginUser} style={{width: 16, height: 16}}/>
                </View>
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
              {isSearchOpen && (
                <>
                  <View style={styles.clearAndSearchWrapper}>
                    <OutlineTextInput
                      value={searchText}
                      containerStyle={{
                        width: '100%',
                        borderRadius: 20,
                      }}
                      placeholder={'Search...'}
                      onChangeText={(text: string) =>
                        handleSearchDebounce(text)
                      }
                    />
                    {_clearButton()}
                    {_searchButton()}
                  </View>
                  <ScrollView keyboardShouldPersistTaps={'always'}>
                    {relatedSearchItems &&
                      relatedSearchItems.map((item: any, index: number) => {
                        _getRelatedProductItemCount(item.name);
                        return (
                          <TouchableOpacity
                            key={item + index}
                            activeOpacity={0.7}
                            style={styles.searchItemDropdownList}
                            onPress={() => {
                              onSearchHandler(item.name);
                            }}>
                            <Text>{item.name}</Text>
                            <Text>
                              {correspondingProductItemCount[index]?.count}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    {loading && (
                      <View style={{alignSelf: 'center'}}>
                        <Text>Loading...</Text>
                      </View>
                    )}
                  </ScrollView>
                </>
              )}
            </Collapsible>
            {_shoppingCartModal()}
          </>
        );
      },
    });
  }, [
    isSearchOpen,
    searchText,
    showCart,
    visible,
    bannerShown,
    showClearButton,
    navigation,
    loading,
    relatedSearchItems,
    correspondingProductItemCount,
    showPageUp,
    cartItemCount,
    productData,
    cartId,
  ]);

  return (
    <>
      <Spacer mt={10} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: Platform.OS == 'ios' ? 80 : 60,
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
  searchItemDropdownList: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearAndSearchWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 50,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  commonSearchIcons: {
    position: 'absolute',
    width: 16,
    top: 0,
    bottom: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  miniShoppingCartIcon: {
    position: 'absolute',
    bottom: 14,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalWrapper: {
    width: SIZES.width - 16,
    marginTop: 80,
    marginHorizontal: 8,
    backgroundColor: COLORS.white,
  },
  modalClose: {
    width: 24,
    height: 24,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
