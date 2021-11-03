import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator as Indicator,
} from 'react-native';

//User defined Imports
import {COLORS} from '../../constants';
import { globalStyles } from 'globalstyles/GlobalStyles';

export default function ActivityIndicator() {
  return (
    <View style={styles.activityIndicator}>
      <View
        style={[styles.indicatorWrapper,globalStyles.shadowEffect]}>
        <Indicator size="small" color="grey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorWrapper:{
    backgroundColor: COLORS.white,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
