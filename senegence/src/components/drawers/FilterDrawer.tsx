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

const FilterDrawer = ({sideMenuItems = []}: any) => {
  const navigation = useNavigation<any>();
  const [visible, setVisible] = React.useState(false);
  console.log(sideMenuItems);

  const [categoryItemsShow, setCategoryItemsShow] = React.useState(false);

  const showModal = () => setVisible(true);

  const _category = () => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setCategoryItemsShow(!categoryItemsShow)}>
          <View style={[globalStyles.row]}>
            <Text containerStyle={[styles.categoryItem,{fontFamily: FONTS.AvenirHeavy}]}>Category</Text>
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
                <Text
                  containerStyle={[
                    styles.categoryItem
                  ]}>
                  {item.name} ({item.product_count})
                </Text>
              </TouchableOpacity>
            ) : null;
          })}
        </Collapsible>
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
          <Text containerStyle={[styles.categoryItem,{fontFamily: FONTS.AvenirMedium, textTransform: 'capitalize'}]}>Shopping Options</Text>
          <Spacer mt={20} />
          <Divider width={'100%'} backgroundColor={COLORS.border} height={1} />
          <Spacer mt={10} />
            {sideMenuItems?.length > 0 && _category()}
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
  categoryItem:{
    textTransform: 'uppercase',
    fontFamily: FONTS.AvenirBook,
    fontSize: SIZES.body3,
    letterSpacing: 0.8,
    color: COLORS.text,
  },
});
