import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getStarships} from './thunks';

const initialState: InitState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getStarships.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default starshipsSlice.reducer;
