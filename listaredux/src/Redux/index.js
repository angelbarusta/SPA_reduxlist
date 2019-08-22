import { createStore, combineReducers } from "redux";

import Items from "../Redux/Reducer/Items/index";

const reducer = combineReducers({
  Items
});

export default createStore(reducer);
