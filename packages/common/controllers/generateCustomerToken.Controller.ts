import { useEffect, useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import { Data, GENERATE_CUSTOMER_TOKEN } from "../services/apollo/mutations/customers/generateCustomerToken";

type Props = {
  email: string;
  password: string;
};

type Result = {
  loading: boolean;
  getToken(): void;
  error: any;
  token: Data;
};

export const useGenerateCustomerToken = (props: Props):Result => {
  const [token, setToken] = useState();

  try {
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
  } catch (error) {
    console.log('customer token error',error)
  }
};
