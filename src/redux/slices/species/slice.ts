import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getSpecie} from './thunks';

const initialState: InitState = {
  species: [],
};

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSpecie.fulfilled, (state, action) => {
      state.species.push(action.payload);
    });
  },
});

export default speciesSlice.reducer;
