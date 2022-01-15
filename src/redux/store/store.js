import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/reducer/reducer";

export default configureStore({
  reducer: {
    data: counterReducer,
  },
});
