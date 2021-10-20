import { useEffect, useState } from "react";
//@ts-ignore
import { useLazyQuery } from "@apollo/client";
import {
  Categories,
  GET_CATEGORIES,
} from "../services/apollo/queries/categories/getCategories";
import { COUNTRIES } from "../services/apollo/queries/countries";

type Result = {
  loading: Boolean;
  getCountries(): void;
  error: any;
  countriesData: any;
};

export const useGetCountries = (): Result => {
  const [countriesData, setCountriesData] = useState();

  const [getCountries, { loading, error, data }] = useLazyQuery(
    COUNTRIES,
  );

  useEffect(() => {
    if (data) {
        setCountriesData(data);
    }
  }, [data]);

  return {
    loading,
    getCountries,
    error,
    countriesData,
  };
};
