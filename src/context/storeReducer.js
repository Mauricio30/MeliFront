import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCT_DETAIL_LOADING,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_FAILED
} from "./types";

const initialStateProduts = {
    products: {},
    productsIsLoading: false,
    productsIsError: false
}

const initialStateProdutDetail = {
    productDetail: {},
    productDetailIsLoading: false,
    productDetailIsError: false
}

export const initialState = {
    ...initialStateProduts,
    ...initialStateProdutDetail
};

export const storeReducer = (
  state = initialState,
  action = {}
) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        productsIsLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        productsIsLoading: false,
        productsIsError: false
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        productsIsLoading: false,
        productsIsError: true,
      };
      case GET_PRODUCT_DETAIL_LOADING:
        return {
          ...state,
          productDetailIsLoading: true,
        };
      case GET_PRODUCT_DETAIL_SUCCESS:
        return {
          ...state,
          productDetail: action.payload,
          productDetailIsLoading: false,
          productDetailIsError: false
        };
      case GET_PRODUCT_DETAIL_FAILED:
        return {
          ...state,
          productDetailIsLoading: false,
          productDetailIsError: true
        };
    default:
      return state;
  }
};