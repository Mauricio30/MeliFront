import { createContext, useReducer } from "react";
import { ApiService } from "../apiService/api";
import { initialState, storeReducer } from './storeReducer';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialState)

    const getDataAction = async (options) => {
        console.log(options);
        ApiService(dispatch, options)
    }

    return (
        <StoreContext.Provider value={{
            store,
            getDataAction
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;