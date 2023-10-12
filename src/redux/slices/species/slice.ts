import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getSpecies} from './thunks';

const initialState: InitState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSpecies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default speciesSlice.reducer;
