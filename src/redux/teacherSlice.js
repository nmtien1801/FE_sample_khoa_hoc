import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching teachers
export const getListTeacher = createAsyncThunk(
  "teacher/getListTeacher",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/teachers",
        {
          params: params,
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch teachers",
      );
    }
  },
);

// Async thunk for creating a teacher
export const createTeacher = createAsyncThunk(
  "teacher/createTeacher",
  async (teacherData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/teachers",
        teacherData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to create teacher",
      );
    }
  },
);

// Async thunk for updating a teacher
export const updateTeacher = createAsyncThunk(
  "teacher/updateTeacher",
  async ({ id, teacherData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/teachers/${id}`,
        teacherData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update teacher",
      );
    }
  },
);

// Async thunk for deleting a teacher
export const deleteTeacher = createAsyncThunk(
  "teacher/deleteTeacher",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/teachers/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to delete teacher",
      );
    }
  },
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    TeacherList: [],
    TeacherTotal: 0,
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
      // getListTeacher
      .addCase(getListTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getListTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.TeacherList = action.payload.data || [];
        state.TeacherTotal = action.payload.total || 0;
      })
      .addCase(getListTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // createTeacher
      .addCase(createTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.TeacherList.push(action.payload.data);
        state.TeacherTotal += 1;
      })
      .addCase(createTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // updateTeacher
      .addCase(updateTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTeacher.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.TeacherList.findIndex(
          (teacher) => teacher.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.TeacherList[index] = action.payload.data;
        }
      })
      .addCase(updateTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // deleteTeacher
      .addCase(deleteTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.TeacherList = state.TeacherList.filter(
          (teacher) => teacher.id !== action.payload,
        );
        state.TeacherTotal -= 1;
      })
      .addCase(deleteTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = teacherSlice.actions;
export default teacherSlice.reducer;
