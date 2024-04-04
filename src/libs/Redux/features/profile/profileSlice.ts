import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ProfileState {
  name: string;
  phoneNumber: string;
  age: number;
  weight: number;
  gender: 'male' | 'female';
  password: string;
}

const initialState: ProfileState = {
  name: 'testing name',
  phoneNumber: '',
  age: 0,
  weight: 0,
  gender: 'male',
  password: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<object>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = 'update profile';
    },
  },
});

// Action creators are generated for each case reducer function
export const {update} = profileSlice.actions;

export default profileSlice.reducer;
