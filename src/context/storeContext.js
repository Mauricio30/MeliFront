import { createContext, useReducer } from "react";
import { ApiService } from "../apiService/api";
import { initialState, storeReducer } from './storeReducer';
import { getProductsSteps } from './storeActions';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialState)

    const getProductsAction = async (options) => {
        console.log(options);
        ApiService(dispatch, getProductsSteps, options)
    }

    return (
        <StoreContext.Provider value={{
            store,
            getProductsAction
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;