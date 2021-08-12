import {useEffect, useState} from 'react'
//@ts-ignore
import { useLazyQuery } from '@apollo/client'
import {  Categories,GET_CATEGORIES} from '../services/apollo/queries/categories/getCategories'
type Props = {
    id: string;
}

type Result = {
    loading: Boolean;
    getCategories(): void;
    error: any;
    categoryData: Categories;
}

export const useCategories = (props: Props): Result => {
    const [categoryData, setCategoryData] = useState();

    try {

        const [getCategories,{loading, error, data}] = useLazyQuery(GET_CATEGORIES,{
            variables: {
                id: props.id
            },
            errorPolicy:"all"
        })

        useEffect(() => {
            if(data){
                setCategoryData(data)
            }
        }, [data])
    
        return {
            loading,
            getCategories,
            error,
            categoryData
        }
    } catch (error) {
        console.log(error)
    }
}



