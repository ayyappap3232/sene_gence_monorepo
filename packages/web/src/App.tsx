import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//@ts-ignore
import {useCategories} from '../../common/controllers/getCategories.Controller'
import {useGenerateCustomerToken} from '../../common/controllers/generateCustomerToken.Controller'

function App() {

  // const {getCategories, loading, error, categoryData} = useCategories({id: "3"});
  // console.log('categories',categoryData)

  const {getToken, loading, error, token} = useGenerateCustomerToken({email: "test1212@gmail.com",password:"test123@123"})

  useEffect(() => {
    getToken();
  }, [getToken])

  // useEffect(() => {
  //   getCategories();
  // }, [getCategories])

  if(loading){
    return <h1>loading...</h1>
  }

  return (
    <div className="App">
      <p>Hello</p>
      {token}

    </div>
  );
}

export default App;
