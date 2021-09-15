import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Linking} from 'react-native';
import {useCategories} from '../../apollo/controllers/getCategories.Controller';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {
  footerData,
  footerSocialIcons,
  IFooterChildData,
  IFooterSocialIcons,
} from '../../utils/data/FooterData';
import Divider from '../dividers/Divider';
import VerticalDivider from '../dividers/VerticalDivider';
import Spacer from '../Spacer';
import ActivityIndicator from '../spinners/ActivityIndicator';
import Text from '../text/Text';

export default function Footer({containerStyle = {}}) {
  const [selectedState, setSelectedState] = useState({id: '', toggle: false});

  const {getCategories, loading, error, categoryData} = useCategories({
    pageSize: 20,
  });

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  console.log('categorydata  in footer', categoryData);

  const _lastFooterContent = (text: string, link: any) => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: 5}}
        onPress={() => (link !== '' ? Linking.openURL(link) : {})}>
        <Text containerStyle={{fontSize: SIZES.body4, fontFamily:FONTS.AvenirBook, lineHeight: 20, letterSpacing: 0.3, color: COLORS.white}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.footerContainer, containerStyle]}>
      {footerData.map((item, index) => {
        return (
          <View key={item.id} style={{marginBottom: 30}}>
            <TouchableOpacity
              onPress={() =>
                setSelectedState({
                  id: item.title,
                  toggle: !selectedState.toggle,
                })
              }
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                containerStyle={{
                  fontSize: SIZES.body3,
                  fontFamily: FONTS.BebasNeueBold,
                  letterSpacing: 4.8,
                  color: COLORS.white,
                }}>
                {item.title}
              </Text>
              <Image
                source={icons.Chevron}
                style={{
                  width: 14,
                  height: 8,
                  tintColor: 'white',
                  transform: [
                    {
                      rotate:
                        item.title == selectedState.id && selectedState.toggle
                          ? '0deg'
                          : '180deg',
                    },
                  ],
                }}
              />
            </TouchableOpacity>
            {item.title == selectedState.id &&
              selectedState.toggle &&
              item.children.map((childItem: IFooterChildData, index) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      childItem.link != ''
                        ? Linking.openURL(childItem.link)
                        : {}
                    }
                    style={{marginTop: 20}}
                    key={childItem.id}>
                    <Text
                      containerStyle={{
                        fontSize: SIZES.body3,
                        color: COLORS.white,
                        fontFamily: FONTS.AvenirBook,
                        letterSpacing: 0.7,
                      }}>
                      {childItem.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        );
      })}
      <Spacer mt={28.5} />
      <Divider width={222} height={1} />
      <Spacer mt={11.2} />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {footerSocialIcons?.map((item: IFooterSocialIcons, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                item.link;
              }}
              key={item.id}>
              <Image
                source={item.icon}
                style={{width: 17, height: 14, marginHorizontal: 10}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <Spacer mt={5.8} />
      <View
        style={styles.lastFooterContent}>
        {_lastFooterContent(
          '© SeneGence International 2021',
          'http://integration-5ojmyuq-yhtn2v2qno5pk.us-a1.magentosite.cloud/home',
        )}
        <VerticalDivider />
        {_lastFooterContent(
          'Copyright DMCA Policy',
          'https://seneweb.senegence.com/ca/copyright-dmca-policy/',
        )}
        <VerticalDivider />
        {_lastFooterContent(
          'Privacy Policy',
          'https://seneweb.senegence.com/ca/privacy-policy/',
        )}
        <VerticalDivider />
        {_lastFooterContent(
          'Terms & Conditions',
          'https://seneweb.senegence.com/ca/terms-and-conditions/',
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {},
  lastFooterContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 14,
    justifyContent: 'center',
  }
});
