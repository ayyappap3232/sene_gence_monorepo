import { useEffect,useState } from "react";
//@ts-ignore
import {useLazyQuery} from "@apollo/client";
import { GET_SEARCH_PRODUCT_COUNT, SEARCH_CATEGORY_LIST, SEARCH_PRODUCT_NAME_OVERALL_COUNT } from "../services/apollo/queries/products/products";
import { getSortField } from "../../helpers/filters";

type Props = {
    name: string;
    pageSize: number;
    currentPage: number;
    sortNameField: string;
}

type Result = {
    loading: Boolean,
    isSearchLoading?:Boolean,
    error: any,
    searchCategoryList: any,
    getSearchCategoryList() : void,
}

export const useSearchCategoryList = (props: Props): Result => {
    const [searchCategoryList, setSearchCategoryList] = useState()
    const {sortNameField, currentPage, pageSize, name} = props;
    const [getSearchCategoryList, {loading, error, data}] = useLazyQuery(SEARCH_CATEGORY_LIST, {
        variables: {
            name: name,
            pageSize: pageSize,
            currentPage: currentPage,
            sortName: getSortField(sortNameField)
        },
        fetchPolicy: "cache-and-network"
    })
    let [isSearchLoading, setIsSearchLoading] = useState<boolean>()


    useEffect(() => {
        if(data){
            setSearchCategoryList(data)
        }
    }, [data])

    return {
        loading,
        isSearchLoading : loading,
        error,
        searchCategoryList,
        getSearchCategoryList
    }
}

//Search Product Name With Overall Count

type SPNWCProps = {
    name: string;
    pageSize: number;
}

type SPNWCResult = {
    loading: Boolean,
    error: any,
    searchProductNameWithCount: any,
    getSearchProductNameWithCount() : void,
}

export const useSearchProductNameWithCount = (props: SPNWCProps): SPNWCResult => {
    const [searchProductNameWithCount, setSearchProductNameWithCount] = useState()
    const [getSearchProductNameWithCount, {loading, error, data}] = useLazyQuery(SEARCH_PRODUCT_NAME_OVERALL_COUNT, {
        variables: {
            name: props?.name,
            pageSize: props?.pageSize
        },
        fetchPolicy: "cache-and-network"
    })

    useEffect(() => {
        if(data){
            setSearchProductNameWithCount(data)
        }
    }, [data])

    return {
        loading,
        error,
        searchProductNameWithCount,
        getSearchProductNameWithCount
    }
}

//Search Product Count
type SPCProps = {
    name: string;
}

type SPCResult = {
    searchProductCount: any,
    getSearchProductCount() : void,
}

export const useSearchProductCount = (props: SPCProps): SPCResult => {
    const [searchProductCount, setSearchProductCount] = useState()
    const [getSearchProductCount, { data}] = useLazyQuery(GET_SEARCH_PRODUCT_COUNT, {
        variables: {
            name: props?.name,
        },
        fetchPolicy: "cache-and-network"
    })

    useEffect(() => {
        if(data){
            setSearchProductCount(data)
        }
    }, [data])

    return {
        searchProductCount,
        getSearchProductCount
    }
}