import {createAsyncThunk} from '@reduxjs/toolkit';
import VehiclesService from '../../../services/Vehicles';

export const getVehicles = createAsyncThunk('vehicles/getVehicles', () => {
  return VehiclesService.getVehicles();
});
