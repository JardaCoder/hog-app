import * as React from "react";
import {createContext, useReducer, useContext} from 'react'
import UserReducer from '../reducers/UserReducer'


const UserContext = createContext();

const initialState = {
    usuario: UserReducer()
};

export const UsuarioProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);