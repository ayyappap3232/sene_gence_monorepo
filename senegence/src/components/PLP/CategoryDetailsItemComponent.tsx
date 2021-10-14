import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {values} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Linking,
  LogBox,
  StyleSheet,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Picker,
  TextInput,
} from 'react-native';
import {useCategoryList} from '../../apollo/controllers/getCategoryList.Controller';
import {useSearchCategoryList} from '../../apollo/controllers/getSearchCategoryList.Controller';
import {ConfigurableOption, Item, Value} from '../../apollo/services/apollo/queries/categories/categoryList';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import {product_tag_content} from '../../helpers/product_tag';
import {useCart} from '../../hooks/cart/useCart';
import SimilarProducts from '../../screens/AnonymousScreens/PDP_Pages/SimilarProductsScreen';
import { aboutUsData } from '../../utils/data/AboutUsData';
import {
  carouselTypes,
  productCategoryShippingDetailsData,
} from '../../utils/data/CarouselData';
import {findADistributor} from '../../utils/data/links';
import {_getCurrencySymbols} from '../../utils/helpers/getSymbolBasedOnCurrency';
import CustomAccordian from '../accordians/Accordian';
import BreadCrumbWithTwoLevelUp from '../breadCrumbs/BreadCrumbWithTwoLevelUp';
import OutlineButton from '../buttons/OutlineButton';
import PaginationDots from '../carousels/PaginationDots';
import PlainCarousel from '../carousels/PlainCarousel';
import Divider from '../dividers/Divider';
import ModalPopup from '../filters/ModalPopup';
import Spacer from '../Spacer';
import ActivityIndicator from '../spinners/ActivityIndicator';
import Text from '../text/Text';
import TextWithUnderLine from '../text/TextWithUnderLine';
import CategoryItemComponent from './CategoryItemComponent';

export default function CategoryDetailsItemComponent({
  categoryDetailsData,
  url_path,
}: any) {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    media_gallery,
    description,
    hover_image,
    image,
    name,
    application_techniques,
    benefits,
    ingredients,
    configurable_options,
    variants,
    product_tag,
    price_range: {
      minimum_price: {
        regular_price: {currency, value},
        discount: {amount_off},
        final_price,
      },
    },
    second_title,
    sku,
    stock_status,
    swatch_image,
    small_image,
    thumbnail,
  } = categoryDetailsData;

  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

  const [showDropdownShadeOrFinishes, setShowDropdownShadeOrFinishes] =
    useState({attributeCode: "", toggle: false});
     //Selected Swatch Color
  const [selectedColorText, setSelectedColorText] = useState<any>();
  const [selectedShadeValue, setSelectedShadeValue] = useState<any>();
  const [selectedFinishesValue, setSelectedFinishesValue] = useState<any>();

  const initialSelectedColorLabel =
    configurable_options?.length > 0
      ? configurable_options[0]?.attribute_code == 'color' &&
        configurable_options[0]?.values[0]?.label
      : '';

      const initialSelectedColorUid = configurable_options?.length > 0
      ? configurable_options[0]?.attribute_code == 'color' &&
        configurable_options[0]?.values[0]?.uid
      : ''

  useEffect(() => {
    LogBox.ignoreAllLogs();
    configurable_options &&
      setSelectedColorText({
        label: initialSelectedColorLabel,
        option_id: initialSelectedColorUid,
      });
      setShowDropdownShadeOrFinishes({attributeCode: '', toggle: false})
      setSelectedFinishesValue("");
      setSelectedShadeValue("")
    
  }, [navigation, route]);
 

  const {one_level_url_path, pathName} = route?.params;

  const [existingCartId, setExistingCartId] = useState('');
  const {cartId} = useCart();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    AsyncStorage.getItem('cartId').then(value => {
      if (value != null) {
        setExistingCartId(value);
        return;
      } else {
        AsyncStorage.setItem('cartId', cartId);
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('recently_viewed_products').then(products => {
      const p = products ? JSON.parse(products) : [];
      p.push(categoryDetailsData);
      let jsonObject = p.map(JSON.stringify);
      let uniqueSet = new Set(jsonObject);
      let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      setRecentlyViewedProducts(uniqueArray);

      AsyncStorage.setItem('recently_viewed_products', JSON.stringify(p));
    });
  }, [route]);

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);

  const {getCategoryList, loading, error, categoryList} = useCategoryList({
    url_path: url_path,
    pageSize: pageSize,
    currentPage: currentPage,
  });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getCategoryList();
  }, [getCategoryList, currentPage, url_path]);

  const _carousel = () => {
    return (
      <PlainCarousel
        carouselData={media_gallery}
        borderWidth={1}
        borderColor="#d2d7e2"
        uri={true}
        width={334}
        height={448}
      />
    );
  };

  const _titleWithSku = () => {
    return (
      <View style={styles.titleSkuWrapper}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text containerStyle={styles.name}>{name}</Text>
          <Text># {sku}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={images.share}
            style={{width: 22, height: 22, marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const _priceWithDiscount = () => {
    return (
      <View style={styles.priceWrapper}>
        <Text
          containerStyle={[
            amount_off > 0 && {
              textDecorationLine: 'line-through',
            },
            styles.regularPrice,
          ]}>
          {_getCurrencySymbols(currency)}
          {value} {currency}
        </Text>
        {amount_off > 0 && (
          <>
            <Text containerStyle={styles.finalPrice}>
              {_getCurrencySymbols(currency)}
              {final_price.value} {currency}
            </Text>
            <View style={styles.discountWrapper}>
              <Text containerStyle={styles.discountText}>
                {`${amount_off}% Discount`}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  };

  const _findADistributorAndShop = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <OutlineButton
          textStyleContainer={{color: COLORS.primary2, fontWeight: '900'}}
          containerStyle={styles.findADistributor}
          title={'find a distributor'}
          onPress={() => Linking.openURL(findADistributor)}
        />
        {stock_status !== 'OUT_OF_STOCK' ? (
          <OutlineButton
            textStyleContainer={{color: COLORS.white}}
            containerStyle={styles.shop}
            title={'shop'}
            onPress={() =>
              Linking.openURL(
                `https://shop.senegence.com/en-us/product/${sku}/${name}`,
              )
            }
          />
        ) : (
          <Text>Out of Stock</Text>
        )}
      </View>
    );
  };

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, SIZES.width);

  const _renderProductData = (data: any) => {
    return loading ? (
      <ActivityIndicator />
    ) : (
      <>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{marginHorizontal: 10}}
          contentContainerStyle={{}}
          numColumns={1}
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item}) =>
            CategoryItemComponent(
              item,
              {marginRight: 10},
              false,
              navigation,
              url_path,
            )
          }
          data={data}
          keyExtractor={(item, index) => 'key' + index.toString()}
          ListEmptyComponent={() => (
            <View style={{}}>
              <Text>No Content Found</Text>
            </View>
          )}
        />
        {/* <PaginationDots data={categoryList?.categoryList[0]?.products?.items} position={position}/> */}
      </>
    );
  };

  const _colorSwatchInfo = () => {
    return configurable_options?.map((item: any, index: number) => {
      return item.attribute_code === 'color' ? (
        <View key={item.attribute_code} style={{marginLeft: 10, marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Text
              containerStyle={[
                globalStyles.text_avenir_medium,
                {
                  fontFamily: FONTS.AvenirRegular,
                  color: COLORS.border1,
                  fontSize: SIZES.body3,
                  textAlign: 'left',
                },
              ]}>
              {selectedColorText?.label}
            </Text>
            {product_tag && (
              <View
                style={{
                  marginLeft: 5,
                  backgroundColor: COLORS.border1,
                  paddingVertical: 2,
                  paddingHorizontal: 5,
                }}>
                <Text containerStyle={{color: COLORS.white}}>
                  {product_tag_content(product_tag)}
                </Text>
              </View>
            )}
          </View>
          <Spacer mt={10} />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}>
            {item?.values?.map((childItem: any, index: number) => {
              return (
                <TouchableOpacity
                activeOpacity={0.9}
                  key={childItem.label}
                  onPress={() => {
                    setSelectedColorText({
                      label: childItem.label,
                      option_id: childItem.uid,
                    });
                  }}>
                  <View
                    style={
                      childItem.label === selectedColorText?.label
                        ? {
                            padding: 2,
                            borderWidth: 1,
                            borderColor: COLORS.primary2,
                            marginRight: 15,
                            marginBottom: 10,
                            borderRadius: 50,
                          }
                        : {}
                    }>
                    <View
                      style={
                        childItem.label === selectedColorText?.label
                          ? {
                              backgroundColor: childItem?.swatch_data?.value,
                              width: 25,
                              height: 25,
                              borderRadius: 15,
                            }
                          : {
                              backgroundColor: childItem?.swatch_data?.value,
                              width: 30,
                              height: 30,
                              borderRadius: 15,
                              marginRight: 15,
                              marginBottom: 10,
                            }
                      }></View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null;
    });
  };

  const _shadesOrFinishes = (
    attributeCode: string,
    pickerInitialValue: string,
    setSelectedShadeOrFinishes: any,
    shadeOrFinishesValue: any,
  ) => {
    return configurable_options?.map((item: any, index: number) => {
      return item.attribute_code === attributeCode ? (
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginHorizontal: 10, marginTop: 10}}
            onPress={() =>
              setShowDropdownShadeOrFinishes({attributeCode: attributeCode, toggle: !showDropdownShadeOrFinishes.toggle})
            }>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: COLORS.border1,
                padding: 10,
                paddingRight: 30,
                height: 40,
                width: SIZES.width / 2 - 40,
              }}
              editable={false}
              placeholder={pickerInitialValue}
              placeholderTextColor={COLORS.border1}
              value={shadeOrFinishesValue?.label}
            />
            <Image
              source={images.dropdowncaret}
              style={{
                width: 12,
                height: 12,
                position: 'absolute',
                right: 10,
                top: 15,
              }}
            />
          </TouchableOpacity>

          {showDropdownShadeOrFinishes.attributeCode == attributeCode && showDropdownShadeOrFinishes.toggle && (
            <View
              style={[
                globalStyles.shadowEffect,
                {
                  flexDirection: 'column',
                  marginLeft: 10,
                  marginVertical: 2,
                  backgroundColor: COLORS.white,
                  width: SIZES.width / 2 - 40,
                },
              ]}>
              {item?.values?.map((childItem: any, i: number) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      setShowDropdownShadeOrFinishes({attributeCode: attributeCode, toggle: false});
                      setSelectedShadeOrFinishes({label: childItem.label,option_id: childItem.uid});
                    }}>
                    <Text containerStyle={{color: COLORS.border1,marginBottom: 5,paddingLeft: 10}}>
                      {childItem.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      ) : null;
    });
  };

  const _allShadesAndFinishes = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {/* All Shades dropdown */}

        {_shadesOrFinishes(
          'shade',
          'All Shades',
          setSelectedShadeValue,
          selectedShadeValue,
        )}
        {_shadesOrFinishes(
          'finishes',
          'Finishes',
          setSelectedFinishesValue,
          selectedFinishesValue,
        )}

        {/* All Finishes dropdown */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* breadCrumbs */}
      <View style={{marginHorizontal: 10, alignSelf: 'flex-start'}}>
        <BreadCrumbWithTwoLevelUp
          oneLevelTitle={pathName}
          oneLevelUrlPath={one_level_url_path}
          title={name}
        />
      </View>
      <Spacer mt={10} />
      {_carousel()}
      <Spacer mt={10} />
      <View style={{alignSelf: 'flex-start', paddingLeft: 5}}>
        {_titleWithSku()}
        {/* product weight */}
        {/* product price */}
        <Spacer mt={10} />
        {_priceWithDiscount()}
        <Spacer mt={10} />
        <Divider width={330} backgroundColor={COLORS.border} />
        {/* swatch info */}

        {_allShadesAndFinishes()}

        {/* swatch attribute label and colors */}
        {_colorSwatchInfo()}
        <Spacer mt={20} />
        {_findADistributorAndShop()}
        <Spacer mt={16} />

        <PlainCarousel
          width={30}
          height={30}
          carouselData={productCategoryShippingDetailsData}
          typeOfCarousel={carouselTypes.HorizontalTextWithIcon}
        />

        {/* //Update the collapsible panel with appropriate data */}
        <CustomAccordian
          noContentTextFound={'No Description Found!'}
          borderTopWidth={2}
          borderBottomWidth={2}
          marginHorizontal={5}
          collapsibleData={[{title: 'Description', content: description.html}]}
        />
        <CustomAccordian
          noContentTextFound={'No Application Techniques Found!'}
          borderBottomWidth={2}
          marginHorizontal={5}
          collapsibleData={[
            {title: 'Application Techniques', content: application_techniques},
          ]}
        />
        <CustomAccordian
          noContentTextFound={'No Benefits Found!'}
          borderBottomWidth={2}
          marginHorizontal={5}
          collapsibleData={[{title: 'Benifits', content: benefits}]}
        />
        <CustomAccordian
          noContentTextFound={'No Ingredients Found!'}
          borderBottomWidth={2}
          marginHorizontal={5}
          collapsibleData={[{title: 'Ingredients', content: ingredients}]}
        />
        <Spacer mb={40} />
      </View>
      <TextWithUnderLine title={'USE IT WITH'} />
      {_renderProductData(categoryList?.categoryList[0]?.products?.items)}
      <Spacer mb={20} />
      <TextWithUnderLine title={'SIMILAR PRODUCTS'} />
      {/* Get the similar products and show */}
      <SimilarProducts name={name} />
      <Spacer mb={20} />
      <TextWithUnderLine title={'RECENTLY VIEWED'} />
      {/* Get the Recently Viewed Products from the Async Storage i.e localstorage */}
      {_renderProductData(recentlyViewedProducts)}
      <Spacer mb={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
  },
  name: {
    fontSize: SIZES.h3,
    fontFamily: FONTS.BebasNeueBold,
    letterSpacing: 2,
    color: COLORS.text,
    marginRight: 10,
  },
  titleSkuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width - 50,
    marginTop: 20,
    marginLeft: 5,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  regularPrice: {
    fontSize: SIZES.body4,
    fontFamily: FONTS.AvenirBook,
    letterSpacing: 0.28,
    color: COLORS.text,
    marginRight: 5,
  },
  finalPrice: {
    fontSize: SIZES.body3,
    fontFamily: FONTS.AvenirMedium,
    letterSpacing: 0.32,
    color: COLORS.text,
    marginRight: 9,
  },
  discountWrapper: {
    width: 110,
    height: 20,
    paddingHorizontal: 7,
    backgroundColor: '#6a5f41',
  },
  discountText: {
    fontSize: SIZES.body4,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.AvenirBook,
    letterSpacing: 0.7,
  },
  findADistributor: {
    width: 206,
    borderColor: COLORS.primary2,
    height: 39,
    marginRight: 20,
  },
  shop: {
    width: 65,
    backgroundColor: COLORS.footerColor,
    borderColor: COLORS.footerColor,
    height: 39,
  },
});
