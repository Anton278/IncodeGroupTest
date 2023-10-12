import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Starship} from '../../../models/Starship';

export const getStarship = createAsyncThunk(
  'starships/getStarship',
  async (url: string) => {
    const res = await axios.get<Starship>(url);
    return res.data;
  },
);
