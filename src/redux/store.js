import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import categoryReducer from "./categorySlice";
import courseReducer from "./courseSlice";
import teacherReducer from "./teacherSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    course: courseReducer,
    teacher: teacherReducer,
  },
});
