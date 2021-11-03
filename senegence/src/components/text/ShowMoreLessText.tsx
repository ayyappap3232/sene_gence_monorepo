import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

//User defined Imports
import {COLORS, FONTS, SIZES} from '../../constants';
import Text from './Text';

export default function ShowMoreLessText({text, targetLines, moreTitle, lessTitle, textContainerStyle={}}: any) {
  const [showMore, setShowMore] = useState(false);
  const [targetedLines, setTargetedLines] = useState(targetLines);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    setTargetedLines(!showMore ? text.length : targetLines);
  };

  return (
    <>
      <Text numberOfLines={targetedLines} containerStyle={textContainerStyle}>{text}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => toggleShowMore()}>
        <Text
          containerStyle={{
            fontFamily: FONTS.AvenirMedium,
            fontSize: SIZES.body4,
            lineHeight: 26,
            letterSpacing: 0.28,
            color: COLORS.primary2,
          }}>
          {showMore ? lessTitle :moreTitle}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
