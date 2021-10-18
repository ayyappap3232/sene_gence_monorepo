import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import {ReviewerData, IReviewerData} from '../../utils/data/ReviewerData';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import Text from '../text/Text';

const ReviewCardItem = ({item}: any) => {
  return (
    <View key={item.id} style={{marginBottom: 10, width: SIZES.width}}>
      <Text containerStyle={[globalStyles.text_avenir_heavy]}>{item.name}</Text>
      <Spacer mt={10} />
      <View style={styles.mainView}>
        <View style={styles.mainView}>
          <Image source={images.dot} style={styles.dot} />
          <Text containerStyle={styles.text}>Verified Buyer</Text>
        </View>
        <View style={styles.mainView}>
          <Image source={images.dot} style={styles.dot} />
          <Text containerStyle={styles.text}>Distributor</Text>
        </View>
      </View>
      <Spacer mt={10} />
      <Divider backgroundColor={COLORS.border} width={SIZES.width} height={1} />
      <Spacer mt={10} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <AirbnbRating
          isDisabled={true}
          defaultRating={item.ratingCount}
          size={14}
          showRating
          onFinishRating={() => {}}
          selectedColor={COLORS.primary2}
          ratingContainerStyle={{marginTop: 0, height: 1}}
        />
        <Text
          containerStyle={[
            globalStyles.text_avenir_medium,
            {
              fontSize: SIZES.body5,
              letterSpacing: 0.3,
              color: COLORS.assistColor,
              marginRight: 20,
            },
          ]}>
          {item.date}
        </Text>
      </View>
      <Spacer mt={10}/>
      <Text>{item.title}</Text>
      <Spacer mt={10}/>
      <Text>{item.reviewComment}</Text>
      <Spacer mt={10}/>
      <Divider backgroundColor={COLORS.border} width={SIZES.width} height={1} />
    </View>
  );
};

export default function ReviewerCard() {
  return ReviewerData.map((item, index) => {
    return <ReviewCardItem key={index} item={item} />;
  });
}

const styles = StyleSheet.create({
  mainView: {flexDirection: 'row', alignItems: 'center', marginRight: 10},
  dot: {width: 10, height: 10, resizeMode: 'cover', marginRight: 10},
  text: {
    fontFamily: FONTS.AvenirMedium,
    fontSize: SIZES.body5,
    letterSpacing: 0.3,
    lineHeight: 20,
    color: COLORS.assistColor,
  },
});
