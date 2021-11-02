import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Linking} from 'react-native';
import {useCategories} from '../../apollo/controllers/getCategories.Controller';
import { ItemChildrenCategory } from '../../apollo/services/apollo/queries/categories/getCategories';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {
  footerData,
  footerSocialIcons,
  IFooterChildData,
  IFooterSocialIcons,
} from '../../utils/data/FooterData';
import { ScreenNames } from '../../utils/screenNames';
import Divider from '../dividers/Divider';
import VerticalDivider from '../dividers/VerticalDivider';
import Spacer from '../Spacer';
import ActivityIndicator from '../spinners/ActivityIndicator';
import Text from '../text/Text';
import Collapsible from 'react-native-collapsible';

export default function Footer({containerStyle = {}}) {
  const navigation = useNavigation<any>();
  const [selectedState, setSelectedState] = useState({id: '', toggle: false});

  const {getCategories, loading, error, categoryData} = useCategories({
    pageSize: 20,
  });

  useEffect(() => {
    getCategories();
  }, [getCategories]);


  const _lastFooterContent = (text: string, link: any, name = "") => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: 5}}
        onPress={() => (link !== '' ? Linking.openURL(link) : navigation.navigate(name))}>
        <Text containerStyle={{fontSize: SIZES.body4, fontFamily:FONTS.AvenirBook, lineHeight: 20, letterSpacing: 0.3, color: COLORS.white}}>{text}</Text>
      </TouchableOpacity>
    );
  };


  const _renderTopFooterMenu = (children: ItemChildrenCategory[]) => {
    return children.map((childItem, index) => {
      return <View key={childItem.name} style={{marginBottom: 20}}>
        <TouchableOpacity style={[styles.linkWrapper]} onPress={() => setSelectedState({id: childItem.name, toggle: !selectedState.toggle})}>
          <Text containerStyle={[styles.title, {marginLeft: -10}]}> {childItem.name} </Text>
          <Image
                source={icons.Chevron}
                style={{
                  width: 14,
                  height: 8,
                  tintColor: 'white',
                  transform: [
                    {
                      rotate:
                        childItem.name == selectedState.id && selectedState.toggle
                          ? '0deg'
                          : '180deg',
                    },
                  ],
                }}
              />
        </TouchableOpacity>
        {childItem?.children.map((item,index) => {
          return <Collapsible collapsed={!(childItem.name === selectedState.id && selectedState.toggle)}>
          <TouchableOpacity onPress={() => navigation.navigate('CategoryItem', {categoryData: item})}>
            <Text containerStyle={[styles.childName, {textTransform:'capitalize'}]}>{item.children.length > 0 && item.name}</Text>
          </TouchableOpacity>
          </Collapsible>
        })}
      </View>
    })
  }


  return (
    <View style={[containerStyle]}>
      {categoryData?.categories?.items?.map((item, index) => {
        return _renderTopFooterMenu(item?.children)
      })}
      {footerData.map((item, index) => {
        return (
          <View key={item.id}>
            <View style={[styles.linkWrapper,{marginBottom: 20}]}>


            <TouchableOpacity
              onPress={() => item.route ? navigation.navigate(item.route) :
                setSelectedState({
                  id: item.title,
                  toggle: !selectedState.toggle,
                })
              }
              >
              <Text
                containerStyle={styles.title}>
                {item.title}
              </Text>
              
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedState({
                  id: item.title,
                  toggle: !selectedState.toggle,
                })}>
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
            </View>

            {
              item.children.map((childItem: IFooterChildData, index) => {
                return (
                  <Collapsible collapsed={!(item.title === selectedState.id &&
                    selectedState.toggle)}>
                  <TouchableOpacity
                    onPress={() =>
                      childItem?.link
                        ? Linking.openURL(childItem?.link)
                        : navigation.navigate(childItem?.onPress)
                    }
                    key={childItem.id}>
                    <Text
                      containerStyle={[styles.childName,index == item.children.length - 1 && {marginBottom: 20}]}>
                      {childItem.name}
                    </Text>
                  </TouchableOpacity>
                  </Collapsible>
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
                Linking.openURL(item.link);
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
          '',
          ScreenNames.CopyrightDMCAPolicy
        )}
        <VerticalDivider />
        {_lastFooterContent(
          'Privacy Policy',
          'https://seneweb.senegence.com/ca/privacy-policy/',
        )}
        <VerticalDivider />
        {_lastFooterContent(
          'Terms & Conditions',
          '',
          ScreenNames.TermsAndConditions,
        )}
      </View>
      <Spacer mt={20} />

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.body3,
    fontFamily: FONTS.BebasNeueBold,
    letterSpacing: 4.8,
    color: COLORS.white,
  },
  childName:{
    fontSize: SIZES.body3,
    color: COLORS.white,
    fontFamily: FONTS.AvenirBook,
    letterSpacing: 0.7,
    lineHeight: 32
  },
  linkWrapper:{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'},
  lastFooterContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 14,
    justifyContent: 'center',
  }
});
