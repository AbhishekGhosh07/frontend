import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import allowUserReducer from "./allowUser";
import departure from "./departure";
import arrival from "./arrival";
import userName from "./name"


const reducers = combineReducers({
    amount : amountReducer,
    permission : allowUserReducer,
    departureCity : departure,
    arrivalCity : arrival,
    name : userName
})

export default reducers