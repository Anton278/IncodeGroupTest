import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getVehicle} from './thunks';

const initialState: InitState = {
  vehicles: [],
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVehicle.fulfilled, (state, action) => {
      state.vehicles.push(action.payload);
    });
  },
});

export default vehiclesSlice.reducer;
