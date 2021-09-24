import { useEffect,useState } from "react";
//@ts-ignore
import {useLazyQuery} from "@apollo/client";
import { SEARCH_CATEGORY_LIST } from "../services/apollo/queries/categories/categoryList";

type Props = {
    name: string;
    pageSize: number;
    currentPage: number;
}

type Result = {
    loading: Boolean,
    error: any,
    searchCategoryList: any,
    getSearchCategoryList() : void,
}

export const useSearchCategoryList = (props: Props): Result => {
    const [searchCategoryList, setSearchCategoryList] = useState()
    const [getSearchCategoryList, {loading, error, data}] = useLazyQuery(SEARCH_CATEGORY_LIST, {
        variables: {
            name: props?.name,
            pageSize: props?.pageSize,
            currentPage: props?.currentPage
        },
        fetchPolicy: "cache-and-network"
    })

    useEffect(() => {
        if(data){
            setSearchCategoryList(data)
        }
    }, [data])

    return {
        loading,
        error,
        searchCategoryList,
        getSearchCategoryList
    }
}