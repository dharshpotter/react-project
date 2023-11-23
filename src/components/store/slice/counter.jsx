import {  createSlice } from "@reduxjs/toolkit";

const initialStates = {
  count: 0,
  showCount: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStates,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    toggle(state) {
        state.showCount= !state.showCount;
    },
  },
});


export default counterSlice; 

