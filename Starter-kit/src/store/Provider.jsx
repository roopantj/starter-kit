import produce from "immer";
import React, { useReducer, createContext } from "react";

function createGlobalContext(reducer, initialState) {
  const GlobalContext = createContext({ state: initialState });

  function GlobalProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <GlobalContext.Provider {...props} value={{ state, dispatch }} />;
  }

  return [GlobalContext, GlobalProvider];
}

const initialState = {
  table: [],
  isLoading: true,
};

function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });
}

export const [GlobalContext, GlobalProvider] = createGlobalContext(
  reducer,
  initialState
);
