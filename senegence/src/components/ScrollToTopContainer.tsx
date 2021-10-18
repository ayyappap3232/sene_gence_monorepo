import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import FAB from 'react-native-fab';
import {PageUp} from '../../assets/svgs';
import Footer from './footers/Footer';
import Header from './headers/Header';
import {COLORS, images} from '../constants';
import {useNavigation} from '@react-navigation/native';

export const ScrollToTopContainer = ({
  children,
  nestedScrollEnabled = true,
  containerStyle = {},
  scrollContainerStyle = {},
  scrollContentContainerStyle = {},
  headerContainerStyle = {},
  showCart = false,
  isBannerShownOnInitialLoad = false,
  keyboardShouldPersistTaps="always",
  ...restProps
}: any) => {
  //ScrollTo Top Functionality
  const scrollRef = useRef<ScrollView>();
  const [showPageUp, setShowPageUp] = useState(false);

  const _goToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <SafeAreaView {...restProps} style={[styles.container, containerStyle]}>
      <Header
        headerContainerStyle={headerContainerStyle}
        showCart={showCart}
        isBannerShownOnInitialLoad={isBannerShownOnInitialLoad}
      />
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        nestedScrollEnabled={nestedScrollEnabled}
        onScroll={e => {
          setShowPageUp(e.nativeEvent.contentOffset.y > 100 ? true : false);
        }}
        ref={scrollRef}
        style={[{backgroundColor: COLORS.white}, scrollContainerStyle]}
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
              style={{width: 90, height: 90,justifyContent:'center',alignItems:'center',marginTop: 10}}>
              <Image source={images.uparrow} style={{width: 13, height: 7,marginTop: -10}} />
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
  },
});
