// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./slice/counter";
import authSlice from "./slice/authSlice.jsx";

export const store = configureStore({ 
    reducer: {
        counter:counterSlice.reducer,
        auth:authSlice.reducer,
    },
})

export const actions = {
    counterActions : counterSlice.actions,
    authActions : authSlice.actions,
}