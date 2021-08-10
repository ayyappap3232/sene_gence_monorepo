import {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import {  GET_CATEGORIES} from '../services/apollo/queries/categories/getCategories'
// type Props = {
//     id: string;
// }

// type Result = {
//     loading: Boolean;
//     getCategories(): void;
//     error: any;
//     categoryData: Categories;
// }

export const useCategories = (props) => {
    const [categoryData, setCategoryData] = useState();
    const [getCategories,{loading, error, data}] = useLazyQuery(GET_CATEGORIES,{
        variables: {
            id: props.id
        },
    })

    useEffect(() => {
        if(data){
            setCategoryData(data)
            console.log('after use',data)
        }
        console.log('outside use',data)

    }, [data])

    console.log('insite',data)
    console.log('insite error',{error})

    return {
        loading,
        getCategories,
        error,
        categoryData
    }
}



