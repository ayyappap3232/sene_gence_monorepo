import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

//User defined Imports
import FAB from 'react-native-fab';
import Footer from './footers/Footer';
import Header from './headers/Header';
import {COLORS, FONTS, images, SIZES} from '../constants';
import Text from './text/Text';
import {globalStyles} from 'globalstyles/GlobalStyles';
import Spacer from './Spacer';
import {ScreenNames} from '../utils/screenNames';
import {useNavigation} from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const ScrollToTopContainer = ({
  children,
  nestedScrollEnabled = true,
  containerStyle = {},
  scrollContainerStyle = {},
  scrollContentContainerStyle = {},
  headerContainerStyle = {},
  showCart = false,
  isBannerShownOnInitialLoad = false,
  keyboardShouldPersistTaps = 'always',
  ...restProps
}: any) => {
  //ScrollTo Top Functionality
  const navigation = useNavigation<any>();
  const scrollRef = useRef<ScrollView>();
  const [showPageUp, setShowPageUp] = useState(false);
  const [showShadowEffect, setShowShadowEffect] = useState(false);
  const [menuCallBack, setMenuCallBack] = useState(false);

  const _goToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const _menuItem = (text: string, onPress: () => void) => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={{}} onPress={onPress}>
        <Text
          containerStyle={{fontFamily: FONTS.AvenirBook, fontSize: SIZES.h4, textTransform:'uppercase'}}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  const _userProfileMenuCard = () => {
    return (
      <View
        style={[
          globalStyles.shadowEffect,
          {
            zIndex: 100,
            margin: 25,
            right: -15,
            width: SIZES.width / 1.2,
            padding: 10,
            backgroundColor: COLORS.white,
            alignSelf: 'flex-end',
            position: 'absolute',
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={images.loginUser}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View>
            <Text containerStyle={[globalStyles.text_avenir_heavy]}>
              Hi, Jalynn!{' '}
            </Text>
            <Text containerStyle={{color: COLORS.swatch}}>
              25 Kiss Kredits{' '}
            </Text>
            <Text containerStyle={{color: COLORS.swatch}}>
              Distributor:{' '}
              <Text
                containerStyle={[
                  globalStyles.text_avenir_heavy,
                  {color: COLORS.black},
                ]}>
                Jane Smith{' '}
              </Text>
            </Text>
          </View>
        </View>
        <Spacer mt={30} />
        {_menuItem('Account', () => {
          setMenuCallBack(false);
          navigation.navigate(ScreenNames.UserProfile);
        })}
        <Spacer mt={20} />
        {_menuItem('Orders', () => {
          setMenuCallBack(false);
          navigation.navigate(ScreenNames.UserOrders);
        })}
        <Spacer mt={20} />
        {_menuItem('Contact Distributor', () => {
          setMenuCallBack(false);
          navigation.navigate(ScreenNames.ContactDistributor);
        })}
        <Spacer mt={20} />
        {_menuItem('Loves', () => {})}
        <Spacer mt={20} />
        {_menuItem('Sign Out', () => {})}
        <Spacer mt={20} />
      </View>
    );
  };

  return (
    <SafeAreaView {...restProps} style={[styles.container, containerStyle]}>
      <Header
        headerContainerStyle={headerContainerStyle}
        showCart={showCart}
        isBannerShownOnInitialLoad={isBannerShownOnInitialLoad}
        showPageUp={showShadowEffect}
        userProfileState={menuCallBack}
        menuCallBack={(value: boolean) => setMenuCallBack(value)}
      />
      {menuCallBack && _userProfileMenuCard()}
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        nestedScrollEnabled={nestedScrollEnabled}
        onScroll={e => {
          setShowPageUp(e.nativeEvent.contentOffset.y > 100 ? true : false);
          setShowShadowEffect(e.nativeEvent.contentOffset.y > 0 ? true : false);
        }}
        ref={scrollRef}
        style={[
          {backgroundColor: COLORS.white, paddingTop: 20},
          scrollContainerStyle,
        ]}
        contentContainerStyle={[{flexGrow: 1}, scrollContentContainerStyle]}>
        {children}
        <Footer
          containerStyle={{
            paddingHorizontal: 27,
            paddingTop: 28.6,
            backgroundColor: COLORS.primary3,
          }}
        />
      </ScrollView>
      <FAB
        onClickAction={() => {
          _goToTop();
        }}
        visible={showPageUp}
        iconTextComponent={
          <>
            <ImageBackground
              source={images.fabbackgroundimage}
              style={{
                width: 90,
                height: 90,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={images.uparrow}
                style={{width: 13, height: 7, marginTop: -10}}
              />
            </ImageBackground>
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    marginTop: -20,
  },
});
