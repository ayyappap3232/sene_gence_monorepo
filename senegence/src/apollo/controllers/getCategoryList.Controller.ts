import {useEffect, useState} from 'react';
//@ts-ignore
import {useLazyQuery} from '@apollo/client';
import {CATEGORY_LIST, SortEnum} from '../services/apollo/queries/categories/categoryList';

type Props = {
  url_path: string;
  pageSize: number;
  currentPage: number;
};

type Result = {
  loading: Boolean;
  error: any;
  categoryList: any;
  getCategoryList(): void;
};

export const useCategoryList = (props: Props): Result => {
  const [categoryList, setCategoryList] = useState();

  enum SortEnum {
    ASC,
    DESC,
  }
//   const _returnFilter = () => {
//     switch (props?.filter) {
//       case 'name':
//         return {name:  'ASC'};
//       case 'price':
//         return {price: 'ASC'};
//       case 'position':
//         return {position: 'ASC'};
//       case 'created_at':
//         return {created_at: 'ASC'};
//       default:
//         return {name: 'ASC'};
//     }
//   };


  const [getCategoryList, {loading, error, data}] = useLazyQuery(
    CATEGORY_LIST,
    {
      variables: {
        url_path: props?.url_path,
        pageSize: props?.pageSize,
        currentPage: props?.currentPage,
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  useEffect(() => {
    if (data) {
      setCategoryList(data);
    }
  }, [data]);

  return {
    loading,
    error,
    categoryList,
    getCategoryList,
  };
};
