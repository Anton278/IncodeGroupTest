import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {Specie} from '../../../models/Specie';

export const getSpecie = createAsyncThunk(
  'species/getSpecie',
  async (url: string) => {
    const res = await axios.get<Specie>(url);
    return res.data;
  },
);
