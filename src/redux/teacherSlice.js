import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiTeacher from "../apis/ApiTeacher.js";

// Async thunk for fetching teachers
export const getListTeacher = createAsyncThunk(
  "teacher/getListTeacher",
  async (params, { rejectWithValue }) => {
    try {
      const response = await ApiTeacher.getAll(params);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch teachers");
    }
  },
);

// Async thunk for fetching single teacher
export const getTeacherById = createAsyncThunk(
  "teacher/getTeacherById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiTeacher.getById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch teacher");
    }
  },
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    TeacherList: [],
    TeacherTotal: 0,
    currentTeacher: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentTeacher: (state) => {
      state.currentTeacher = null;
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
      // getTeacherById
      .addCase(getTeacherById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeacherById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTeacher = action.payload.data;
      })
      .addCase(getTeacherById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Xuất các action để sử dụng trong Component (như clear lỗi)
export const { clearError, clearCurrentTeacher } = teacherSlice.actions;

// Xuất reducer để đăng ký vào Store (index.js của redux)
export default teacherSlice.reducer;
