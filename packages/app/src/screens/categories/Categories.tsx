import React, {useEffect} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import CategoryList from './CategoryList';
import ActivityIndicator from '../../components/spinners/ActivityIndicator';
//@ts-ignore
import {useCategories, ItemCategory} from 'common/controllers/getCategories.Controller';

export default function Categories() {
  const {getCategories, loading, error, categoryData} = useCategories({
    id: '3',
  });


  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
    <Image
        source={{
          uri: "https://master-7rqtwti-mfwmkrjfqvbjk.us-4.magentosite.cloud/media/catalog/product/cache/d3ba9f7bcd3b0724e976dc5144b29c7d/v/t/vt11-ll_main_2.jpg",
        }}
        style={{ width: 200, height: 200 ,backgroundColor:'orange'}}
        resizeMode="cover"
      />
      {categoryData?.categories?.items?.map((item: ItemCategory,index: number) => {
        return (
          <View key={`${item.name}-root${index}`}>
            <Text>{item.name}</Text>
            {item.children.map((item: any) => (
              <Text style={{color: 'red'}} key={`${item.name}-child${index}`}>Children: {item.name}</Text>
            ))}
          </View>
        );
      })}
      <CategoryList data={categoryData} />
    </>
  );
}

const styles = StyleSheet.create({});
