import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: [
    {
      id: 0,
      title: "",
      description: "",
      status: 0,
      createdAt: "",
    },
  ],
  empty: true,
};

export const counterSlice = createSlice({
  name: "values",
  initialState,
  reducers: {
    initialValues: (state, action) => {
      return {
        values: [...action.payload],
        empty: false,
      };
    },
    createData: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    removeData: (state) => {
      state.value -= 1;
    },
    updateData: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialValues, createData, removeData, updateData } =
  counterSlice.actions;

export default counterSlice.reducer;
