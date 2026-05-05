import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching categories
export const getListCategory = createAsyncThunk(
  "category/getListCategory",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/categories",
        {
          params: params,
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch categories",
      );
    }
  },
);

// Async thunk for creating a category
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/categories",
        categoryData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to create category",
      );
    }
  },
);

// Async thunk for updating a category
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/categories/${id}`,
        categoryData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update category",
      );
    }
  },
);

// Async thunk for deleting a category
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/categories/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to delete category",
      );
    }
  },
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    CategoryList: [],
    CategoryTotal: 0,
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
      // createCategory
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.CategoryList.push(action.payload.data);
        state.CategoryTotal += 1;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // updateCategory
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.CategoryList.findIndex(
          (cat) => cat.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.CategoryList[index] = action.payload.data;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // deleteCategory
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.CategoryList = state.CategoryList.filter(
          (cat) => cat.id !== action.payload,
        );
        state.CategoryTotal -= 1;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = categorySlice.actions;
export default categorySlice.reducer;
