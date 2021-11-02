import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

//User defined Imports
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import {COLORS, FONTS, SIZES} from '../../../constants';
import CityOrState from './CityOrState';
import DistributorID from './DistributorID';
import Name from './Name';
import ZipCode from './ZipCode';

const t1 = 'T1';
const t2 = 'T2';
const t3 = 'T3';
const t4 = 'T4';
const tabsList = [
  {
    id: t1,
    name: 'Name',
  },
  {
    id: t2,
    name: 'Distributor Id',
  },
  {
    id: t3,
    name: 'City / State',
  },
  {
    id: t4,
    name: 'Zip Code',
  },
];

export default function DistributorTabSection() {
  const [selectedTab, setSelectedTab] = useState('T1');

  const _renderSelectedTab = (selectedTab: string) => {
    switch (selectedTab) {
      case t1:
        return <Name />;
      case t2:
        return <DistributorID />;
      case t3:
        return <CityOrState />;
      case t4:
        return <ZipCode />;
      default:
        break;
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabsList.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              onPress={() => setSelectedTab(item.id)}>
              <View
                style={[
                  styles.tabTextWrapper,
                  selectedTab === item.id && styles.borderBottomColor,
                ]}>
                <Text
                  containerStyle={[
                    styles.tabText,
                    selectedTab === item.id && {color: COLORS.pureBlack},
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Spacer mt={9.5}/>
      {_renderSelectedTab(selectedTab)}
    </View>
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontFamily: FONTS.BebasNeueRegular,
    fontSize: SIZES.h2,
    lineHeight: 40,
    letterSpacing: 2.2,
    color: COLORS.unselectedColor,
  },
  tabTextWrapper: {
    marginRight: 50,
  },
  borderBottomColor: {
    borderBottomColor: COLORS.tabBottomColor,
    borderBottomWidth: 4,
  },
});
