import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getPlanets} from './thunks';

const initialState: InitState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPlanets.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default planetsSlice.reducer;
