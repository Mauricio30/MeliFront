import { createContext, useReducer } from "react";
import { ApiService } from "../apiService/api";
import { initialState, storeReducer } from './storeReducer';
import { RESET_DATA } from "./types";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialState)

    const getDataAction = async (options) => {
        ApiService(dispatch, options)
    }

    const resetData = () => {
        dispatch({ type: RESET_DATA })
    }

    return (
        <StoreContext.Provider value={{
            store,
            getDataAction,
            resetData
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;