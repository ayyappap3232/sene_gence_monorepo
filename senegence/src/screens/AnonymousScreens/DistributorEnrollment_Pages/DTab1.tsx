import React from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {COLORS} from '../../../constants';
import DistributorWrapper from './DistributorWrapper';
import Svg, { Path } from 'react-native-svg'

export default function DTab1() {
  return (
      <DistributorWrapper>
          <ScrollView nestedScrollEnabled contentContainerStyle={{flex: 1}}>
          <Text>D Tab 1</Text>
          <Text>D Tab 1</Text>
          <Text>D Tab 1</Text>
          <Text>D Tab 1</Text>
          
          <Text>D Tab 1</Text>
      <Svg height={100} width={20}>
          <Path
            d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z" // put your path here
            fill="blue"
            stroke="blue"
          />  
        </Svg>
        <Text>D Tab 1</Text>
          </ScrollView>
      </DistributorWrapper>
  );
}

const styles = StyleSheet.create({});
