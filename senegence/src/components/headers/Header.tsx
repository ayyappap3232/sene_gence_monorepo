import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {AppLogo, Globe, HamburgerMenu, Search} from '../../../assets/svgs';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Spacer from '../Spacer';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import Collapsible from 'react-native-collapsible';
import {ScreenNames} from '../../utils/screenNames';

export default function Header() {
  const navigation = useNavigation<any>();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const onSearchHandler = () => {
    setIsSearchOpen(false);
    navigation.navigate(ScreenNames.SearchScreen, {searchQuery: searchText});
    setSearchText('');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <>
            <SafeAreaView style={styles.header}>
              <View style={styles.headerContent}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.openDrawer()}>
                  <HamburgerMenu
                    width={23.7}
                    height={18.6}
                    style={styles.hamburgerMenu}
                  />
                </TouchableOpacity>
                <Image
                  source={images.logo}
                  resizeMode="contain"
                  style={{width: 192.7, height: 44}}
                />
              </View>
              <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => handleSearch()}>
                  <Search />
                </TouchableOpacity>
                <View style={styles.globeWrapper}>
                  <Globe />
                  <Text style={styles.rightText}>USA</Text>
                </View>
              </View>
            </SafeAreaView>
            <Collapsible collapsed={!isSearchOpen}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  height: 50,
                  marginTop: 10,
                  justifyContent: 'space-between',
                }}>
                <OutlineTextInput
                  value={searchText}
                  containerStyle={{
                    width: '100%',
                    borderRadius: 20,
                  }}
                  placeholder={'Search...'}
                  onChangeText={(text: string) => setSearchText(text)}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 10}}
                  onPress={() => onSearchHandler()}>
                  <Search width={30} height={30} />
                </TouchableOpacity>
              </View>
            </Collapsible>
          </>
        );
      },
    });
  }, [isSearchOpen, searchText]);

  return (
    <>
      <Spacer mt={10} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: Platform.OS == 'ios' ? 120 : 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  hamburgerMenu: {
    marginRight: 20,
  },
  globeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    fontFamily: FONTS.AvenirMedium,
    letterSpacing: 1.6,
    fontSize: SIZES.body3,
    marginLeft: -5,
  },
});
