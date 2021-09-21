import React, { useEffect, useState } from 'react'
import { Alert, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Item } from '../../apollo/services/apollo/queries/categories/categoryList';
import { COLORS, FONTS, images, SIZES } from '../../constants';
import { _handleStockStatus } from '../../utils/helpers/getStockStatus';
import { _getCurrencySymbols } from '../../utils/helpers/getSymbolBasedOnCurrency';
import OutlineButton from '../buttons/OutlineButton';
import Spacer from '../Spacer';
import Text from '../text/Text';

const CategoryItemComponent = (item: Item, containerStyle = {}, gridView : boolean, navigation?: any,url_path="", pathName="") => {
  const {
      price_range: {
        minimum_price : {
          regular_price: {currency, value},
          discount: {amount_off},
          final_price,
        },
      },
      name,
      image: {url},
      second_title,
      stock_status,
    } = item || {};

    

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

    const handleCategoryDetailsNavigation = (item:Item) => {
      //Check Whether the item exists or not in the local storage
      // const isRecentlyViewedDataExists = _retrieveRecentlyViewedData(item.uid);
      // isRecentlyViewedDataExists.then(val => {
      //   console.log('value at 148', val)
      //   if(val){
      //     console.log('value on line number 149',val)
      //     return;
      //   }else{
      //     console.log('iam in 152')
      //     AsyncStorage.removeItem("recently_viewed_products")
      //     // check if item exists in productsArray
      //     //AsyncStorage.setItem("recently_viewed_products",JSON.stringify(item))
      //   }
      // })
      AsyncStorage.getItem('recently_viewed_products').then((products)=>{
        const p = products ? JSON.parse(products) : [];
        p.push(item);
        AsyncStorage.setItem('recently_viewed_products', JSON.stringify(p));
      });

      navigation.navigate("CategoryDetails",{categoryDetail: item, one_level_url_path: url_path, pathName: pathName})
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        key={item.name}
        style={[
          styles.itemContainer,
          containerStyle,
          {flexDirection: gridView ? 'row' : 'column'},
        ]}
        onPress={() => handleCategoryDetailsNavigation(item)}
        >
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

export default CategoryItemComponent;
