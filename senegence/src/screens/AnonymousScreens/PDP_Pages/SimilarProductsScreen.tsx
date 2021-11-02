import {useNavigation} from '@react-navigation/native';
import React, {
  useEffect,
  useState,
} from 'react';
import {LogBox} from 'react-native';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

//User defined Imports
import CategoryItemComponent from 'components/PLP/CategoryItemComponent';
import ActivityIndicator from 'components/spinners/ActivityIndicator';
import Text from 'components/text/Text';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {_getCurrencySymbols} from 'utils/helpers/getSymbolBasedOnCurrency';
import {useSearchCategoryList} from 'apollo/controllers/getSearchCategoryList.Controller';

export default function SimilarProducts({name}: any) {
  const navigation = useNavigation();

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const {getSearchCategoryList, loading, error, searchCategoryList} =
    useSearchCategoryList({
      name: name,
      pageSize: pageSize,
      currentPage: currentPage,
      sortNameField: "name"
    });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getSearchCategoryList();
  }, [getSearchCategoryList, currentPage, name]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
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
            false,
            navigation,
            '',
            name,
          )
        }
        data={searchCategoryList?.products?.items}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text containerStyle={{textAlign: 'center'}}>No Content Found</Text>
          </View>
        )}
      />

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
