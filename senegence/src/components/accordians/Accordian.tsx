import React, {useState} from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import RenderHtml from 'react-native-render-html';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Text from '../text/Text';

export default function CustomAccordian({
  collapsibleData,
  marginHorizontal = 0,
  borderTopWidth = 0,
  borderBottomWidth = 0,
  borderTopColor = COLORS.border,
  borderBottomColor = COLORS.border,
  noContentTextFound=""
}) {
  const [activeSections, setActiveSections] = useState([]);

  const _renderHeader = (section: any, index: any,isActive: boolean) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopWidth: borderTopWidth,
          borderBottomWidth: borderBottomWidth,
          borderBottomColor: borderBottomColor,
          borderTopColor: borderTopColor,
          paddingVertical: 10,
        }}>
        <Text
          containerStyle={styles.title}>
          {section.title}
        </Text>
        {!isActive ? (
          <Image source={images.plus} style={{width: 16, height: 16}} />
        ) : (
          <Image source={images.minus} style={{width: 16, height: 2}} />
        )}
      </View>
    );
  };

  const _renderContent = (section: any) => {
    const source = {
        html: section.content
    }
    return section.content ? (
      <View style={{width:SIZES.width / 1.2}}>
          <RenderHtml contentWidth={SIZES.width}  source={source} />
      </View>
    ) : (
      <Text containerStyle={{textAlign: 'center',marginVertical: 20}}>{noContentTextFound}</Text>
    );
  };

  const _updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  return (
    <Accordion
      sections={collapsibleData}
      activeSections={activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
      underlayColor={COLORS.border}
      sectionContainerStyle={{width: SIZES.width - 50}}
    />
  );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: FONTS.AvenirMedium,
        fontSize: SIZES.body3,
        textTransform: 'uppercase',
        letterSpacing: 0.32,
        color: COLORS.text,
      }
});
