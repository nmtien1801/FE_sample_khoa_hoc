import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiCourse from "../apis/ApiCourse.js";

// Async thunk for fetching courses - chỉ dùng cho redux
export const getListCourse = createAsyncThunk(
  "course/getListCourse",
  async (params, { rejectWithValue }) => {
    try {
      const response = await ApiCourse.getAll(params);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch courses");
    }
  },
);

// Async thunk for fetching single course - chỉ dùng cho redux
export const getCourseById = createAsyncThunk(
  "course/getCourseById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiCourse.getById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch course");
    }
  },
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    CourseList: [],
    CourseTotal: 0,
    currentCourse: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentCourse: (state) => {
      state.currentCourse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getListCourse
      .addCase(getListCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getListCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.CourseList = action.payload.data || [];
        state.CourseTotal = action.payload.total || 0;
      })
      .addCase(getListCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // getCourseById
      .addCase(getCourseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCourse = action.payload.data;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearCurrentCourse } = courseSlice.actions;
export default courseSlice.reducer;
