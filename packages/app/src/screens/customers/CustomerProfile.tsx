import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActivityIndicator from '../../components/spinners/ActivityIndicator';
//@ts-ignore
import {getWelcomeString} from 'common/src/main';
//@ts-ignore
import {useCustomer} from 'common/controllers/getCustomer.Controller';

export default function CustomerProfile() {
  const {getCustomerDetails, loading, error, customerData} = useCustomer();

  useEffect(() => {
    getCustomerDetails();
  }, [getCustomerDetails]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <>
        <Text style={{textAlign: 'center'}}>{error?.message}</Text>
        <Text>{getWelcomeString('Hello')}</Text>
      </>
    );
  }

  return (
    <View>
      <Text>{customerData?.customer?.email} - test</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
