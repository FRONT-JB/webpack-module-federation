import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./index.css";
import createStore from "./redux/store";
import { decrement, increment } from "./redux/modules/counter";

const RemoteApp = React.lazy(() => import("remote_app/RemoteApp"));

const { store, injectReducer } = createStore();

const App = () => {
  const counter = useSelector<ReturnType<typeof store.getState>, number>(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <div>{counter}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>

      <Suspense fallback="...loading">
        <RemoteApp store={store} injectReducer={injectReducer} />
      </Suspense>
    </div>
  );
};

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
