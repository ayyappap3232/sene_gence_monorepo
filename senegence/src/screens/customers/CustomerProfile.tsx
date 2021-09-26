import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useCustomer } from '../../apollo/controllers/getCustomer.Controller';
import ActivityIndicator from '../../components/spinners/ActivityIndicator';
//@ts-ignore
//@ts-ignore

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
