import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useCategoryList} from '../../../apollo/controllers/getCategoryList.Controller';
import {Item} from '../../../apollo/services/apollo/queries/categories/categoryList';
import OutlineButton from '../../../components/buttons/OutlineButton';
import Footer from '../../../components/footers/Footer';
import Header from '../../../components/headers/Header';
import Spacer from '../../../components/Spacer';
import ActivityIndicator from '../../../components/spinners/ActivityIndicator';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';

export default function CategoryScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {name, url_path} = route?.params?.categoryData;
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1)

  const {getCategoryList, loading, error, categoryList} = useCategoryList({
    url_path: url_path,
    pageSize: pageSize,
    currentPage: currentPage

  });

  useEffect(() => {
    getCategoryList();
  }, [getCategoryList]);

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

  const _getCurrencySymbols = (currency: string) => {
    switch (currency) {
      case 'USD':
        return '$';
      default:
        return '$';
    }
  };

  const _renderCategoryListItems = (item: Item) => {
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
      return <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
    }

    const _titleAndSecondTitle = () => {
      return <View style={{marginLeft: 6.3}}>
          <Text
            containerStyle={[
              {
                fontFamily: FONTS.AvenirBold,
              },
              styles.commonTextStyle,
            ]}>
            {name}
          </Text>
          <Text
            containerStyle={[
              {
                fontFamily: FONTS.AvenirBook,
              },
              styles.commonTextStyle,
            ]}>
            {second_title}
          </Text>
        </View>
    }

    const _renderImageContent = () => {
      return <ImageBackground
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
    }

    const _renderColorsContent = () => {
      return <Text
      containerStyle={[
        styles.commonTextStyle,
        {
          fontFamily: FONTS.AvenirBook,
          color: COLORS.swatch,
        },
      ]}>
      16 more colors
    </Text>
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        key={item.name}
        style={styles.itemContainer}>
        {_renderImageContent()}
        <Spacer mb={10.1} />
        {_titleAndSecondTitle()}
        <Spacer mt={10} />
        <View style={{marginLeft: 6.3}}>
          {_priceContent()}
          {_renderColorsContent()}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: COLORS.white}} contentContainerStyle={{flexGrow: 1}}>
      <Header />
      <FlatList
        scrollEnabled={false}
        columnWrapperStyle={{alignItems: 'flex-start'}}
        contentContainerStyle={{paddingHorizontal: 20}}
        numColumns={2}
        renderItem={({item}) => _renderCategoryListItems(item)}
        data={categoryList?.categoryList[0]?.products?.items}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <View style={styles.listEmpty}>
          <Text>No Content Found</Text>
        </View>}
        
      />
      <Spacer mt={20}/>
        
      <Spacer mt={40}/>
      <Footer containerStyle={{
          paddingHorizontal: 27,
          paddingTop: 28.6,
          backgroundColor: COLORS.footerColor,
        }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    justifyContent:'center',
    alignItems:'center',
  }
});
