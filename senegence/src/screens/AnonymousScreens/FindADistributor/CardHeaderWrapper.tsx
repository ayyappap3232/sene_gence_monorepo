import React from 'react';
import {StyleSheet, View} from 'react-native';

//User defined Imports
import OutlineButton from 'components/buttons/OutlineButton';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import {COLORS, SIZES} from '../../../constants';
import {globalStyles} from 'globalstyles/GlobalStyles';

const Results = ({children}: any) => {
    return <>
        <View>
           {children}
        </View>
    </>
}


export default function CardTabHeaderWrapper({children, title,results,inputBoxValue1,searchResults}: any) { 
    const handleSearch = () => {
        if(inputBoxValue1){
            //Get the results from the backend by taking the inputs from the inputBoxValues
            searchResults(inputBoxValue1)
        }else{
            searchResults(null)
        }
    }
    
    return (
    <View style={[globalStyles.contactCard, {alignSelf: 'center'}]}>
      <Spacer mt={30} />
      <TextWithUnderLine
        underLineStyle={{lineHeight: 40, letterSpacing: 3, color: COLORS.text}}
        title={title}
      />
{children}
      <OutlineButton
        title={'Search'}
        onPress={() => handleSearch()}
        containerStyle={{
          width: 291,
          height: 51,
          borderWidth: 2,
          borderColor: COLORS.footerColor,
          backgroundColor: COLORS.footerColor,
          alignSelf:'center'
        }}
        textStyleContainer={{color: COLORS.white}}
      />
      <Spacer mt={30} />
      {
          results && <Text
          containerStyle={{
            textAlign: 'center',
            fontSize: SIZES.h3,
            lineHeight: 24,
            letterSpacing: 2,
            color: COLORS.text,
          }}>
          02 Search Results found in California
        </Text>
      }
      <Results>
        {results}
      </Results>    
    </View>
  );
}

const styles = StyleSheet.create({});
