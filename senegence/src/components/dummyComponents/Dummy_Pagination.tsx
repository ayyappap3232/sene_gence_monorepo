import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../constants';
import images from '../../constants/images';
import { ReviewerData } from '../../utils/data/ReviewerData';

export default function DummyPagination() {
  const [currentIndex, setCurrentIndex] = useState(1);
    return (
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
    )
}

const styles = StyleSheet.create({
  chervon: {width: 8.9, height: 16.9},
  currentIndexStyles: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.swatch,
    fontWeight: 'bold',
    alignItems: 'center',
  },
})
