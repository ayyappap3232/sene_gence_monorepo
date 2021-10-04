import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {LogBox, TextInput} from 'react-native';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCategoryList} from '../../../apollo/controllers/getCategoryList.Controller';
import CategoryItemComponent from '../../../components/PLP/CategoryItemComponent';
import Spacer from '../../../components/Spacer';
import ActivityIndicator from '../../../components/spinners/ActivityIndicator';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import {_getCurrencySymbols} from '../../../utils/helpers/getSymbolBasedOnCurrency';
import BreadCrumbWithOneLevelUp from '../../../components/breadCrumbs/BreadCrumbWithOneLevelUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FilterOptionItem from '../../../components/filters/FilterOptionItem';
import {filterNames} from '../../../utils/data/FilterData';
import SortByFilter from '../../../components/filters/SortByFilter';
import {ScreenNames} from '../../../utils/screenNames';
import FilterDrawer from '../../../components/drawers/FilterDrawer';
import Drawer from 'react-native-drawer';
import CustomDrawerContent from '../../../navigation/CustomDrawerContent';
import { Alert } from 'react-native';

export default function CategoryScreen() {
  const navigation = useNavigation<any>();
  // const [recentlyViewedProducts, setRecentlyViewedProducts] = useState<any>([])

  const [textInputValue, setTextInputValue] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  let _drawer = useRef(null);

  const route = useRoute();
  const {name, url_path} = route?.params?.categoryData;

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  const [gridView, setgridView] = useState<boolean>(false);

  useEffect(() => {
      setPageSize(10);
      setCurrentIndex(1);
      setCurrentPage(1);
    
  }, [url_path])

  console.log('navigation currentPage', currentPage);
  

  const {getCategoryList, loading, error, categoryList} = useCategoryList({
    url_path: url_path,
    pageSize: pageSize,
    currentPage: currentPage,
  });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getCategoryList();
  }, [getCategoryList, currentPage]);

  //Recently Viewed Products getting from AsyncStorage
  useEffect(() => {
    AsyncStorage.getItem('recently_viewed_products').then(products => {
      const p = products ? JSON.parse(products) : [];

      //Removing the duplicates from the array
      let jsonObject = p.map(JSON.stringify);
      let uniqueSet = new Set(jsonObject);
      let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      setRecentlyViewedProducts(uniqueArray);
    });
  }, [route]);

  if (loading) {
    return <ActivityIndicator />;
  }

  const total_count = categoryList?.categoryList[0]?.products?.total_count;

  const paginationLength = Math.ceil(total_count / pageSize);

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

  const _filters = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <View style={styles.filterWrapper}>
          <FilterDrawer />
          <Text containerStyle={styles.filterText}>Shop By</Text>
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
        </View>
        <View style={styles.filterWrapper}>
          <SortByFilter
            textInputValue={textInputValue}
            setTextInputValue={setTextInputValue}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollToTopContainer showCart={false}>
      <View style={{marginLeft: 20}}>
        <BreadCrumbWithOneLevelUp title={name} />
      </View>
      {total_count > 0 && (
        <>
          <Spacer mt={10} />
          <Text containerStyle={{marginLeft: 20}}>
          ITEMS {(currentPage - 1) * pageSize + 1} - {(total_count > 10 ? pageSize : total_count )* currentPage}{' '}
            OF {total_count}{' '}
          </Text>
        </>
      )}
      {_filters()}
      <FlatList
        scrollEnabled={false}
        // columnWrapperStyle={{alignItems: 'flex-start'}}
        contentContainerStyle={{paddingLeft: 22}}
        numColumns={gridView ? 1 : 2}
        key={gridView ? 1 : 0}
        renderItem={({item}) =>
          CategoryItemComponent(item, {}, gridView, navigation, url_path, name)
        }
        data={categoryList?.categoryList[0]?.products?.items}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text>We can't find products matching the selection.</Text>
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

      {recentlyViewedProducts.length > 0 && (
        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{marginHorizontal: 10}}
            numColumns={1}
            renderItem={({item}) =>
              CategoryItemComponent(
                item,
                {marginRight: 10},
                gridView,
                navigation,
                url_path,
                name,
              )
            }
            data={recentlyViewedProducts}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <Text>No Content Found</Text>
              </View>
            )}
          />
          <Spacer mt={54.1} />
        </>
      )}
    </ScrollToTopContainer>
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
    marginRight: 10,
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
