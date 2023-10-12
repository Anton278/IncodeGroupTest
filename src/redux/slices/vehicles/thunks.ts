import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Vehicle} from '../../../models/Vehicles';

export const getVehicle = createAsyncThunk(
  'vehicles/getVehicle',
  async (url: string) => {
    const res = await axios.get<Vehicle>(url);
    return res.data;
  },
);
