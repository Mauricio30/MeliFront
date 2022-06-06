import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCT_DETAIL_LOADING,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILED
} from "./types";

export const getProductsSteps = {
    request: () => ({
      type: GET_PRODUCTS_LOADING,
    }),
    recieve: data => ({
      type: GET_PRODUCTS_SUCCESS,
      payload: data
    }),
    error: error => ({
      type: GET_PRODUCTS_FAILED,
      payload: error
    })
  };

  export const getProductDetailSteps = {
    request: () => ({
      type: GET_PRODUCT_DETAIL_LOADING,
    }),
    recieve: data => ({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      payload: data
    }),
    error: error => ({
      type: GET_PRODUCT_DETAIL_FAILED,
      payload: error
    })
  };