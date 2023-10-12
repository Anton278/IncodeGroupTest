import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getStarship} from './thunks';

const initialState: InitState = {
  starships: [],
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getStarship.fulfilled, (state, action) => {
      state.starships.push(action.payload);
    });
  },
});

export default starshipsSlice.reducer;
