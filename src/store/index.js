import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { loggedInUser } from "../httpService";

import logger from "redux-logger";

const reducerFunction = (state = { cart: [], user: loggedInUser }, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
};

export const STORE = createStore(
  reducerFunction,
  composeWithDevTools(applyMiddleware(logger))
);
