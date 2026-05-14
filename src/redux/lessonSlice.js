import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiLesson from "../apis/ApiLesson.js";

// Async thunk for fetching lessons - chỉ dùng cho redux
export const getListLesson = createAsyncThunk(
  "lesson/getListLesson",
  async (params, { rejectWithValue }) => {
    try {
      const response = await ApiLesson.getAll(params);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch lessons");
    }
  },
);

// Async thunk for fetching single lesson - chỉ dùng cho redux
export const getLessonById = createAsyncThunk(
  "lesson/getLessonById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiLesson.getById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch lesson");
    }
  },
);

const lessonSlice = createSlice({
  name: "lesson",
  initialState: {
    LessonList: [],
    LessonTotal: 0,
    currentLesson: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentLesson: (state) => {
      state.currentLesson = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getListLesson
      .addCase(getListLesson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getListLesson.fulfilled, (state, action) => {
        state.loading = false;
        state.LessonList = action.payload.data || [];
        state.LessonTotal = action.payload.total || 0;
      })
      .addCase(getListLesson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // getLessonById
      .addCase(getLessonById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLessonById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentLesson = action.payload.data;
      })
      .addCase(getLessonById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearCurrentLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
