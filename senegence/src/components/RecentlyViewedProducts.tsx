import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

//User defined Imports
import CategoryItemComponent from './PLP/CategoryItemComponent';
import Spacer from './Spacer';
import Text from './text/Text';
import TextWithUnderLine from './text/TextWithUnderLine';

const RecentlyViewedProducts = ({gridView=false,navigation,route=undefined}: any) => {
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  //Recently Viewed Products getting from AsyncStorage
  useEffect(() => {
    AsyncStorage.getItem('recently_viewed_products').then(products => {
      const p = products ? JSON.parse(products) : [];

      //Removing the duplicates from the array
      let jsonObject = p.map(JSON.stringify);
      let uniqueSet = new Set(jsonObject);
      let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      setRecentlyViewedProducts(uniqueArray);
    });
  }, [navigation,route]);

  const _recentlyViewedProducts = () => {
    return (
      <TextWithUnderLine title={"Recently Viewed"}/>
    );
  };

  return (
    recentlyViewedProducts.length > 0 ? (
      <>
        {_recentlyViewedProducts()}
        <Spacer mt={26} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{marginHorizontal: 10}}
          numColumns={1}
          renderItem={({item}) =>
            CategoryItemComponent(
              item,
              {marginRight: 10},
              gridView,
              navigation,
              item?.url_path,
              item?.name,
            )
          }
          data={recentlyViewedProducts}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Text>No Content Found</Text>
            </View>
          )}
        />
        <Spacer mt={54.1} />
      </>
    ):null
  );
};

const styles = StyleSheet.create({
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecentlyViewedProducts;
