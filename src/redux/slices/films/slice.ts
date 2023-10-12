import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getFilm} from './thunks';

const initialState: InitState = {
  films: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFilm.fulfilled, (state, action) => {
      state.films.push(action.payload);
    });
  },
});

export default filmsSlice.reducer;
