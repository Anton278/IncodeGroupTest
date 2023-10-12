import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Planet} from '../../../models/Planet';

export const getPlanet = createAsyncThunk(
  'planets/getPlanet',
  async (url: string) => {
    const res = await axios.get<Planet>(url);
    return res.data;
  },
);
