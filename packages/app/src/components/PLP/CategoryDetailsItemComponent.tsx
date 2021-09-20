import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Linking,
  LogBox,
  StyleSheet,
  View,
  Animated,
  Image,
} from 'react-native';
import {useCategoryList} from '../../apollo/controllers/getCategoryList.Controller';
import {Item} from '../../apollo/services/apollo/queries/categories/categoryList';
import {COLORS, FONTS, SIZES} from '../../constants';
import {
  carouselTypes,
  productCategoryShippingDetailsData,
} from '../../utils/data/CarouselData';
import {findADistributor} from '../../utils/data/links';
import {_getCurrencySymbols} from '../../utils/helpers/getSymbolBasedOnCurrency';
import CustomAccordian from '../accordians/Accordian';
import OutlineButton from '../buttons/OutlineButton';
import PaginationDots from '../carousels/PaginationDots';
import PlainCarousel from '../carousels/PlainCarousel';
import Divider from '../dividers/Divider';
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

  const {
    media_gallery,
    description,
    hover_image,
    image,
    name,
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
        <Text containerStyle={styles.name}>{name}</Text>
        <Text># {sku}</Text>
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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <OutlineButton
          textStyleContainer={{color: COLORS.primary2, fontWeight: '900'}}
          containerStyle={styles.findADistributor}
          title={'find a distributor'}
          onPress={() => Linking.openURL(findADistributor)}
        />
        <OutlineButton
          textStyleContainer={{color: COLORS.white}}
          containerStyle={styles.shop}
          title={'shop'}
          onPress={() => Linking.openURL(findADistributor)}
        />
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
          onScroll = {Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],{ useNativeDriver: false }
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

  const _similarProducts = () => {
    return;
  }

  return (
    <View style={styles.container}>
      {/* breadcrumbs */}
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
        {/* shades dropdown */}
        {/* swatch attribute label and colors */}
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
            {title: 'Application Techniques', content: description.html},
          ]}
        />
        <CustomAccordian
          noContentTextFound={'No Benefits Found!'}
          borderBottomWidth={2}
          marginHorizontal={5}
          collapsibleData={[{title: 'Benifits', content: description.html}]}
        />
        <CustomAccordian
          noContentTextFound={'No Ingredients Found!'}
          borderBottomWidth={2}
          marginHorizontal={5}
          collapsibleData={[{title: 'Ingredients', content: description.html}]}
        />
        <Spacer mb={40} />        
      </View>
      <TextWithUnderLine title={"USE IT WITH"}/>
      {_renderProductData(categoryList?.categoryList[0]?.products?.items)}
      <Spacer mb={40} />
      <TextWithUnderLine title={"SIMILAR PRODUCTS"}/>
      {/* Get the similar products and show */}
      {_renderProductData(categoryList?.categoryList[0]?.products?.items)}
      <Spacer mb={40} />
      <TextWithUnderLine title={"RECENTLY VIEWED"}/>
      {/* Get the Recently Viewed Products from the Async Storage i.e localstorage */}
      {_renderProductData(categoryList?.categoryList[0]?.products?.items)}
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
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
