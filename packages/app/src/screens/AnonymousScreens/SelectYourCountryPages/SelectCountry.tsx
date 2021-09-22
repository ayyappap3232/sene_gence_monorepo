import React from 'react';
import {Image, ImageBackground, StyleSheet, View, FlatList} from 'react-native';
import Divider from '../../../components/dividers/Divider';
import {ScrollToTopContainer} from '../../../components/ScrollToTopContainer';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import {IContactUsData} from '../../../utils/data/ContactUsData';
import {countriesData, ICountriesData, IData} from '../../../utils/data/CountryData';

export default function SelectCountry() {
  const _selectYourCountry = () => {
    return (
      <View style={{marginHorizontal: 10}}>
        <ImageBackground
          source={images.worldmap}
          style={{width: 334, height: 278}}>
          <Spacer mt={30} />
          <Text containerStyle={styles.selectCountry}>Select Your Country</Text>
        </ImageBackground>
      </View>
    );
  };

  const _countryMapsList = (item: IData[]) =>  {
      console.log('item',item)
    return item && item.map((data,index) => {
        return <><View key={`${index}${data.countryName}`} style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              containerStyle={{
                fontSize: SIZES.body4,
                fontFamily: FONTS.AvenirHeavy,
                letterSpacing: 0.7,
                color: COLORS.text,
                textTransform: 'none',
              }}>
              {data.countryName}
            </Text>
            <Image
              source={data.flag}
              style={{width: 24, height: 24, marginLeft: 5}}
            />
          </View>
          <Spacer mt={2} />
          {data?.languages && <View>
            <Text>{data.languages}</Text>
          </View>}
          <Spacer mt={11} />
          </>
    })
  
  }

  const _renderCountriesItem = (item: ICountriesData) => {
    return (
      <View key={item.id} style={[globalStyles.contactCard,{marginHorizontal: 10}]} key={item.id}>
        <Divider
          width={334}
          height={7}
          containerStyle={{backgroundColor: COLORS.primary2}}
        />
        <Spacer mt={25.3} />
        <View style={{alignItems: 'center'}}>
          <Text
            containerStyle={{
              fontSize: SIZES.h3,
              fontFamily: FONTS.BebasNeueRegular,
              letterSpacing: 2,
              color: COLORS.text,
            }}>
            {item.name}
          </Text>
          <Spacer mt={10} />
          <Image source={images.americamap} style={{width: 104, height: 118}} />
          <Spacer mt={13} />
          {_countryMapsList(item?.data)}
          <Spacer mt={40} />

        </View>
      </View>
    );
  };

  const _countriesFlatList = () => {
    return (
      <FlatList
        data={countriesData}
        renderItem={({item}) => _renderCountriesItem(item)}
      />
    );
  };

  return (
    <ScrollToTopContainer>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        {_selectYourCountry()}
        <Spacer mt={30} />
        {_countriesFlatList()}
      </View>
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  selectCountry: {
    fontSize: SIZES.veryLargeTitle,
    fontFamily: FONTS.BebasNeueBold,
    lineHeight: 80,
    letterSpacing: 7,
    color: COLORS.white,
    textAlign: 'center',
  },
});
