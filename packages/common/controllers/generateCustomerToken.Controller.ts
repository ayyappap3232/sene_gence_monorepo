import { useEffect, useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import { GENERATE_CUSTOMER_TOKEN } from "../services/apollo/mutations/customers/generateCustomerToken";

type Props = {
  email: string;
  password: string;
};

type Result = {
  loading: boolean;
  getToken(): void;
  error: any;
  token: string;
};

export const useGenerateCustomerToken = (props: Props):Result => {
  console.log("props", props);
  const [token, setToken] = useState();
  const [getToken, { loading, error, data }] = useMutation(
    GENERATE_CUSTOMER_TOKEN,
    {
      variables: { email: props.email, password: props.password },
    }
  );

  useEffect(() => {
    if (data) {
      setToken(data);
    }
  }, [data]);

  if(error){
      console.log(error)
  }

  return {
    loading,
    getToken,
    error,
    token,
  };
};
