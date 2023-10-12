import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getFilms} from './thunks';

const initialState: InitState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFilms.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default filmsSlice.reducer;
