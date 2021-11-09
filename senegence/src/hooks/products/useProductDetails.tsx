import {useLazyQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {
  ConfigurableProductVarient,
  GET_PRODUCT_DETAILS_QUERY,
  Item,
  PriceRange,
} from 'apollo/services/apollo/queries/products/getProductDetails';
import { MediaGalleryItemType } from 'apollo/services/apollo/queries/categories/mediaGalleryFragment';

type Props = {
  sku: string;
};

type SelectedConfigurableProductOption = {
  [key: string]: number;
};

type HandleSelectConfigurableOption = (
  optionCode: string,
  valueIndex: number,
) => void;

type Result = {
  getProductDetails: () => void,
  productDetailsLoading: boolean,
  productDetailsData: Item | undefined,
  selectedConfigurableProductOption: SelectedConfigurableProductOption,
  handleSelectConfigurableOption: HandleSelectConfigurableOption,
  price: PriceRange | null,
  mediaGallery: MediaGalleryItemType[],

};

const findSelectProductVariant  = (
  selectedConfigurableProductOption: SelectedConfigurableProductOption,
  productDetailsData: Item,
) : ConfigurableProductVarient | null => {
  if (productDetailsData.__typename !== 'ConfigurableProduct') {
    return null;
  }
  let variants = productDetailsData?.variants;
  Object.keys(selectedConfigurableProductOption).forEach(code => {
    variants = variants.filter(variant => {
      const attribute = variant.attributes.find(attr => attr.code === code);
      return attribute?.value_index === selectedConfigurableProductOption[code];
    });
  });

  return variants?.[0];
};

export const useProductDetails = ({sku}: Props): Result => {

  console.log('sku',sku)
  const [productDetailsData, setProductDetailsData] = useState<Item | undefined>(
    
  );
  const [
    selectedConfigurableProductOption,
    setSelectedConfigurableProductOption,
  ] = useState<SelectedConfigurableProductOption>({});

  const [
    selectedVariant,
    setSelectedVariant,
  ] = useState<ConfigurableProductVarient | null>(null);

  const [
    price,
    setSelectedPrice,
  ] = useState<PriceRange | null>(null);

  const [
    mediaGallery,
    setSelectedMediaGallery,
  ] = useState<MediaGalleryItemType[]>([]);

  const [getProductDetailsQuery, {loading,error,data}] = useLazyQuery(
    GET_PRODUCT_DETAILS_QUERY,
    {
      variables: {
        sku: sku,
      },
      fetchPolicy: "network-only",
    },
  );

  const getProductDetails = () => {
    getProductDetailsQuery();
  };

  useEffect(() => {
    if(data){

      setProductDetailsData(data?.products?.items?.[0])
    }
  }, [data])


  useEffect(() => {
    if(productDetailsData) {
      if(selectedVariant){
        setSelectedPrice(selectedVariant.product.price_range);
        setSelectedMediaGallery([...selectedVariant.product.media_gallery, ...productDetailsData.media_gallery]);
      }else{
        setSelectedPrice(productDetailsData.price_range);
        setSelectedMediaGallery(productDetailsData.media_gallery);
      }
    }
  }, [selectedVariant, productDetailsData])


  useEffect(() => {
    if (
      productDetailsData &&
      Object.keys(selectedConfigurableProductOption).length > 0
    ) {
      const variant = findSelectProductVariant(
        selectedConfigurableProductOption,
        productDetailsData,
      );
      setSelectedVariant(variant);
    }
  }, [productDetailsData, selectedConfigurableProductOption]);

  const handleSelectConfigurableOption: HandleSelectConfigurableOption = (
    optionCode,
    valueIndex,
  ) => {
    console.log('option code', optionCode, 'value index',valueIndex)
    setSelectedConfigurableProductOption({
      ...selectedConfigurableProductOption,
      [optionCode]: valueIndex,
    });
  };

  return {
    getProductDetails,
    productDetailsLoading: loading,
    productDetailsData,
    selectedConfigurableProductOption,
    handleSelectConfigurableOption,
    price,
    mediaGallery,
  };
};
