import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiCategory from "../apis/ApiCategory.js";

// Async thunk for fetching categories
export const getListCategory = createAsyncThunk(
  "category/getListCategory",
  async (params, { rejectWithValue }) => {
    try {
      const response = await ApiCategory.getAll(params);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  },
);

// Async thunk for fetching single category
export const getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiCategory.getById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch category");
    }
  },
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    CategoryList: [],
    CategoryTotal: 0,
    currentCategory: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentCategory: (state) => {
      state.currentCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getListCategory
      .addCase(getListCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getListCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.CategoryList = action.payload.data || [];
        state.CategoryTotal = action.payload.total || 0;
      })
      .addCase(getListCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // getCategoryById
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCategory = action.payload.data;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Xuất các actions từ reducers
export const { clearError, clearCurrentCategory } = categorySlice.actions;

// Xuất reducer để nhúng vào store
export default categorySlice.reducer;
