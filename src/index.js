import React from "react";
import ReactDOM from "react-dom";

//import reqs from redux and react redux
import { createStore } from "redux";
import { Provider } from "react-redux";

//import any reducers here
import reducer from "../reducers/reducer";
//import any components here
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);
//wrap <App /> in <Provider></Provider> and padd in store={store}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
