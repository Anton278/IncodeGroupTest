import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getVehicles} from './thunks';

const initialState: InitState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default vehiclesSlice.reducer;
