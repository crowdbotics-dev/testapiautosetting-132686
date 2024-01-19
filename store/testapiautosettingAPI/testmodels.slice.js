import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_testmodel_list = createAsyncThunk(
  "testmodels/api_v1_testmodel_list",
  async payload => {
    const response = await apiService.api_v1_testmodel_list(payload)
    return response.data
  }
)
export const api_v1_testmodel_create = createAsyncThunk(
  "testmodels/api_v1_testmodel_create",
  async payload => {
    const response = await apiService.api_v1_testmodel_create(payload)
    return response.data
  }
)
export const api_v1_testmodel_retrieve = createAsyncThunk(
  "testmodels/api_v1_testmodel_retrieve",
  async payload => {
    const response = await apiService.api_v1_testmodel_retrieve(payload)
    return response.data
  }
)
export const api_v1_testmodel_update = createAsyncThunk(
  "testmodels/api_v1_testmodel_update",
  async payload => {
    const response = await apiService.api_v1_testmodel_update(payload)
    return response.data
  }
)
export const api_v1_testmodel_partial_update = createAsyncThunk(
  "testmodels/api_v1_testmodel_partial_update",
  async payload => {
    const response = await apiService.api_v1_testmodel_partial_update(payload)
    return response.data
  }
)
export const api_v1_testmodel_destroy = createAsyncThunk(
  "testmodels/api_v1_testmodel_destroy",
  async payload => {
    const response = await apiService.api_v1_testmodel_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testmodelsSlice = createSlice({
  name: "testmodels",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_testmodel_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_testmodel_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_testmodel_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_testmodel_list,
  api_v1_testmodel_create,
  api_v1_testmodel_retrieve,
  api_v1_testmodel_update,
  api_v1_testmodel_partial_update,
  api_v1_testmodel_destroy,
  slice: testmodelsSlice
}
