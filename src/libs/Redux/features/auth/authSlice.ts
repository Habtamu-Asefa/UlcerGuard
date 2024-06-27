import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    firstTime: true,
    profile: {
      name: '',
      email: '',
      phoneNumber: '',
      dob: '',
      weight: '',
      height: '',
      gender: '',
      password: '',
    },
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
    updateProfile: (state, action: PayloadAction<object>) => {
      console.log('Updating profile: ', action.payload);
      //update each key in payload
      state.profile = {...action.payload};
    },
    clearProfile: state => {
      state.profile = {
        name: '',
        email: '',
        phoneNumber: '',
        dob: '',
        weight: '',
        height: '',
        gender: '',
        password: '',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  storeToken,
  clearToken,
  updateFirstTime,
  updateProfile,
  clearProfile,
} = authSlice.actions;

export default authSlice.reducer;
