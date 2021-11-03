import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

//User defined Imports
import {COLORS} from '../../constants';
import FilterOptionItem from './FilterOptionItem';
import {globalStyles} from 'globalstyles/GlobalStyles';
import { useGetSortFields } from 'apollo/controllers/getSortFields.Controller';
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
    newFiltersArray?.length > 0 ? <>
      <ModalSelector
        data={newFiltersArray}
        ListEmptyComponent={() => <Text>No Data Found</Text>}
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
          setTextInputValue(option.label);
          setFilteredValue(option.filter);
          setChecked(option.key);
        }}>
          <TextInputWithCaretDisable placeholder="Featured Products" textInputValue={textInputValue}/>                                                     
      </ModalSelector>
    </> : null
  );
}

const styles = StyleSheet.create({});
