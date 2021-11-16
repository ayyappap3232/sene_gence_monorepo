import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { globalStyles } from 'globalstyles/GlobalStyles';
import {COLORS, images} from '../../constants';
import OutlineButton from '../buttons/OutlineButton';
import Spacer from '../Spacer';
import TextWithUnderLine from '../text/TextWithUnderLine';

const data = [{
    content: '20-50% retail profit earnings',
},{
    content: 'FREE training and online tools'
},
{
    content: ' Recognition gifts based on sales & sponsoring efforts'
},
{
    content: 'Exclusive travel'
},
{
    content: 'Car allowance'
},
{
    content: 'Community of like-minded women entrepreneurs'
},
{
    content: 'Making a difference through charity (The Make Sense Foundation) supporting women and children in need'
}
]

export default function NewDistributorAccountAlert() {
  return (
    <View>
      <Image
        source={images.close}
        style={{width: 20, height: 20, alignSelf: 'flex-end'}}
      />
      <Spacer mt={20} />
      <Text>
        But wait! Looks like you have an account as a Customer. Creating a
        Distributor account will deactivate your Customer account. Would you
        like to continue with creating a Distributor account?
      </Text>
      <Spacer mt={30} />
      <View style={{borderWidth: 1, borderColor: COLORS.black,padding: 15}}>
        <Image source={images.logo} style={{width: 200, height: 300}}/>
        <Spacer mt={20} />
        <TextWithUnderLine title={"New Distributor"}/>
        <Spacer mt={20} />
        {data.map((item) => (
            <View style={{marginBottom: 5}}>
                 <Text>&#10003; {item.content}</Text>
            </View>
        ))}
        <Spacer mt={20} />
        <OutlineButton
          title={'No, I want to keep my Customer account'}
          containerStyle={[
            globalStyles.bannerBtnBlueBackground,
            {width: 100, height: 36},
          ]}
          textStyleContainer={[globalStyles.bannerBtnTextWhite]}
          onPress={() => {}}
        />
        <Spacer mt={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
