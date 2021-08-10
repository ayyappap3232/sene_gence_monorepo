import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//@ts-ignore
import {useCategories} from '../../common/controllers/getCategories.Controller'

function App() {

  const {getCategories, loading, error, categoryData} = useCategories({id: "3"});
  console.log('categories',categoryData)

  useEffect(() => {
    getCategories();
  }, [getCategories])

  if(loading){
    return <h1>loading...</h1>
  }

  return (
    <div className="App">
      <p>Hello</p>
      {categoryData}

    </div>
  );
}

export default App;
