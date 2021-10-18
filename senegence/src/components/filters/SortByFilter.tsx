import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, images} from '../../constants';
import {filterNames, sortingNames} from '../../utils/data/FilterData';
import FilterOptionItem from './FilterOptionItem';
import ModalSelector from 'react-native-modal-selector';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import { useSearchCategoryList } from '../../apollo/controllers/getSearchCategoryList.Controller';
import { useGetSortFields } from '../../apollo/controllers/getSortFields.Controller';

export default function SortByFilter({textInputValue, setTextInputValue,setFilteredValue}: any) {
  //filter Selector Options
  let index = 0;
  const [checked, setChecked] = useState();

  //Get Sort Fields
  let {getSortFields, loading, error, sortFields} =useGetSortFields();

  useEffect(() => {
    getSortFields();
  }, [getSortFields])


  let newFiltersArray = [];


  for (index = 0;  index < sortFields?.products?.sort_fields?.options?.length; index++){
    newFiltersArray.push({
      key: index,
      label: sortFields?.products?.sort_fields?.options[index]?.label,
      filter: sortFields?.products?.sort_fields?.options[index]?.value,
      component: (
        <FilterOptionItem
          key={index}
          index={index}
          checked={checked}
          setChecked={setChecked}
          title={sortFields?.products?.sort_fields?.options[index]?.label}
        />
      ),
    })

  }

  return (
    <>
      <ModalSelector
        data={newFiltersArray}
        initValue="Featured Products"
        supportedOrientations={['portrait']}
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        backdropPressToClose={true}
        // overlayStyle={{backgroundColor: 'transparent'}}
        optionContainerStyle={[
          globalStyles.shadowEffect,
          {backgroundColor: COLORS.white, marginBottom: 0},
        ]}
        cancelText={''}
        cancelStyle={{backgroundColor: 'transparent'}}
        onChange={option => {
          console.log('options', option.filter)
          setTextInputValue(option.label);
          setFilteredValue(option.filter);
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
