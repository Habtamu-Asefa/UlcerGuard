import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    firstTime: true,
  },
  reducers: {
    storeToken: state => {
      state.auth = true;
    },
    clearToken: state => {
      state.auth = false;
    },
    updateFirstTime: state => {
      state.firstTime = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {storeToken, clearToken, updateFirstTime} = authSlice.actions;

export default authSlice.reducer;
