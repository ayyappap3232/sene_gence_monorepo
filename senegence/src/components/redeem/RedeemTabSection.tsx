import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import DistributorID from '../../screens/AnonymousScreens/FindADistributor/DistributorID';
import Name from '../../screens/AnonymousScreens/FindADistributor/Name';
import {freeSampleData} from '../../utils/data/FreeSampleData';
import OutlineButton from '../buttons/OutlineButton';
import Overlay from '../overlays/Overlay';
import Spacer from '../Spacer';
import Text from '../text/Text';

const t1 = 'T1';
const t2 = 'T2';
const tabsList = [
  {
    id: t1,
    name: 'Free Sample',
  },
  {
    id: t2,
    name: 'Free Beauty Tool',
  },
];

export default function RedeemTabSection() {
  const [selectedTab, setSelectedTab] = useState('T1');

  const _renderItem = ({item}: any) => {
    return (
      <React.Fragment key={item.id}>
        <ImageBackground
          source={item.sampleImage}
          style={{
            width: 248,
            height: 214,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 5,
            paddingHorizontal: 12,
          }}
          resizeMode="cover">
          <Overlay
            containerStyle={{backgroundColor: 'rgba(255,255,255,0.3)'}}
          />
          <Text>{item.text}</Text>
          <Spacer mt={10} />
          <OutlineButton
            title={item.addItemText}
            containerStyle={[
              globalStyles.bannerBtnBlueBackground,
              {alignSelf: 'flex-start', width: 118},
            ]}
            textStyleContainer={[globalStyles.bannerBtnTextWhite]}
            onPress={() => {}}
          />
        </ImageBackground>
      </React.Fragment>
    );
  };

  const _freeSample = () => {
    return (
      <FlatList
        nestedScrollEnabled={true}
        data={freeSampleData}
        renderItem={_renderItem}
        keyExtractor={(_, index) => index.toString()}
        style={{maxHeight: SIZES.height / 1.2}}
      />
    );
  };

  const _freeBeautyTool = () => {
    return <Text> Free Beauty Tool </Text>;
  };

  const _renderSelectedTab = (selectedTab: string) => {
    switch (selectedTab) {
      case t1:
        return _freeSample();
      case t2:
        return _freeBeautyTool();
      default:
        break;
    }
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 60}}>
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
      <Spacer mt={9.5} />
      {_renderSelectedTab(selectedTab)}
    </View>
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontFamily: FONTS.BebasNeueRegular,
    fontSize: SIZES.h3,
    lineHeight: 40,
    letterSpacing: 2.2,
    color: COLORS.unselectedColor,
  },
  tabTextWrapper: {
    marginRight: 20,
  },
  borderBottomColor: {
    borderBottomColor: COLORS.tabBottomColor,
    borderBottomWidth: 4,
  },
});
