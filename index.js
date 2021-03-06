import React from "react";
import { render } from "react-dom";
import Scoreboard from "./src/containers/Scoreboard";
import { Provider } from "react-redux";
import { createStore } from "redux";
import playerReducer from "./src/reducers/player";

const store = createStore(playerReducer);
render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById("root")
);
