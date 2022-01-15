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
    createData: (state, action) => {
      return { ...state, values: [...state.values, { ...action.payload }] };
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
