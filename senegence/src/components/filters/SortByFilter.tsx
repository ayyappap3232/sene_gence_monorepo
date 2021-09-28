import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, images} from '../../constants';
import {filterNames} from '../../utils/data/FilterData';
import FilterOptionItem from './FilterOptionItem';
import ModalSelector from 'react-native-modal-selector';
import { globalStyles } from '../../globalstyles/GlobalStyles';

export default function SortByFilter({textInputValue, setTextInputValue}: any) {
  //filter Selector Options
  let index = 0;
  const [checked, setChecked] = useState(index);
  const data = [
    {
      key: index++,
      label: filterNames.NEWARRIVALS,
      component: (
        <FilterOptionItem
          index={index}
          checked={checked}
          setChecked={setChecked}
          title={filterNames.NEWARRIVALS}
        />
      ),
    },
    {
      key: index++,
      label: filterNames.POPULARITY,
      component: (
        <FilterOptionItem
          index={index}
          checked={checked}
          setChecked={setChecked}
          title={filterNames.POPULARITY}
        />
      ),
    },
    {
      key: index++,
      label: filterNames.TOPRATED,
      component: (
        <FilterOptionItem
          index={index}
          checked={checked}
          setChecked={setChecked}
          title={filterNames.TOPRATED}
        />
      ),
    },
    {
      key: index++,
      label: filterNames.PRICEHIGHTOLOW,
      component: (
        <FilterOptionItem
          index={index}
          checked={checked}
          setChecked={setChecked}
          title={filterNames.PRICEHIGHTOLOW}
        />
      ),
    },
    {
      key: index++,
      label: filterNames.PRICELOWTOHIGHT,
      component: (
        <FilterOptionItem
          index={index}
          checked={checked}
          setChecked={setChecked}
          title={filterNames.PRICELOWTOHIGHT}
        />
      ),
    },
  ];
  return (
    <>
      <ModalSelector
        data={data}
        initValue="Featured Products"
        supportedOrientations={['portrait']}
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        backdropPressToClose={true}
        overlayStyle={{backgroundColor:'transparent'}}
        optionContainerStyle={[globalStyles.shadowEffect,{backgroundColor:COLORS.white,marginBottom: 0}]}
        cancelText={""}
        cancelStyle={{backgroundColor:'transparent'}}
        onChange={option => {
          setTextInputValue(option.label);
          setChecked(option.key + 1);
        }}>
        <View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: COLORS.border1,
              padding: 10,
              paddingRight: 30,
              height: 40,
            }}
            editable={false}
            placeholder="Featured Products"
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
