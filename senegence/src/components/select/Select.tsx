import React, { useEffect } from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import Astrick from '../Astrick';
import Spacer from '../Spacer';
import Text from '../text/Text';
import OutlineTextInput from '../textInputs/OutlineTextInput';
import OutlineTextInputMultiline from '../textInputs/OutlineTextInputMultiline';

export interface ISelectProps {
  title?: string;
  isMandatory?: boolean;
  data?: Array<{full_name_locale: string}>;
  setSelectedValue?: any;
  selectedValue?:any;
  checked?: boolean;
  defaultButtonText?: string;
  containerButtonStyle?:{}
}

export default function Select({
  title,
  isMandatory,
  defaultButtonText="Please Select...",
  data = [{full_name_locale : 'No Data'}],
  setSelectedValue,
  selectedValue="",
  checked=false,
  containerButtonStyle={}
}: ISelectProps) {

  useEffect(() => {
    
  }, [checked])

  return (
    <View>
      <>
        <Text>
          {title} {isMandatory && <Astrick />}
        </Text>
        <Spacer mt={4} />

        <SelectDropdown
          renderDropdownIcon={() => (
            <Image
              source={images.chervondown}
              style={{
                width: 16.9,
                height: 8.9,
                resizeMode: 'contain',
              }}
            />
          )}
          defaultValue={selectedValue}
          defaultButtonText={defaultButtonText}
          buttonStyle={[{
            backgroundColor: 'rgba(244, 244, 244, 0.5)',
            width: '100%',
            height: 40,
          },containerButtonStyle]}
          buttonTextStyle={{
            right: 0,
            position: 'absolute',
            color: COLORS.swatch,
            fontSize: SIZES.body4,
            fontFamily: FONTS.AvenirLight,
            letterSpacing: 0.7,
            flex: 1,
            flexWrap: 'wrap'
          }}
          data={data}
          onSelect={(selectedItem, index) => {
            if(selectedItem === undefined){
              return ;
            }
            selectedItem ? setSelectedValue(selectedItem?.full_name_locale) : setSelectedValue("");
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return checked ? selectedValue : selectedItem?.full_name_locale;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item?.full_name_locale;
          }}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({});
