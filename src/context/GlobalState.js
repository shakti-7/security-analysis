import React from 'react'
import { createContext, useReducer } from 'react' 
import AppReducer from './AppReducer'

//Initial state
const initialState = {
    issues: [] 
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function addIssue(issue){
        dispatch({
            type: 'ADD_ISSUE',
            payload: issue
        })
    }

    return (<GlobalContext.Provider value = {{
        issues: state.issues,
        addIssue
    }}>
        {children}
    </GlobalContext.Provider>)
}

export default GlobalContext;