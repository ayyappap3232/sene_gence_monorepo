import * as React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Close} from '../../../assets/svgs';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Text from '../text/Text';
import Modal from 'react-native-modal';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../utils/screenNames';
import Collapsible from 'react-native-collapsible';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import Spacer from '../Spacer';
import Divider from '../dividers/Divider';
import {useCallback, useEffect, useState} from 'react';
import {
  Item,
  Value,
} from '../../apollo/services/apollo/queries/categories/categoryList';

const FilterDrawer = ({
  sideMenuItems = [],
  sideMenuProductItems,
  searchValue = '',
  attribute_code = '',
  name,
  url_path,
  cameFrom = '',
}: any) => {
  const navigation = useNavigation<any>();
  const [visible, setVisible] = React.useState(false);

  const [categoryItemsShow, setCategoryItemsShow] = React.useState(false);
  const [colorCategoryItemsShow, setColorCategoryItemsShow] =
    React.useState(false);
  const [shadeItemsShow, setShadeItemsShow] = React.useState(false);
  const [priceItemsShow, setPriceItemsShow] = React.useState(false);
  const [showSearchItemsList, setShowSearchItemsList] = React.useState(true);

  const [colorSwatches, setColorSwatches] = React.useState<any>([]);
  const [filterName, setFilterName] = useState(name);
  const [filterUrl_path, setFilterUrl_path] = useState(url_path);

  const handleNavigationFilters = (searchParam: any, attribute_code: any) => {
    setVisible(false);
    setShadeItemsShow(false);
    setPriceItemsShow(false);
    setCategoryItemsShow(false);
    setCategoryItemsShow(false);
    if (cameFrom == 'search_page') {
      navigation.navigate(ScreenNames.SearchScreen, {
        searchQuery: name,
        searchParam: searchParam,
        attribute_code: attribute_code,
      });
    } else {
      navigation.navigate(ScreenNames.CategoryItem, {
        categoryData: {
          searchParam: searchParam,
          attribute_code: attribute_code,
          name: name,
          url_path: url_path,
        },
      });
    }
  };

  const colorswatches = () =>
    sideMenuProductItems?.map((item: Item, index: number) => {
      return item.configurable_options?.map((childItem, ci: number) => {
        return childItem?.values?.map((subChild: Value, i: number) => {
          return (
            childItem.attribute_code == 'color' &&
            subChild.swatch_data?.value && (
              <TouchableOpacity
                key={subChild.uid}
                activeOpacity={0.9}
                style={{
                  marginVertical: 5,
                  marginRight: 8,
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: subChild.swatch_data?.value,
                }}></TouchableOpacity>
            )
          );
        });
      });
    });

  const shadeItems = () =>
    sideMenuProductItems?.map((item: Item, index: number) => {
      return item.configurable_options?.map((childItem, ci: number) => {
        return childItem?.values?.map((subChild: Value, i: number) => {
          return (
            childItem.attribute_code == 'shade' && (
              <TouchableOpacity
                key={subChild.label}
                activeOpacity={0.7}
                style={{
                  marginVertical: 5,
                  marginRight: 8,
                  borderRadius: 10,
                }}
                onPress={() =>
                  handleNavigationFilters(subChild.label, 'Shade')
                }>
                <Text
                  containerStyle={[
                    globalStyles.text_avenir_medium,
                    {textTransform: 'uppercase', textAlign: 'left'},
                  ]}>
                  {subChild.label} (1)
                </Text>
              </TouchableOpacity>
            )
          );
        });
      });
    });

  const showModal = () => setVisible(true);

  const _category = () => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setCategoryItemsShow(!categoryItemsShow)}>
          <View style={[globalStyles.row]}>
            <Text
              containerStyle={[
                styles.categoryItem,
                {fontFamily: FONTS.AvenirHeavy},
              ]}>
              Category
            </Text>
            <Image
              source={categoryItemsShow ? images.chervonup : images.chervondown}
              style={{width: 19, height: 11}}
            />
          </View>
        </TouchableOpacity>
        <Spacer mt={10} />
        <Divider width={'100%'} backgroundColor={COLORS.border} height={1} />
        <Collapsible collapsed={!categoryItemsShow}>
          {sideMenuItems?.map((item: any, index: any) => {
            return item.product_count > 0 ? (
              <TouchableOpacity
                key={item.name}
                style={{marginVertical: 10}}
                onPress={() => {
                  showModal();
                  navigation.navigate(ScreenNames.CategoryItem, {
                    categoryData: {
                      name: item.name,
                      url_path: item.url_path,
                    },
                  });
                }}>
                <Text containerStyle={[styles.categoryItem]}>
                  {item.name} ({item.product_count})
                </Text>
              </TouchableOpacity>
            ) : null;
          })}
        </Collapsible>
      </>
    );
  };

  const _colorCategory = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setColorCategoryItemsShow(!colorCategoryItemsShow)}>
          <View style={[globalStyles.row]}>
            <Text
              containerStyle={[
                styles.categoryItem,
                {fontFamily: FONTS.AvenirHeavy},
              ]}>
              Color
            </Text>
            <Image
              source={
                colorCategoryItemsShow ? images.chervonup : images.chervondown
              }
              style={{width: 19, height: 11}}
            />
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={!colorCategoryItemsShow}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 5,
            }}>
            {colorswatches()}
          </View>
        </Collapsible>
      </View>
    );
  };

  const _shadeCategory = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShadeItemsShow(!shadeItemsShow)}>
          <View style={[globalStyles.row]}>
            <Text
              containerStyle={[
                styles.categoryItem,
                {fontFamily: FONTS.AvenirHeavy},
              ]}>
              Shade
            </Text>
            <Image
              source={shadeItemsShow ? images.chervonup : images.chervondown}
              style={{width: 19, height: 11}}
            />
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={!shadeItemsShow}>
          <View>{shadeItems()}</View>
        </Collapsible>
      </View>
    );
  };

  const _priceCategory = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPriceItemsShow(!priceItemsShow)}>
          <View style={[globalStyles.row]}>
            <Text
              containerStyle={[
                styles.categoryItem,
                {fontFamily: FONTS.AvenirHeavy},
              ]}>
              Price
            </Text>
            <Image
              source={priceItemsShow ? images.chervonup : images.chervondown}
              style={{width: 19, height: 11}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const _searchValueRelatedUI = () => {
    return (
      <>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowSearchItemsList(!showSearchItemsList)}>
            <View style={[globalStyles.row]}>
              <Text
                containerStyle={[
                  styles.categoryItem,
                  {fontFamily: FONTS.AvenirHeavy},
                ]}>
                Now Shopping By
              </Text>
              <Image
                source={
                  showSearchItemsList ? images.chervonup : images.chervondown
                }
                style={{width: 19, height: 11}}
              />
            </View>
          </TouchableOpacity>
          <Spacer mt={20} />
          <Divider width={'100%'} backgroundColor={COLORS.border} height={1} />
          <Spacer mt={10} />
          <Collapsible collapsed={!showSearchItemsList}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => handleNavigationFilters('', '')}>
                <Image source={images.close} style={{width: 24, height: 24}} />
              </TouchableOpacity>
              <Text
                containerStyle={[
                  globalStyles.text_avenir_heavy,
                  {
                    fontFamily: FONTS.AvenirBook,
                    textTransform: 'uppercase',
                    color: COLORS.border3,
                  },
                ]}>
                <Text containerStyle={{fontWeight: '700'}}>
                  {attribute_code}:
                </Text>{' '}
                {searchValue}
              </Text>
            </View>
            <Spacer mt={10} />
            <TouchableOpacity onPress={() => handleNavigationFilters('', '')}>
              <Text
                containerStyle={[
                  globalStyles.text_bebas_bold,
                  styles.clearAll,
                ]}>
                Clear All
              </Text>
            </TouchableOpacity>
          </Collapsible>
        </View>
      </>
    );
  };

  return (
    <>
      <TouchableOpacity onPress={() => showModal()}>
        <Image
          source={images.filter1}
          style={{width: 12.6, height: 12.6, marginRight: 4}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Modal
        style={{width: SIZES.width - 120, marginLeft: 0}}
        supportedOrientations={['portrait']}
        presentationStyle="overFullScreen"
        animationOut="slideOutLeft"
        isVisible={visible}
        animationIn="slideInLeft">
        <View style={styles.sideMenu}>
          <TouchableOpacity
            style={{left: '90%'}}
            onPress={() => setVisible(!visible)}>
            <Close />
          </TouchableOpacity>

          <Spacer mt={20} />
          <View style={{marginHorizontal: 15}}>
            {attribute_code !== '' && _searchValueRelatedUI()}
            {searchValue == '' && (
              <Text
                containerStyle={[
                  styles.categoryItem,
                  {
                    fontFamily: FONTS.AvenirMedium,
                    textTransform: 'capitalize',
                  },
                ]}>
                Shopping Options
              </Text>
            )}
            {showSearchItemsList && (
              <>
                <Spacer mt={20} />
                <Divider
                  width={'100%'}
                  backgroundColor={COLORS.border}
                  height={1}
                />
                <Spacer mt={10} />
              </>
            )}
            {sideMenuItems?.length > 0 && _category()}
            <Spacer mt={10} />
            {sideMenuProductItems && _colorCategory()}
            <Spacer mt={10} />
            <Divider
              width={'100%'}
              backgroundColor={COLORS.border}
              height={1}
            />
            <Spacer mt={10} />
            {sideMenuProductItems && _priceCategory()}
            <Spacer mt={10} />
            <Divider
              width={'100%'}
              backgroundColor={COLORS.border}
              height={1}
            />
            <Spacer mt={10} />
            {sideMenuProductItems && (
              <>
                {_shadeCategory()}
                <Spacer mt={10} />
                <Divider
                  width={'100%'}
                  backgroundColor={COLORS.border}
                  height={1}
                />
                <Spacer mt={10} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FilterDrawer;

const styles = StyleSheet.create({
  sideMenu: {
    backgroundColor: COLORS.white,
    height: SIZES.height,
    elevation: 4,
    shadowColor: COLORS.swatch,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.7,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  categoryItem: {
    textTransform: 'uppercase',
    fontFamily: FONTS.AvenirBook,
    fontSize: SIZES.body3,
    letterSpacing: 0.8,
    color: COLORS.text,
  },
  clearAll: {
    fontFamily: FONTS.AvenirBold,
    fontSize: SIZES.body3,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: COLORS.primary2,
  },
});
