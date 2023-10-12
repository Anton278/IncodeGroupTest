import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getPlanet} from './thunks';

const initialState: InitState = {
  planets: [],
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPlanet.fulfilled, (state, action) => {
      state.planets.push(action.payload);
    });
  },
});

export default planetsSlice.reducer;
