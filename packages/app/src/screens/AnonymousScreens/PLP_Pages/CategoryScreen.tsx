import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {LogBox} from 'react-native';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FAB from 'react-native-fab';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PageUp} from '../../../../assets/svgs';
import {useCategoryList} from '../../../apollo/controllers/getCategoryList.Controller';
import {Item} from '../../../apollo/services/apollo/queries/categories/categoryList';
import OutlineButton from '../../../components/buttons/OutlineButton';
import Footer from '../../../components/footers/Footer';
import Header from '../../../components/headers/Header';
import Spacer from '../../../components/Spacer';
import ActivityIndicator from '../../../components/spinners/ActivityIndicator';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {_getCurrencySymbols} from '../../../utils/helpers/getSymbolBasedOnCurrency';

export default function CategoryScreen() {
  const navigation = useNavigation();

  //ScrollTo Top Functionality
  const scrollRef = useRef<ScrollView>();
  const [showPageUp, setShowPageUp] = useState(false);

  const route = useRoute();
  const {name, url_path} = route?.params?.categoryData;
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);

  const [gridView, setgridView] = useState(false);

  const {getCategoryList, loading, error, categoryList} = useCategoryList({
    url_path: url_path,
    pageSize: pageSize,
    currentPage: currentPage,
  });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getCategoryList();
  }, [getCategoryList, currentPage]);

  if (loading) {
    return <ActivityIndicator />;
  }

  const _handleStockStatus = (status: string) => {
    switch (status) {
      case 'IN_STOCK':
        return 'VIEW PRODUCT';
      case 'OUT_OF_STOCK':
        return 'OUT OF STOCK';
      default:
        return 'VIEW PRODUCT';
    }
  };

  const _renderCategoryListItems = (item: Item, containerStyle = {}) => {
    const {
      price_range: {
        minimum_price: {
          regular_price: {currency, value},
          discount: {amount_off},
          final_price,
        },
      },
      name,
      image: {url},
      second_title,
      stock_status,
    } = item;

    const _priceContent = () => {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            containerStyle={[
              {
                fontFamily: FONTS.AvenirMedium,
                marginRight: 5,
              },
              amount_off > 0 && {
                textDecorationLine: 'line-through',
              },
              styles.commonTextStyle,
            ]}>
            {_getCurrencySymbols(currency)}
            {value} {currency}
          </Text>
          {amount_off > 0 && (
            <Text
              containerStyle={[
                styles.commonTextStyle,
                {
                  fontFamily: FONTS.AvenirMedium,
                  color: COLORS.red,
                },
              ]}>
              {_getCurrencySymbols(currency)}
              {final_price?.value} {currency}
            </Text>
          )}
        </View>
      );
    };

    const _titleAndSecondTitle = () => {
      return (
        <View style={{marginLeft: 6.3}}>
          <Text
            containerStyle={[
              {
                fontFamily: FONTS.AvenirBold,
              },
              styles.commonTextStyle,
              {width: SIZES.width/2 - 40}
            ]}>
            {name}
          </Text>
          <Text
            containerStyle={[
              {
                fontFamily: FONTS.AvenirBook,
              },
              styles.commonTextStyle,
              {width: SIZES.width/2 - 40}
            ]}>
            {second_title}
          </Text>
        </View>
      );
    };

    const _renderImageContent = () => {
      return (
        <ImageBackground
          source={images.rectangleGrayBg}
          style={styles.imageBackground}>
          <Image source={{uri: url}} style={styles.image} />
          <OutlineButton
            textStyleContainer={styles.outlineButtonText}
            containerStyle={styles.outlineButtonContainer}
            title={_handleStockStatus(stock_status)}
            onPress={() => {}}
          />
        </ImageBackground>
      );
    };

    const _renderColorsContent = () => {
      return (
        <Text
          containerStyle={[
            styles.commonTextStyle,
            {
              fontFamily: FONTS.AvenirBook,
              color: COLORS.swatch,
            },
          ]}>
          16 more colors
        </Text>
      );
    };

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        key={item.name}
        style={[
          styles.itemContainer,
          containerStyle,
          {flexDirection: gridView ? 'row' : 'column'},
        ]}>
        <View>{_renderImageContent()}</View>
        <Spacer mb={10.1} />
        <View>
          {_titleAndSecondTitle()}
          <Spacer mt={10} />
          <View style={{marginLeft: 6.3}}>
            {_priceContent()}
            {_renderColorsContent()}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const total_count = categoryList?.categoryList[0]?.products?.total_count;

  const paginationLength = Math.round(total_count / 10);

  const _pagination = () => {
    return (
      <TouchableOpacity
        onPress={() => setCurrentPage(currentPage - 1)}
        style={styles.paginationContainer}>
        {paginationLength > 1 && currentPage != 1 && (
          <View style={styles.paginationChervonWrapper}>
            <Image
              source={images.leftChevron}
              style={styles.chervon}
              resizeMode="contain"
            />
          </View>
        )}
        {paginationLength > 0 &&
          [...new Array(paginationLength)].map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setCurrentPage(index + 1), setCurrentIndex(index + 1);
                }}
                style={{}}>
                <Text
                  containerStyle={[
                    {
                      fontFamily:
                        currentPage == index + 1
                          ? FONTS.AvenirBlack
                          : FONTS.AvenirMedium,
                      fontWeight: currentPage == index + 1 ? '900' : '500',
                    },
                    styles.paginationNumbers,
                  ]}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            );
          })}
        {paginationLength > 1 && currentPage != paginationLength && (
          <TouchableOpacity
            onPress={() => setCurrentPage(currentPage + 1)}
            style={styles.paginationChervonWrapper}>
            <Image
              source={images.rightChevron}
              style={styles.chervon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const _beautyBook = () => {
    return (
      <ImageBackground
        source={images.beautyBg}
        style={{width: 332, height: 421, marginLeft: 5, alignSelf: 'center'}}>
        <Image
          source={images.beautyGirls}
          style={{width: 308, height: 233, margin: 12}}
        />
        <Spacer mt={10} />
        <View style={{marginHorizontal: 7}}>
          <Text
            containerStyle={{
              textAlign: 'center',
              fontSize: SIZES.h3,
              fontFamily: FONTS.BebasNeueBold,
              letterSpacing: 2,
              color: COLORS.text,
            }}>
            Beauty Book
          </Text>
          <Spacer mt={4} />
          <Text
            containerStyle={{
              textAlign: 'center',
              fontSize: SIZES.body4,
              fontFamily: FONTS.AvenirBook,
              letterSpacing: 0.7,
              color: COLORS.text,
            }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </Text>
          <Spacer mt={10} />
          <Image
            source={images.viewnow}
            style={{width: 151.9, height: 39, alignSelf: 'center'}}
          />
        </View>
      </ImageBackground>
    );
  };

  const _recentlyViewedProducts = () => {
    return (
      <View>
        <Text
          containerStyle={{
            fontSize: SIZES.h1,
            fontFamily: FONTS.BebasNeueRegular,
            letterSpacing: 1.5,
            color: COLORS.black,
            textAlign: 'center',
          }}>
          Recently Viewed
        </Text>
      </View>
    );
  };

  const _goToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const _filters = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <View style={styles.filterWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={images.filter1}
              style={{width: 12.6, height: 12.6, marginRight: 4}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text containerStyle={styles.filterText}>Shop By</Text>
        </View>
        <View style={styles.filterWrapper}>
          <TouchableOpacity onPress={() => setgridView(false)}>
            <Image
              source={images.filter1}
              style={{width: 12.6, height: 12.6, marginLeft: 4}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setgridView(true)}>
            <Image
              source={images.filter2}
              style={{width: 16, height: 16, marginHorizontal: 4}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text containerStyle={styles.filterText}>Sort by - Featured</Text>
          <Image
            source={images.filter3Sort}
            style={{width: 12.6, height: 12.6, marginLeft: 4}}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        onScroll={e => {
          setShowPageUp(e.nativeEvent.contentOffset.y > 100 ? true : false);
        }}
        ref={scrollRef}
        style={{backgroundColor: COLORS.white}}
        contentContainerStyle={{flexGrow: 1}}>
        {_filters()}
          <FlatList
            scrollEnabled={false}
            // columnWrapperStyle={{alignItems: 'flex-start'}}
            contentContainerStyle={{paddingHorizontal: 20}}
            numColumns={gridView ? 1 : 2}
            key={gridView ? 1 : 0}
            renderItem={({item}) => _renderCategoryListItems(item)}
            data={categoryList?.categoryList[0]?.products?.items}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <Text>No Content Found</Text>
              </View>
            )}
          />
          
        <Spacer mt={20} />
        {_pagination()}
        <Spacer mt={40} />
        {_beautyBook()}
        <Spacer mt={40} />
        {_recentlyViewedProducts()}
        <Spacer mt={26} />

        {/* //Note Need to replace the data with recently Viewed Products */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{marginHorizontal: 10}}
          numColumns={1}
          renderItem={({item}) =>
            _renderCategoryListItems(item, {marginRight: 10})
          }
          data={categoryList?.categoryList[0]?.products?.items}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Text>No Content Found</Text>
            </View>
          )}
        />
        <Spacer mt={54.1} />
        <Footer
          containerStyle={{
            paddingHorizontal: 27,
            paddingTop: 28.6,
            backgroundColor: COLORS.footerColor,
          }}
        />
      </ScrollView>
      <FAB
        onClickAction={() => {
          _goToTop();
        }}
        visible={showPageUp}
        iconTextComponent={<PageUp style={{elevation: 2}} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  filterWrapper: {flexDirection: 'row', alignItems: 'center'},
  filterText: {
    fontFamily: FONTS.AvenirBook,
    fontSize: SIZES.body4,
    letterSpacing: 0.7,
    color: COLORS.black,
    textTransform: 'uppercase',
  },
  itemContainer: {
    flex: 0.5,
    marginBottom: 10,
  },
  imageBackground: {
    width: 162,
    height: 271,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 109,
    height: 182,
    marginTop: 31.9,
    marginRight: 23.6,
    marginLeft: 25.1,
  },
  outlineButtonText: {
    color: COLORS.white,
    fontSize: SIZES.body4,
    letterSpacing: 0.28,
    lineHeight: 26,
    fontFamily: FONTS.AvenirHeavy,
  },
  outlineButtonContainer: {
    width: 162,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.black,
  },
  commonTextStyle: {
    lineHeight: 25,
    color: COLORS.black,
    fontSize: SIZES.body4,
    letterSpacing: 0.28,
    
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationChervonWrapper: {
    backgroundColor: COLORS.ligthGrey,
    width: 35,
    height: 34,
    marginRight: 10,
    paddingVertical: 8.5,
    paddingHorizontal: 13,
  },
  chervon: {width: 8.9, height: 16.9},
  paginationNumbers: {
    fontSize: SIZES.body4,
    letterSpacing: 19.6,
    color: COLORS.black,
    textAlign: 'left',
  },
});
