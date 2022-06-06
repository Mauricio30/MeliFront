import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED
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