import { configureStore, Reducer, combineReducers } from "@reduxjs/toolkit";
import counter from "./modules/counter";

const createStore = () => {
  const staticReducers = {
    counter,
  };

  const asyncReducers: { [index: string]: Reducer } = {};

  const store = configureStore({
    reducer: {
      ...staticReducers,
    },
  });

  const injectReducer = (key: string, asyncReducer: Reducer) => {
    asyncReducers[key] = asyncReducer;

    store.replaceReducer(
      combineReducers({
        ...staticReducers,
        ...asyncReducers,
      })
    );
  };

  return {
    store,
    injectReducer,
  };
};

export default createStore;
