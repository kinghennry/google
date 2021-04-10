import React, { createContext, useContext, useReducer } from "react";

 export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {

    return (
    <StateContext.Provider value={useReducer(reducer,initialState) }>
      {children}
      </StateContext.Provider>
      )
}
// you can pull info from the data layer anywhere.
export const useStateValue = () => {
    return useContext(StateContext)
}
