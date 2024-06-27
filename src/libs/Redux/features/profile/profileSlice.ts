import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface ProfileState {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  dob: string;
  weight: string;
  height: string;
  gender: string;
  password: string;
}

const initialState: ProfileState = {
  id: '',
  name: '',
  email: '',
  phoneNumber: '',
  dob: '',
  weight: '',
  height: '',
  gender: '',
  password: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<object>) => {
      console.log('Updating profile: ', action.payload);
      //update each key in payload
      state = {...state, ...action.payload};
    },
    clearProfile: state => {
      state = {
        id: '',
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
export const {updateProfile, clearProfile} = profileSlice.actions;

export default profileSlice.reducer;
