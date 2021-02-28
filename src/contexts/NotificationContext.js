import * as React from "react";
import {createContext, useReducer, useContext} from 'react'
import NotificationReducer from "../reducers/NotificationReducer";


const NotificationContext = createContext();

const initialState = {
    notificacoes: NotificationReducer()
};

export const NotificacaoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NotificationReducer, initialState);

    return (
        <NotificationContext.Provider value={[state, dispatch]}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotificationContext = () => useContext(NotificationContext);