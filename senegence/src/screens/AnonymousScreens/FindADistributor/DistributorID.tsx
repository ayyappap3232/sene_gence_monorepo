import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

//User defined Imports
import OutlineButton from '../../../components/buttons/OutlineButton';
import Spacer from '../../../components/Spacer';
import Text from '../../../components/text/Text';
import InputTextBoxWithTitle from '../../../components/textInputs/InputTextBoxWithTitle';
import {COLORS, images} from '../../../constants';
import {globalStyles} from '../../../globalstyles/GlobalStyles';
import CardTabHeaderWrapper from './CardHeaderWrapper';

const distributorIDResults = [
  {
    id: 'DR1',
    image: images.distributormall,
    name: 'KATIE ENOS',
    distributorId: '189417',
    address: 'Mesa, AZ, 85215San Tan Valley, AZ, 85140, USA',
    email: 'katieenos@demo.com',
    phone: '(480)369-2370',
    website: 'katieenos@demo.com',
  },
  {
    id: 'DR2',
    image: images.distributormall,
    name: 'KATIE ENOS',
    distributorId: '189417',
    address: 'Mesa, AZ, 85215San Tan Valley, AZ, 85140, USA',
    email: 'katieenos@demo.com',
    phone: '(480)369-2370',
    website: 'katieenos@demo.com',
  },
];

export default function DistributorID() {
  const [distributorResults, setDistributorResults] = useState(null);
  const [distributorId, setDistributorId] = useState()

  //Note this results should be dynamic need to implement
  const Results: any = () => {
    return distributorIDResults?.map(item => {
      return (
        <React.Fragment key={item.id}>
          
          <View
            style={[
              globalStyles.contactCard,
              {alignSelf: 'center', width: 290},
            ]}
            key={item.id}>
            <Image
              source={item.image}
              style={{
                width: 270,
                height: 186,
                alignSelf: 'center',
                marginVertical: 10,
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text>{item.name}</Text>
              <Text>Distributor ID: {item.distributorId}</Text>
              <Text>{item.address}</Text>
              <Text>{item.email}</Text>
              <Text>{item.phone}</Text>
              <Text>{item.website}</Text>
              <Spacer mt={10} />
              <OutlineButton
                title={'Shop Now'}
                containerStyle={{
                  borderWidth: 2,
                  borderColor: COLORS.primary2,
                  width: 161,
                }}
                onPress={() => {}}
                textStyleContainer={{color: COLORS.primary2}}
              />
              <Spacer mt={10} />
            </View>
          </View>
        </React.Fragment>
      );
    });
  };

  return (
    <CardTabHeaderWrapper
      title="Search BY DISTRIBUTOR ID"
      results={distributorResults ? <Results /> : null} inputBoxValue1 = {distributorId} searchResults={setDistributorResults}>
      <Spacer mt={18} />
      <InputTextBoxWithTitle
        title={'Distributor ID'}
        placeholder={'eg- 12345'}
        onChangeText={(text: any) => setDistributorId(text)}
      />

      <Spacer mt={19.7} />
    </CardTabHeaderWrapper>
  );
}

const styles = StyleSheet.create({});
