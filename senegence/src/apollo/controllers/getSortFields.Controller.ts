import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
//@ts-ignore
import { GET_SORT_FIELDS } from "../services/apollo/queries/getSortFields";

type Result = {
  loading: Boolean;
  error: any;
  getSortFields(): void;
  sortFields: any;
};

export const useGetSortFields = (): Result => {
  const [sortFields, setSortFields] = useState();
  const [getSortFields, { loading, error, data }] = useLazyQuery(
    GET_SORT_FIELDS
  );

  useEffect(() => {
    if (data) {
        setSortFields(data);
    }
  }, [data]);

  return {
    loading,
    error,
    getSortFields,
    sortFields,
  };
};
