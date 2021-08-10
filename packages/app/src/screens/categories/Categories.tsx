import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
