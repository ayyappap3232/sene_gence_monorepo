import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, images, SIZES} from '../../constants';
import {filterNames, sortingNames} from '../../utils/data/FilterData';
import FilterOptionItem from './FilterOptionItem';
import ModalSelector from 'react-native-modal-selector';
import {globalStyles} from '../../globalstyles/GlobalStyles';

export default function ModalPopup({ setTextInputValue,textInputValue, data,placeholder}: any) {
  //filter Selector Options
  const [checked, setChecked] = useState();

  return (
    <>
      <ModalSelector
        data={data}
        initValue={placeholder}
        supportedOrientations={['portrait']}
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        backdropPressToClose={true}
        overlayStyle={{backgroundColor: 'transparent'}}
        optionContainerStyle={[
          globalStyles.shadowEffect,
          {backgroundColor: COLORS.white, marginBottom: 0},
        ]}
        cancelText={''}
        cancelStyle={{backgroundColor: 'transparent'}}
        onChange={option => {
          setTextInputValue(option.label);
          setChecked(option.label);
        }}>
        <View style={{marginHorizontal: 10,marginTop: 10}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: COLORS.border1,
              padding: 10,
              paddingRight: 30,
              height: 40,
              width: SIZES.width/2 - 40,
              
            }}
            editable={false}
            placeholder={placeholder}
            placeholderTextColor={COLORS.border1}
            value={textInputValue}
          />
          <Image
            source={images.dropdowncaret}
            style={{
              width: 12,
              height: 12,
              position: 'absolute',
              right: 10,
              top: 15,
            }}
          />
        </View>
      </ModalSelector>
    </>
  );
}

const styles = StyleSheet.create({});
