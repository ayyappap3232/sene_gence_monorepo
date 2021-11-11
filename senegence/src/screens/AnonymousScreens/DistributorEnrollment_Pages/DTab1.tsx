import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import DistributorWrapper from './DistributorWrapper';
import Svg, {Path} from 'react-native-svg';
import TextWithUnderLine from 'components/text/TextWithUnderLine';
import Spacer from 'components/Spacer';
import Text from 'components/text/Text';
import RadioButton from 'components/buttons/radioButtons/RadioButton';
import {globalStyles} from 'globalstyles/GlobalStyles';
import Divider from 'components/dividers/Divider';
import OutlineTextInput from 'components/textInputs/OutlineTextInput';
import {_inputItem} from 'components/textInputs/InputItemWithAsterik';
import OutlineButton from 'components/buttons/OutlineButton';

export default function DTab1() {
  const [index, setIndex] = useState(-1);

  const handleChecked = (index: number) => {
    setIndex(index);
  };

  const _OrDivider = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Divider width={75} backgroundColor={COLORS.border} />
        <Text>OR</Text>
        <Divider width={75} backgroundColor={COLORS.border} />
      </View>
    );
  };

  return (
    <DistributorWrapper>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <Spacer mt={20} />
        <View style={{padding: 10}}>
          <TextWithUnderLine title={'lets get started'} />
          <Spacer mt={19} />
          <Text containerStyle={{textAlign: 'center'}}>
            As a direct sales organization, new Independent Distributors start
            their business under an existing Distributor or sponsor.
          </Text>
          <Spacer mt={30} />
          <View>
            <View style={[globalStyles.row, {alignItems: 'flex-start'}]}>
              <TouchableOpacity onPress={() => handleChecked(0)}>
                <RadioButton checked={0} index={index} />
              </TouchableOpacity>
              <Text
                containerStyle={{flexWrap: 'wrap', flex: 1, marginLeft: 10}}>
                Yes, I have a Distributor / Sponsor I’d like to start my
                business under
              </Text>
            </View>
            <Spacer mt={10} />
            <View style={[globalStyles.row, {alignItems: 'flex-start'}]}>
              <TouchableOpacity onPress={() => handleChecked(1)}>
                <RadioButton checked={1} index={index} />
              </TouchableOpacity>
              <Text
                containerStyle={{flexWrap: 'wrap', flex: 1, marginLeft: 10}}>
                No, I don’t have a Distributor / Sponsor identified yet.​
              </Text>
            </View>
          </View>
          <Spacer mt={40} />
          <Text
            containerStyle={[
              globalStyles.text_avenir_heavy,
              {textTransform: 'uppercase'},
            ]}>
            FIND YOUR DISTRIBUTOR
          </Text>
          <Spacer mt={10} />
          <Divider
            width={SIZES.width - 100}
            backgroundColor={COLORS.border}
            height={1}
          />
          <Spacer mt={20} />
          <View style={[globalStyles.row, {alignItems: 'flex-start'}]}>
            <TouchableOpacity onPress={() => {}}>
              <RadioButton checked={0} index={-1} />
            </TouchableOpacity>
            <Text containerStyle={{flexWrap: 'wrap', flex: 1, marginLeft: 10}}>
              Distributor Id
            </Text>
          </View>
        </View>
        <OutlineTextInput
          containerStyle={{
            backgroundColor: COLORS.ligthGrey,
            width: SIZES.width - 120,
            marginBottom: 20,
            marginHorizontal: 20,
          }}
          onChangeText={() => {}}
          placeholder="Enter Your Name..."
        />
        <Spacer mt={10} />
        {_OrDivider()}
        <Spacer mt={20} />
        <View
          style={[
            globalStyles.row,
            {alignItems: 'flex-start', marginLeft: 12},
          ]}>
          <TouchableOpacity onPress={() => {}}>
            <RadioButton checked={0} index={-1} />
          </TouchableOpacity>
          <Text containerStyle={{flexWrap: 'wrap', flex: 1, marginLeft: 10}}>
            First Name
          </Text>
        </View>
        <Spacer mt={10} />
        <OutlineTextInput
          containerStyle={{
            backgroundColor: COLORS.ligthGrey,
            width: SIZES.width - 120,
            marginBottom: 20,
            marginHorizontal: 20,
          }}
          onChangeText={() => {}}
          placeholder="Enter your first name..."
        />
        <View
          style={[
            globalStyles.row,
            {alignItems: 'flex-start', marginLeft: 12},
          ]}>
          <Text containerStyle={{flexWrap: 'wrap', flex: 1, marginLeft: 30}}>
            Last Name
          </Text>
        </View>
        <Spacer mt={10} />
        <OutlineTextInput
          containerStyle={{
            backgroundColor: COLORS.ligthGrey,
            width: SIZES.width - 120,
            marginBottom: 20,
            marginHorizontal: 20,
          }}
          onChangeText={() => {}}
          placeholder="Enter your last name..."
        />
        <OutlineButton onPress={() => {}} title={"Search"} containerStyle={[globalStyles.bannerBtnBlueBackground]} textStyleContainer={[globalStyles.bannerBtnTextWhite]}/>
        <Spacer mt={20} />
     
      </ScrollView>
    </DistributorWrapper>
  );
}

const styles = StyleSheet.create({});
