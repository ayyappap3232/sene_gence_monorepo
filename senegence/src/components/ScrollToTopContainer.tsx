import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FAB from 'react-native-fab';
import {PageUp} from '../../assets/svgs';
import Footer from './footers/Footer';
import Header from './headers/Header';
import {COLORS} from '../constants';
import { useNavigation } from '@react-navigation/native';

export const ScrollToTopContainer = ({children,nestedScrollEnabled = true, containerStyle={},scrollContainerStyle={}, scrollContentContainerStyle={}, headerContainerStyle={}}: any) => {
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
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Header headerContainerStyle={headerContainerStyle}/>
      <ScrollView
      scrollEventThrottle={16}
      keyboardShouldPersistTaps="always"
        nestedScrollEnabled={nestedScrollEnabled}
        onScroll={e => {
          setShowPageUp(e.nativeEvent.contentOffset.y > 100 ? true : false);
        }}
        ref={scrollRef}
        style={[{backgroundColor: COLORS.white},scrollContainerStyle]}
        contentContainerStyle={[{flexGrow: 1},scrollContentContainerStyle]}>
        {children}
        <Footer
          containerStyle={{
            paddingHorizontal: 27,
            paddingTop: 28.6,
            backgroundColor: COLORS.footerColor,
          }}
        />
      </ScrollView>
      <FAB
        onClickAction={() => {
          _goToTop();
        }}
        
        visible={showPageUp}
        iconTextComponent={<PageUp style={{elevation: 2}} />}
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
