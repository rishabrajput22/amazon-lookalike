
import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// StateProvider component that wraps your app and provides the context
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook to use the state value in components
export const useStateValue = () => useContext(StateContext);
