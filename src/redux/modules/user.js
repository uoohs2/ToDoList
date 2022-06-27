import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userDB = createAsyncThunk('user/userDB', async (thunkAPI) => {
  try {
    const res = await axios.get('https://reqres.in/api/users?page=2');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 친구정보
      .addCase(userDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userDB.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
export const {} = userSlice.actions;

export default userSlice;
