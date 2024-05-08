import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
  },
  reducers: {
    storeToken: state => {
      state.auth = true;
    },
    clearToken: state => {
      state.auth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {storeToken, clearToken} = authSlice.actions;

export default authSlice.reducer;
