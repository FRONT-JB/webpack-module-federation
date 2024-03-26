import React, { memo, useEffect } from "react";

import "./index.css";
import { Reducer, Store } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import reducer, { remoteAppScopeName, setName } from "./redux/modules/name";

const App = () => {
  const name = useSelector<
    {
      [remoteAppScopeName]?: {
        value: string;
      };
    },
    string | undefined
  >((state) => state?.[remoteAppScopeName]?.value);

  const dispatch = useDispatch();

  const store = useStore();

  console.log(store.getState());

  return (
    <div className="container">
      <div>Name: remote-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>

      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(setName({ name: "리모트 앱" }));
          }}
        >
          change
        </button>
      </div>

      {name && <div>{name}</div>}
    </div>
  );
};

const RemoteAppWrapper: React.FC<
  React.PropsWithChildren<{
    store: Store;
    injectReducer: (key: string, reducer: Reducer) => void;
  }>
> = ({ store, injectReducer }) => {
  useEffect(() => {
    injectReducer(remoteAppScopeName, reducer);
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default memo(RemoteAppWrapper);
