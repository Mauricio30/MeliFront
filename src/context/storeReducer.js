import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED
} from "./types";

const initialStateProduts = {
    products: {},
    productsIsLoading: false,
    productsIsError: false
}

export const initialState = {
    ...initialStateProduts
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
        productsIsError: true
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        productsIsError: true,
      };
    default:
      return state;
  }
};