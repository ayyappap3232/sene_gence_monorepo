import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, images, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import {ReviewerData} from '../../utils/data/ReviewerData';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import TextWithUnderLine from '../text/TextWithUnderLine';
import TextInputWithCaretDisable from '../textInputs/TextInputWithCaretDisable';
import ReviewerCard from './ReviewerCard';

//!Todo: get the reviewers data from the backend

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <View>
      <TextWithUnderLine title={'Review'} />
      <Spacer mt={20} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInputWithCaretDisable
          placeholder={'Most Recent'}
          textInputValue={'Most Recent'}
        />
        <View>
          <Text
            style={[
              globalStyles.text_avenir_heavy,
              {
                textTransform: 'uppercase',
                color: COLORS.primary2,
                marginRight: 20,
              },
            ]}>
            Write a review
          </Text>
        </View>
      </View>
      <Spacer mt={20} />

      <Divider backgroundColor={COLORS.border} width={SIZES.width} height={1} />
      <Spacer mt={10} />
      <ReviewerCard data={ReviewerData} />
      <Spacer mt={20} />

      {/* // !Note: Need to work on pagination for reviews section */}
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            currentIndex > 1 && setCurrentIndex(currentIndex - 1);
          }}
          style={{marginHorizontal: 10}}>
          <Image
            source={images.leftChevron}
            style={styles.chervon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {ReviewerData.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                {marginHorizontal: 5},
                currentIndex === index + 1 && styles.currentIndexStyles,
              ]}>
              <Text
                style={[currentIndex === index + 1 && {fontWeight: 'bold'}]}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={() => {
            currentIndex < ReviewerData.length &&
              setCurrentIndex(currentIndex + 1);
          }}
          style={{marginHorizontal: 10}}>
          <Image
            source={images.rightChevron}
            style={styles.chervon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Spacer mt={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  chervon: {width: 8.9, height: 16.9},
  currentIndexStyles: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.swatch,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
