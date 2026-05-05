import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching courses
export const getListCourse = createAsyncThunk(
  "course/getListCourse",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/courses", {
        params: params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch courses");
    }
  },
);

// Async thunk for creating a course
export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (courseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/courses",
        courseData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to create course");
    }
  },
);

// Async thunk for updating a course
export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async ({ id, courseData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/courses/${id}`,
        courseData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update course");
    }
  },
);

// Async thunk for deleting a course
export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/courses/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete course");
    }
  },
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    CourseList: [],
    CourseTotal: 0,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
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
      // createCourse
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.CourseList.push(action.payload.data);
        state.CourseTotal += 1;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // updateCourse
      .addCase(updateCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.CourseList.findIndex(
          (course) => course.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.CourseList[index] = action.payload.data;
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // deleteCourse
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.CourseList = state.CourseList.filter(
          (course) => course.id !== action.payload,
        );
        state.CourseTotal -= 1;
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = courseSlice.actions;
export default courseSlice.reducer;
