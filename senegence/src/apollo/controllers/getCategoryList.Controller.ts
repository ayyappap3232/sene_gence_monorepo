import {useEffect, useState} from 'react';
//@ts-ignore
import {useLazyQuery} from '@apollo/client';
import {CATEGORY_LIST} from '../services/apollo/queries/categories/categoryList';
import { getSortField } from '../../helpers/filters';

type Props = {
  url_path: string;
  pageSize: number;
  currentPage: number;
  sortNameField: any;
};

type Result = {
  loading: Boolean;
  error: any;
  categoryList: any;
  getCategoryList(): void;
};

export const useCategoryList = (props: Props): Result => {
  const [categoryList, setCategoryList] = useState();

const {sortNameField, currentPage, pageSize, url_path} = props;


  const [getCategoryList, {loading, error, data}] = useLazyQuery(
    CATEGORY_LIST,
    {
      variables: {
        url_path: url_path,
        pageSize: pageSize,
        currentPage: currentPage,
        sortName: getSortField(sortNameField),
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
