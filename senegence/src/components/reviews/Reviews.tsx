import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import Divider from '../dividers/Divider';
import Spacer from '../Spacer';
import TextWithUnderLine from '../text/TextWithUnderLine';
import TextInputWithCaretDisable from '../textInputs/TextInputWithCaretDisable';
import ReviewerCard from './ReviewerCard';

export default function Reviews() {
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
      <ReviewerCard />
      <Spacer mt={10} />

    </View>
  );
}

const styles = StyleSheet.create({});
