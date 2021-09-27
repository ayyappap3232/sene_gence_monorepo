import {useNavigation, useRoute} from '@react-navigation/native';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {LogBox} from 'react-native';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoryItemComponent from '../../../components/PLP/CategoryItemComponent';
import Spacer from '../../../components/Spacer';
import ActivityIndicator from '../../../components/spinners/ActivityIndicator';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {_getCurrencySymbols} from '../../../utils/helpers/getSymbolBasedOnCurrency';
import {useSearchCategoryList} from '../../../apollo/controllers/getSearchCategoryList.Controller';
import {globalStyles} from '../../../globalstyles/GlobalStyles';

export default function SearchCategoryScreen({name}: any) {
  const navigation = useNavigation();

  const [resultsCount, setResultsCount] = useState();

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);

  const [gridView, setgridView] = useState<boolean>(false);

  const {getSearchCategoryList, loading, error, searchCategoryList} =
    useSearchCategoryList({
      name: name,
      pageSize: pageSize,
      currentPage: currentPage,
    });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getSearchCategoryList();
  }, [getSearchCategoryList, currentPage, name]);

  if (loading) {
    return <ActivityIndicator />;
  }

  const total_count = searchCategoryList?.products?.total_count;

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

  const _noSearchResultsFound = () => {
    return (
      <View>
        <Image
          source={images.nosearchresultsfound}
          style={{width: 332, height: 332, alignSelf: 'center'}}
        />
        <Spacer mt={10} />
        <View style={{alignItems: 'center'}}>
          <Text
            containerStyle={{
              fontSize: SIZES.body3,
              fontFamily: FONTS.BebasNeueBold,
              lineHeight: 30,
              letterSpacing: 1.6,
              color: COLORS.searchTitle,
            }}>
            Sorry! No Result found
          </Text>
          <Spacer mt={10} />
          <Text containerStyle={[globalStyles.text, {textAlign: 'center'}]}>
            We’re sorry what you were looking for, Please try another way
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {searchCategoryList?.products?.total_count > 0 ? (
        <>
          <Text
            containerStyle={[
              globalStyles.text,
              {marginHorizontal: 20, marginTop: 10},
            ]}>
            {searchCategoryList?.products?.total_count} ITEMS
          </Text>
          {_filters()}
          <FlatList
            scrollEnabled={false}
            // columnWrapperStyle={{alignItems: 'flex-start'}}
            contentContainerStyle={{paddingLeft: 20}}
            numColumns={gridView ? 1 : 2}
            key={gridView ? 1 : 0}
            renderItem={({item}) =>
              CategoryItemComponent(item, {}, gridView, navigation, '', name)
            }
            data={searchCategoryList?.products?.items}
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
        </>
      ) : (
        _noSearchResultsFound()
      )}
    </>
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
    alignSelf: 'center',
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
