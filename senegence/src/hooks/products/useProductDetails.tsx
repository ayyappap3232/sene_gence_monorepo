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
  productDetailsData: Item | null,
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
  let variants = productDetailsData.variants;
  Object.keys(selectedConfigurableProductOption).forEach(code => {
    variants = variants.filter(variant => {
      const attribute = variant.attributes.find(attr => attr.code === code);
      return attribute?.value_index === selectedConfigurableProductOption[code];
    });
  });

  return variants?.[0];
};

export const useProductDetails = ({sku}: Props): Result => {
  const [productDetailsData, setProductDetailsData] = useState<Item | null>(
    null,
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

  const [getProductDetailsQuery, responseObject] = useLazyQuery(
    GET_PRODUCT_DETAILS_QUERY,
    {
      variables: {
        sku: sku,
      },
      
      fetchPolicy: "no-cache",
    },
  );

  const {loading, data} = responseObject;

  console.log('loading product details', loading);

  const getProductDetails = () => {
    getProductDetailsQuery();
  };

  useEffect(() => {
    setProductDetailsData(data?.products?.items?.[0])
  }, [data])

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
