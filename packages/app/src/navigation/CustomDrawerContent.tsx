import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Alert, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {
  AppLogo,
  Chevron,
  Close,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Youtube,
} from '../../assets/svgs';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {StyleSheet} from 'react-native';
import Text from '../components/text/Text';
//@ts-ignore
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import OutlineTextInput from '../components/textInputs/OutlineTextInput';
import OutlineButton from '../components/buttons/OutlineButton';
import {Platform} from 'react-native';

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation<any>();
  const [isTabSelected, setIsTabSelected] = useState('MENU');
  const [selectedItemIndex, setSelectedItemIndex] = useState({
    id: -1,
    toggle: false,
  });
  const [selectedChildItemIndex, setSelectedChildItemIndex] = useState({
    id: -1,
    toggle: false,
  });
  const [selectedTitle, setSelectedTitle] = useState('');

  const tabData = [
    {
      id: 'MENU',
      name: 'MENU',
    },
    {
      id: 'LOGIN',
      name: 'LOGIN',
    },
  ];

  const _header = () => {
    return (
      <View style={styles.rectangleHeaderBackground}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Close width={19} height={19} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StartUpDrawer')}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _handleTabSelectedOption = (selectedTab: string) => {
    setIsTabSelected(selectedTab);
  };

  const _topTabs = () => {
    return (
      <View style={styles.topTabContainer}>
        {tabData.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor:
                  item.name === isTabSelected ? '#ffffff' : '#f4f4f4',
                paddingLeft: 20,
                flex: item.name == 'LOGIN' ? 1 : 0,
              }}
              key={item.id}
              activeOpacity={0.7}
              onPress={() => _handleTabSelectedOption(item.name)}>
              <Text containerStyle={styles.topTabMenu}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const _handleSingleItem = (item: any, selectedTitle: string) => {
    setSelectedTitle(selectedTitle);
    navigation.navigate('CategoryItem', {categoryData: item});
  };

  const _renderMenuItem = (item, index, setSelectedItem?, selectedItem?) => {
    return (
      <TouchableOpacity
        key={`${index}${item.name}`}
        style={[
          styles.categoryListItem,
          item.name == selectedTitle && {
            borderLeftWidth: 8,
            borderLeftColor: '#ff5501',
            paddingLeft: 5,
          },
        ]}
        onPress={() => _handleSingleItem(item, item.name)}>
        <Text containerStyle={styles.categoriesList}>{item.name}</Text>
        {item.children?.length > 0 && (
          <TouchableOpacity
          key={`${index}${item.name}`}
            onPress={() =>
              item.children?.length > 0
                ? setSelectedItem({
                    id: index + item.name,
                    toggle: !selectedItem.toggle,
                  })
                : {}
            }>
            <Image
              style={{
                width: 12,
                height: 6,
                transform: [
                  {
                    rotate:
                      index + item.name == selectedItem.id &&
                      selectedItem.toggle
                        ? '0deg'
                        : '180deg',
                  },
                ],
              }}
              source={icons.Chevron}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const _menuContent = () => {
    return <View style={{marginTop: 13}}>
     {props.categoryData?.categories?.items?.map((item, index) => {
      return item.children.map((item, index) => {
        return (
          <>
            {_renderMenuItem(
              item,
              index,
              setSelectedItemIndex,
              selectedItemIndex,
            )}
            {index + item.name == selectedItemIndex.id &&
              selectedItemIndex.toggle &&
              item.children.length > 0 &&
              item.children.map((item, index) => {
                return (
                  <>
                    {_renderMenuItem(
                      item,
                      index,
                      setSelectedChildItemIndex,
                      selectedChildItemIndex,
                    )}
                    {index + item.name == selectedChildItemIndex.id &&
                      selectedChildItemIndex.toggle &&
                      item.children.length > 0 &&
                      item.children.map((item, index) => {
                        return _renderMenuItem(item, index);
                      })}
                  </>
                );
              })}
          </>
        );
      });
    })}
    </View>
  };

  const _loginContent = () => {
    return <DrawerItem label="Login Content" onPress={() => {}} />;
  };

  const _socialNetworkSection = () => {
    return (
      <>
        <Image
          source={images.drawerContentImage1}
          style={styles.drawerContentImage}
        />
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Facebook onPress={() => {}} />
          <Twitter onPress={() => {}} />
          <Instagram onPress={() => {}} />
          <Pinterest onPress={() => {}} />
          <Youtube onPress={() => {}} />
        </View>
      </>
    );
  };

  const _links = () => {
    return (
      <View style={styles.links}>
        <Text containerStyle={styles.textLinks}>Select Your Country</Text>
        <Text containerStyle={styles.textLinks}>The Make Sense Foundation</Text>
        <Text containerStyle={styles.textLinks}>Member of DSWA & DSA</Text>
        <Text containerStyle={styles.textLinks}>Code of Ethics</Text>
        <Text containerStyle={styles.textLinks}>Contact the DSA</Text>
      </View>
    );
  };

  const _footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerBody}>
          <Text containerStyle={styles.footerText}>NewsLetter</Text>
          <OutlineTextInput
            containerStyle={styles.email}
            placeholder={'Enter Your Email...'}
            onChangeText={() => {}}
          />
          <OutlineButton
            textStyleContainer={styles.signupButtonText}
            containerStyle={styles.signupButton}
            title={'Sign Up'}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  };

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}  {...props}>
      {_header()}
      {_topTabs()}
      <ScrollView style={styles.tabWrapper}>
        {isTabSelected == 'MENU' ? (
          <>
            {_menuContent()}
            {_socialNetworkSection()}
            {_links()}
            
          </>
        ) : (
          _loginContent()
        )}
      </ScrollView>
      {_footer()}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container:{flex: 1,justifyContent:'space-between'},
  rectangleHeaderBackground: {
    height: 53,
    margin: 0,
    marginRight: 82,
    backgroundColor: '#d2d7e2',
    width: 293,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 20,
  },
  logo: {
    height: 28.8,
    width: 126.1,
    marginTop: 0,
    marginRight: 68,
    marginBottom: 0.2,
    marginLeft: 14.5,
  },
  topTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topTabMenu: {
    width: 86,
    height: 39,
    paddingTop: 9,
    paddingRight: 27,
    paddingBottom: 8,
    fontFamily: FONTS.AvenirMedium,
    fontSize: 16,
    letterSpacing: 1.6,
  },
  tabWrapper: {marginLeft: 20, marginRight: 15},
  categoriesList: {
    fontSize: 14,
    fontFamily: FONTS.AvenirMedium,
    letterSpacing: 4.2,
    color: COLORS.text,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  categoryListItem: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerContentImage: {
    width: 258,
    height: 169,
    marginHorizontal: 0,
    marginVertical: 10,
  },
  links: {
    marginLeft: 25.4,
  },
  textLinks: {
    fontFamily: FONTS.AvenirMedium,
    lineHeight: 40,
    letterSpacing: 0.2,
    color: COLORS.text,
  },
  footer: {
    height: 157,
    backgroundColor: COLORS.primary,
    marginRight: -15,
  },
  footerBody: {
    marginTop: 20.5,
    marginLeft: 25,
    marginBottom: 19.5,
    marginRight: 13,
  },
  footerText: {
    textTransform: 'uppercase',
    fontFamily: FONTS.BebasNeueBold,
    fontSize: SIZES.body3,
    letterSpacing: 3.2,
    color: COLORS.white,
    marginBottom: 10,
  },
  email: {
    marginBottom: 10,
    fontFamily: FONTS.AvenirLight,
    fontSize: 14,
    letterSpacing: 0.35,
  },
  signupButton: {
    width: 114,
    height: 42,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  signupButtonText: {
    color: COLORS.white,
    width: 114,
    height: 22,
    fontSize: SIZES.body3,
    fontFamily: FONTS.AvenirHeavy,
    fontWeight: '900',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default CustomDrawerContent;