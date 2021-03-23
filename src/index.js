import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { HashRouter } from "react-router-dom"; //BrowserRouter for local deployment
import MetaTags from 'react-meta-tags';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <HashRouter basename="/">
    <Provider store={store}>
      <App />
    </Provider>
    <MetaTags>
      <meta name="viewport" content="width=device-width, height=device-height, maximum-scale=1, user-scalable=yes" />
    </MetaTags>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
