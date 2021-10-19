import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, images} from '../../constants';
import {filterNames, sortingNames} from '../../utils/data/FilterData';
import FilterOptionItem from './FilterOptionItem';
import ModalSelector from 'react-native-modal-selector';
import {globalStyles} from '../../globalstyles/GlobalStyles';
import { useSearchCategoryList } from '../../apollo/controllers/getSearchCategoryList.Controller';
import { useGetSortFields } from '../../apollo/controllers/getSortFields.Controller';
import TextInputWithCaretDisable from '../textInputs/TextInputWithCaretDisable';

export default function SortByFilter({textInputValue, setTextInputValue,setFilteredValue}: any) {
  //filter Selector Options
  let index = 0;
  const [checked, setChecked] = useState<number>();

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
          setChecked(option.key);
        }}>
          <TextInputWithCaretDisable placeholder="Featured Products" textInputValue={textInputValue}/>                                                     
      </ModalSelector>
    </>
  );
}

const styles = StyleSheet.create({});
