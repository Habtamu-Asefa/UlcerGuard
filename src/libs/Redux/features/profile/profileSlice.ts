import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ProfileState {
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
      state = {...action.payload};
    },
    clearProfile: state => {
      state = {
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
