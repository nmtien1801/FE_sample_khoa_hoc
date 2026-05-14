import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import categoryReducer from "./categorySlice";
import courseReducer from "./courseSlice";
import teacherReducer from "./teacherSlice";
import lessonReducer from "./lessonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    course: courseReducer,
    teacher: teacherReducer,
    lesson: lessonReducer,
  },
});
