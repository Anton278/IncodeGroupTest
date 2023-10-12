import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {addFavourite, clearFavourites, removeFavourite} from './thunks';

const initialState: InitState = {favourites: []};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(clearFavourites.fulfilled, (state, action) => {
      state.favourites = [];
    });

    builder.addCase(addFavourite.fulfilled, (state, action) => {
      state.favourites.push(action.payload);
    });

    builder.addCase(removeFavourite.fulfilled, (state, action) => {
      state.favourites = action.payload;
    });
  },
});

export default favouritesSlice.reducer;
